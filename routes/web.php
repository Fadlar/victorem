<?php

use App\Http\Controllers\Admin\ManageOrderController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ManageReportController;
use App\Http\Controllers\Admin\ManageUserController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RajaongkirController;
use App\Http\Controllers\Web\ProductWebController;
use App\Http\Controllers\WebhookController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('midtrans-webhook', [WebhookController::class, 'index']);

Route::get('/redirecting', function () {
    return inertia('Redirecting');
});

Route::middleware('locale')->group(function () {
    Route::get('pay/{order}', [OrderController::class, 'payMidtrans']);
    Route::get('/', [HomeController::class, 'index']);
    Route::prefix('products')->group(function () {
        Route::get('', [ProductWebController::class, 'index']);
        Route::get('{product:slug}', [ProductWebController::class, 'show']);
    });

    Route::get('about', [HomeController::class, 'about']);
    Route::get('contact', [HomeController::class, 'contact']);

    Route::middleware(['auth'])->group(function () {
        Route::prefix('location')->group(function () {
            Route::get('province', [RajaongkirController::class, 'province']);
            Route::get('city/{province_id}', [RajaongkirController::class, 'city']);
            Route::get('subdistrict/{city_id}', [RajaongkirController::class, 'subdistrict']);
            Route::get('cost/{subdistrict_id}', [RajaongkirController::class, 'cost']);
        });

        Route::get('orders', [OrderController::class, 'index'])->name('orders');


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
            Route::get('{order:order_id}', [OrderController::class, 'show']);
            Route::post('', [OrderController::class, 'checkout']);
        });

        Route::prefix('order')->group(function () {
            Route::post('{order}', [OrderController::class, 'checkout2']);
            Route::get('{order:order_id}/invoice', [OrderController::class, 'invoice']);
        });

        Route::middleware('role:admin')->group(function () {
            Route::get('dashboard', [DashboardController::class, 'index']);

            Route::prefix('reports')->group(function () {
                Route::get('sale', [ManageReportController::class, 'index']);
                Route::get('stock', [ManageReportController::class, 'stock']);
            });

            Route::get('settings', [SettingController::class, 'index']);
            Route::prefix('admin')->name('admin.')->group(function () {
                Route::resource('users', ManageUserController::class);
            });

            Route::prefix('ecommerce')->name('ecommerce.')->group(function () {
                // Categories
                Route::resource('categories', CategoryController::class)->except('show', 'create')->parameters(['categories' => 'category:slug']);
                // Products
                Route::resource('products', ProductController::class)->parameters(['products' => 'product:slug']);
                Route::put('change-product-status/{product:slug}', [ProductController::class, 'changeStatus']);
                Route::delete('product-image/{productImage}', [ProductController::class, 'deleteSingleProductImage']);
                Route::put('product-image/{product:slug}', [ProductController::class, 'reorderImage']);

                Route::resource('orders', ManageOrderController::class)->except('create', 'store');
            });
        });

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__ . '/auth.php';
});
