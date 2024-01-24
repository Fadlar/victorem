<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;

class ManageReportController extends Controller
{
    public function index()
    {
        $products = OrderItem::whereHas('order', function ($query) {
            $query->whereStatus(OrderStatus::FINISH);
        })->with(['product' => function ($query) {
            $query->select('id', 'name');
        }, 'order' => function ($query) {
            $query->select('id', 'created_at', 'updated_at', 'status');
        }])->select('id', 'size', 'quantity', 'price', 'amount', 'product_id', 'order_id')->get();

        return inertia('Admin/Report/Index', [
            'products' => $products
        ]);
    }

    public function stock()
    {
        $sizes = Size::with(['product' => function ($query) {
            $query->select('id', 'name');
        }])->get();
        return inertia('Admin/Report/Stock', [
            'sizes' => $sizes
        ]);
    }
}
