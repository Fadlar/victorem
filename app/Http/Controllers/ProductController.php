<?php

namespace App\Http\Controllers;

use App\Enums\ProductStatus;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        return inertia('Admin/Products/Index', [
            'products' => Product::with(['user', 'images', 'categories', 'discount'])->latest()->get()
        ]);
    }

    public function create()
    {
        return inertia('Admin/Products/Create', [
            'product' => new Product(),
            'categories' => Category::get()
        ]);
    }

    public function store(Request $request)
    {
        $request->merge([
            'customer_price' => str_replace(',', '', $request->customer_price),
            'agent_price' => str_replace(',', '', $request->agent_price),
        ]);

        $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'categories' => ['required'],
            'description' => ['required'],
            'customer_price' => ['required', 'numeric', 'gte:1'],
            'agent_price' => ['required', 'numeric', 'gte:1'],
            'stock' => ['required', 'numeric', 'gte:1'],
            'weight' => ['required', 'numeric', 'gte:1'],
            'images' => ['required', 'array'],
            'images.*' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:5048']
        ]);

        $product = $request->user()->products()->create([
            'slug' => str()->slug($request->name) . '-' . str()->random(3),
            'name' => $request->name,
            'description' => $request->description,
            'customer_price' => $request->customer_price,
            'agent_price' => $request->agent_price,
            'stock' => $request->stock,
            'weight' => $request->weight
        ]);

        if (($request->images)) {
            $lastProductImage = ProductImage::where('product_id', $product->id)->latest('position')->firstOr(fn () => false);
            $startPosition = 1;

            if ($lastProductImage) {
                $startPosition = $lastProductImage->position + 1;
            }

            $images = $request->file('images');
            foreach ($images as $value) {
                $imageName = $value->store('product-image', 'public');
                $product->images()->create([
                    'url' => $imageName,
                    'position' => $startPosition++
                ]);
            }
        }

        $categoryIds = collect($request->categories)->pluck('id')->toArray();
        if (!empty($categoryIds)) {
            $product->categories()->sync($categoryIds);
        }


        return redirect()->route('ecommerce.products.index');
    }

    public function edit(Product $product)
    {
        return inertia('Admin/Products/Edit', [
            'product' => $product->load(['categories', 'images']),
            'categories' => Category::get()
        ]);
    }

    public function update(Product $product, Request $request)
    {
        $request->merge([
            'customer_price' => str_replace(',', '', $request->customer_price),
            'agent_price' => str_replace(',', '', $request->agent_price),
        ]);

        $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'categories' => ['required'],
            'description' => ['required'],
            'customer_price' => ['required', 'numeric', 'gte:1'],
            'agent_price' => ['required', 'numeric', 'gte:1'],
            'stock' => ['required', 'numeric', 'gte:1'],
            'weight' => ['required', 'numeric', 'gte:1'],
            'images' => ['nullable', 'array'],
            'images.*' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:5048']
        ]);

        if (($request->images)) {
            $lastProductImage = ProductImage::where('product_id', $product->id)->latest('position')->firstOr(fn () => false);
            $startPosition = 1;

            if ($lastProductImage) {
                $startPosition = $lastProductImage->position + 1;
            }

            $images = $request->file('images');
            foreach ($images as $value) {
                $imageName = $value->store('product-image', 'public');
                $product->images()->create([
                    'url' => $imageName,
                    'position' => $startPosition++
                ]);
            }
        }

        $categoryIds = collect($request->categories)->pluck('id')->toArray();
        if (!empty($categoryIds)) {
            $product->categories()->sync($categoryIds);
        }

        $product->update($request->all());
        return back();
    }

    public function destroy(Product $product)
    {
        if ($product->images->count() > 0) {
            foreach ($product->images as $image) {
                Storage::delete($image->url);
                $image->delete();
            }
        }

        $product->delete();

        return back();
    }

    public function changeStatus(Product $product)
    {
        $product->update([
            'status' => $product->status === ProductStatus::DRAFT->value ? ProductStatus::PUBLISH->value : ProductStatus::DRAFT->value
        ]);

        return back();
    }

    public function deleteSingleProductImage(ProductImage $productImage)
    {
        if ($productImage->url !== null) {
            Storage::delete($productImage->url);
        }

        $productImage->delete();

        return back();
    }

    public function reorderImage(Request $request, Product $product)
    {
        foreach ($request->images as $image) {
            $product->images()->where('id', $image['id'])->update([
                'position' => $image['position']
            ]);
        }

        return back();
    }
}
