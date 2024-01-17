<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function show(Order $order)
    {
        return inertia('Checkouts/Checkout', [
            'order' => $order
        ]);
    }

    public function checkout(Request $request)
    {
        $carts = $request->user()->carts->load(['product']);
        $weight = 0;

        foreach ($carts as $cart) {
            $weight += $cart->product->weight * $cart->quantity;
        }

        $order = $request->user()->orders()->create([
            'weight' => $weight,
            'original_price' =>  $request->total_original_price,
            'discount' =>  $request->total_discount_amount,
            'amount' =>  $request->total_price,
        ]);

        return redirect('/checkout');
    }

    public function store(Request $request)
    {
        return $request->all();
    }
}
