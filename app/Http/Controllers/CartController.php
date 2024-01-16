<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'quantity' => ['required'],
            'size' => ['required'],
        ]);

        $request->user()->carts()->updateOrCreate([
            'product_id' => $request->product_id,
            'size' => $request->size
        ], [
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'size' => $request->size
        ]);

        Cache::forget('carts_global_count');

        return back();
    }
}
