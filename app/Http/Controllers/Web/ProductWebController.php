<?php

namespace App\Http\Controllers\Web;

use App\Enums\ProductStatus;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductWebController extends Controller
{
    public function index(Request $request)
    {
        $sort = $request->input('sort', 'latest');
        $categorySlug = $request->input('category');

        $products = Product::where('status', ProductStatus::PUBLISH)
            ->with(['images', 'categories', 'sizes'])->when($request->search, fn ($q, $key) => $q->where('name', 'like', "%{$key}%"));

        if ($categorySlug) {
            $category = Category::where('slug', $categorySlug)->first();
            if ($category) {
                $products->whereHas('categories', function ($query) use ($category) {
                    $query->where('categories.id', $category->id);
                });
            }
        }

        if ($sort == 'latest') {
            $products->latest();
        } elseif ($sort == 'oldest') {
            $products->oldest();
        }

        return view('products.index', [
            'products' => $products->paginate(12)->withQueryString(),
            'categories' => Category::with('products')->whereRelation('products', 'status', ProductStatus::PUBLISH)->get(),
        ]);
    }

    public function show(Product $product)
    {
        $stock = $product->load(['images', 'categories', 'sizes']);
        return view('products.show', [
            'product' => $product,
            'out_of_stock' => $stock->sizes->sum('stock')
        ]);
    }
}
