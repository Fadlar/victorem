<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class ManageOrderController extends Controller
{
    public function index()
    {
        $orders = Order::where('status', '!=', OrderStatus::PENDING)->with(['user', 'orderItems', 'orderItems.product'])->latest()->get();
        return inertia('Admin/Order/Index', [
            'orders' => $orders
        ]);
    }

    public function show(Order $order)
    {
        return inertia('Admin/Order/Show', [
            'order' => $order->load('user', 'payment', 'orderItems', 'orderItems.product')
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $order->update([
            'status' => $request->status,
            'resi' => $request->resi,
            'reason_cancelled' => $request->reason_cancelled,
        ]);

        return back();
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return redirect()->route('ecommerce.orders.index');
    }
}
