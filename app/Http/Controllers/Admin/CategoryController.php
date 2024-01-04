<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        return inertia('Admin/Categories/Index', [
            'categories' => Category::with(['products', 'user'])->latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:25'],
            'description' => ['required', 'string', 'min:3', 'max:100'],
            'icon' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:2048']
        ]);

        $iconName = null;
        if ($request->hasFile('icon')) {
            $iconName = $request->file('icon')->store('product-categories', 'public');
        }

        $request->user()->categories()->create([
            'name' => $request->name,
            'slug' => str()->slug($request->name) . str()->random(3),
            'description' => $request->description,
            'icon' => $iconName
        ]);

        return to_route('ecommerce.categories.index');
    }

    public function edit(Category $category)
    {
        return inertia('Admin/Categories/Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:25'],
            'description' => ['required', 'string', 'min:3', 'max:100'],
            'icon' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048']
        ]);

        if ($request->hasFile('icon')) {
            if ($category->icon !== null) {
                Storage::delete($category->icon);
            }
            $iconName = $request->file('icon')->store('product-categories', 'public');
            $category->update(['icon' => $iconName]);
        }

        $category->update([
            'name' => $request->name,
            'slug' => str()->slug($request->name) . str()->random(3),
            'description' => $request->description,
        ]);

        return to_route('ecommerce.categories.index');
    }

    public function destroy(Category $category)
    {
        if ($category->icon !== null) {
            Storage::delete($category->icon);
        }

        $category->delete();

        return to_route('ecommerce.categories.index');
    }
}
