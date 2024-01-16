<?php

namespace App\Http\Controllers;

use App\Models\Discount;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function index(Request $request)
    {
        $discounts = Discount::with(['user', 'product', 'product.images', 'product.categories', 'product.user'])->latest()->get();
        return inertia('Admin/Discounts/Index', [
            'discounts' => $discounts,
        ]);
    }

    public function create()
    {
        return inertia('Admin/Discounts/Create', [
            'discount' => new Discount(),
            'products' => Product::with(['user', 'images', 'discount'])->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->merge([
            'discount_price' => str_replace(',', '', $request->discount_price),
            'percentage' => str_replace(',', '', $request->percentage)
        ]);

        $price = 0;
        if (count($request->product)) {
            $price = $request->product['price'];
        }

        // dd($request->all());

        $request->validate([
            'product' => ['required'],
            'discount_price' => ['required', 'numeric', 'gte:1', 'lte:' . $price],
            'percentage' => ['required', 'numeric', 'gte:1', 'lte:100'],
            'start_at' => ['required'],
            'end_at' => ['required'],
        ]);


        $discount = $request->user()->discounts()->create([
            'product_id' => $request->product['id'],
            'discount_price' => $request->discount_price,
            'percentage' => $request->percentage,
            'start_at' => Carbon::parse($request->start_at)->timestamp * 1000,
            'end_at' => Carbon::parse($request->end_at)->timestamp * 1000
        ]);

        return redirect()->route('ecommerce.discounts.index');
    }

    public function edit(Discount $discount)
    {
        return inertia('Admin/Discounts/Edit', [
            'discount' => $discount->load('product', 'product.images'),
            'products' => Product::with(['user', 'images', 'discount'])->get()
        ]);
    }

    public function update(Discount $discount, Request $request)
    {
        $request->merge([
            'discount_price' => str_replace(',', '', $request->discount_price),
            'percentage' => str_replace(',', '', $request->percentage)
        ]);

        $price = 0;
        if (count($request->product)) {
            $price = $request->product['price'];
        }

        // dd($request->all());

        $request->validate([
            'product' => ['required'],
            'discount_price' => ['required', 'numeric', 'gte:1', 'lte:' . $price],
            'percentage' => ['required', 'numeric', 'gte:1', 'lte:100'],
            'start_at' => ['required'],
            'end_at' => ['required'],
        ]);


        $discount->update([
            'product_id' => $request->product['id'],
            'discount_price' => $request->discount_price,
            'percentage' => $request->percentage,
            'start_at' => Carbon::parse($request->start_at)->timestamp * 1000,
            'end_at' => Carbon::parse($request->end_at)->timestamp * 1000
        ]);

        return redirect()->route('ecommerce.discounts.index');
    }

    public function destroy(Discount $discount)
    {
        $discount->delete();
        return back();
    }
}
