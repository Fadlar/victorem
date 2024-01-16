<?php

namespace App\Http\Controllers;

use App\Enums\ProductStatus;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home/Home', [
            'products' => Product::where('status', ProductStatus::PUBLISH)->with(['images', 'categories', 'sizes'])->latest()->limit(8)->get()
        ]);
    }
}
