<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\Web\ProductWebController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('locale')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::prefix('products')->group(function () {
        Route::get('{product:slug}', [ProductWebController::class, 'show']);
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware(['auth'])->group(function () {
        Route::prefix('language')->controller(LanguageController::class)->group(function () {
            Route::get('', 'index');
            Route::post('create', 'create');
            Route::post('', 'store'); // change locale
            Route::put('', 'edit');
            Route::delete('', 'destroy');
        });

        Route::post('/cart', [CartController::class, 'store']);

        Route::prefix('ecommerce')->name('ecommerce.')->group(function () {
            // Categories
            Route::resource('categories', CategoryController::class)->except('show', 'create')->parameters(['categories' => 'category:slug']);
            // Products
            Route::resource('products', ProductController::class)->parameters(['products' => 'product:slug']);
            Route::put('change-product-status/{product:slug}', [ProductController::class, 'changeStatus']);
            Route::delete('product-image/{productImage}', [ProductController::class, 'deleteSingleProductImage']);
            Route::put('product-image/{product:slug}', [ProductController::class, 'reorderImage']);
            Route::resource('discounts', DiscountController::class);
            Route::resource('vouchers', VoucherController::class);
        });
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__ . '/auth.php';
});
