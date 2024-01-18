<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $carts = $request->user()->carts->load(['product', 'product.sizes', 'product.images']);
        foreach ($carts as $cart) {
            $product = $cart->product;
            $availableStock = $product->sizes->where('name', $cart->size)->first();

            // periksa
            if ($cart->quantity > $availableStock->stock) {
                $cart->update(['quantity' => $availableStock->stock]);
            }
        }

        $totalPrice = 0;
        $totalOriginalPrice = 0;
        $totalDiscountAmount = 0;

        foreach ($carts as $cart) {
            $product = $cart->product;

            // Menghitung harga dengan diskon jika diskon tidak kosong
            if ($product->discount > 0) {
                $itemPrice = ($product->price - $product->discount) * $cart->quantity;
            } else {
                $itemPrice = $product->price * $cart->quantity;
            }

            // Menghitung harga sebelum diskon
            $originalPrice = $product->price * $cart->quantity;

            // Menghitung besaran diskon
            $discountAmount = $originalPrice - $itemPrice;

            // Menambahkan ke total
            $totalPrice += $itemPrice;
            $totalOriginalPrice += $originalPrice;
            $totalDiscountAmount += $discountAmount;
        }

        return view('home.cart', [
            'carts' => $carts,
            'total_price' => $totalPrice,
            'total_original_price' => $totalOriginalPrice,
            'total_discount_amount' => $totalDiscountAmount,
        ]);
    }

    public function store(Request $request)
    {
        $product = Product::where('id', $request->product_id)
            ->with(['sizes' => function ($query) use ($request) {
                $query->where('name', $request->size);
            }])
            ->first();

        $request->validate([
            'quantity' => ['required'],
            'size' => ['required'],
        ]);

        $request->user()->carts()->updateOrCreate([
            'product_id' => $request->product_id,
            'size' => $request->size
        ], [
            'product_id' => $request->product_id,
            'quantity' => $request->quantity > $product['sizes'][0]['stock'] ? $product['sizes'][0]['stock'] : $request->quantity,
            'size' => $request->size
        ]);

        Cache::forget('carts_global_count');

        return redirect('/cart');
    }

    public function update(Request $request)
    {
        $request->validate([
            'cart_updates' => ['required', 'array'],
            'cart_updates.*.cart_id' => ['required', 'exists:carts,id'],
            'cart_updates.*.new_quantity' => ['required', 'numeric', 'min:1'] // Ganti dengan aturan validasi sesuai kebutuhan
        ]);

        foreach ($request->cart_updates as $cart) {
            $currentCart = Cart::find($cart['cart_id'])->load(['product', 'product.sizes']);

            $currentCart->update([
                'quantity' => $cart['new_quantity'],
            ]);
        }

        return back();
    }

    protected function getStockFromSizesArray($sizesArray, $targetSize)
    {
        foreach ($sizesArray as $sizeInfo) {
            if ($sizeInfo['name'] === $targetSize) {
                return $sizeInfo['stock'];
            }
        }

        return 0; // Jika tidak ada stok yang cocok, kembalikan 0 atau nilai default yang sesuai
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();
        Cache::forget('carts_global_count');
        return back();
    }
}
