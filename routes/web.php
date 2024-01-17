<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RajaongkirController;
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
        Route::prefix('location')->group(function () {
            Route::get('province', [RajaongkirController::class, 'province']);
            Route::get('city/{province_id}', [RajaongkirController::class, 'city']);
            Route::get('subdistrict/{city_id}', [RajaongkirController::class, 'subdistrict']);
            Route::get('cost/{subdistrict_id}', [RajaongkirController::class, 'cost']);
        });

        Route::prefix('order')->group(function () {
            Route::post('', [OrderController::class, 'store']);
        });

        Route::prefix('language')->controller(LanguageController::class)->group(function () {
            Route::get('', 'index');
            Route::post('create', 'create');
            Route::post('', 'store'); // change locale
            Route::put('', 'edit');
            Route::delete('', 'destroy');
        });

        Route::prefix('cart')->controller(CartController::class)->group(function () {
            Route::get('', 'index');
            Route::post('', 'store');
            Route::put('', 'update');
            Route::delete('{cart}', 'destroy');
        });

        Route::prefix('checkout')->group(function () {
            Route::get('{order}', [OrderController::class, 'show']);
            Route::post('', [OrderController::class, 'checkout']);
        });

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
