<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductWebController extends Controller
{
    public function show(Product $product)
    {
        return inertia('Products/Show', [
            'product' => $product->load(['images', 'categories', 'sizes'])
        ]);
    }
}
