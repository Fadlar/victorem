<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductWebController extends Controller
{
    public function show(Product $product)
    {
        $stock = $product->load(['images', 'categories', 'sizes']);
        return view('products.show', [
            'product' => $product,
            'out_of_stock' => $stock->sizes->sum('stock')
        ]);
    }
}
