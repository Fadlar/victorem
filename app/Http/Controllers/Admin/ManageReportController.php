<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Exports\SalesExport;
use App\Exports\StockExport;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Size;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ManageReportController extends Controller
{
    public function index(Request $request)
    {
        $startDate = $request->start_at ?  Carbon::create($request->start_at) : '';
        $endDate = $request->start_at ? Carbon::create($request->end_at) : '';

        $products = OrderItem::whereHas('order', function ($query) use ($startDate, $endDate) {
            $query->whereStatus(OrderStatus::FINISH)
                ->when($startDate, fn ($q) => $q->whereDate('updated_at', '>=', $startDate))
                ->when($endDate, fn ($q) => $q->whereDate('updated_at', '<=', $endDate));
        })
            ->with(['product' => function ($query) {
                $query->select('id', 'name');
            }, 'order' => function ($query) {
                $query->select('id', 'created_at', 'updated_at', 'status');
            }])
            ->select('id', 'size', 'quantity', 'price', 'amount', 'product_id', 'order_id', 'updated_at')
            ->latest()->get();

        return inertia('Admin/Report/Index', [
            'products' => $products,
            'filter' => $request->only(['start_at', 'end_at'])
        ]);
    }

    public function saleExport(Request $request)
    {
        $startDate = $request->start_at ?  Carbon::create($request->start_at) : '';
        $endDate = $request->start_at ? Carbon::create($request->end_at) : '';

        $products = OrderItem::whereHas('order', function ($query) use ($startDate, $endDate) {
            $query->whereStatus(OrderStatus::FINISH)
                ->when($startDate, fn ($q) => $q->whereDate('updated_at', '>=', $startDate))
                ->when($endDate, fn ($q) => $q->whereDate('updated_at', '<=', $endDate));
        })
            ->with(['product' => function ($query) {
                $query->select('id', 'name');
            }, 'order' => function ($query) {
                $query->select('id', 'created_at', 'updated_at', 'status');
            }])
            ->select('id', 'size', 'quantity', 'price', 'amount', 'product_id', 'order_id', 'updated_at')
            ->latest()->get();

        $productsNew = [];
        foreach ($products as $product) {
            $productsNew[] = [
                'product_name' => $product['product']['name'],
                'size' => $product['size'],
                'quantity' => $product['quantity'],
                'price' => 'Rp' . number_format($product['price'], 0, ',', '.'),
                'date' => $product['order']['updated_at']->format('F j, Y - g:i A'),
            ];
        }

        return Excel::download(new SalesExport(collect($productsNew)), 'sale-export.xlsx');
    }


    public function stock(Request $request)
    {
        $startDate = Carbon::create($request->start_at);
        $endDate = Carbon::create($request->end_at);
        $sizes = Size::with(['product' => function ($query) {
            $query->select('id', 'name');
        }])->when($request->size, fn ($q, $key) => $q->where('name', $key))
            ->when($request->start_at, fn ($q) => $q->whereDate('sizes.updated_at', '>=', $startDate))
            ->when($request->end_at, fn ($q) => $q->whereDate('sizes.updated_at', '<=', $endDate))
            ->latest()->get();

        return inertia('Admin/Report/Stock', [
            'sizes' => $sizes,
            'filter' => $request->only(['size', 'start_at', 'end_at'])
        ]);
    }

    public function stockExport(Request $request)
    {
        $startDate = Carbon::create($request->start_at);
        $endDate = Carbon::create($request->end_at);
        $sizes = Size::with(['product' => function ($query) {
            $query->select('id', 'name');
        }])->when($request->size, fn ($q, $key) => $q->where('name', $key))
            ->when($request->start_at, fn ($q) => $q->whereDate('sizes.updated_at', '>=', $startDate))
            ->when($request->end_at, fn ($q) => $q->whereDate('sizes.updated_at', '<=', $endDate))
            ->latest()->get();

        $sizesNew = [];
        foreach ($sizes as $item) {
            $sizesNew[] = [
                'product_name' => $item['product']['name'],
                'size' => $item['name'],
                'stock' => $item['stock'],
                'modified' => $item['updated_at']->format('F j, Y - g:i A')
            ];
        }

        return Excel::download(new StockExport(collect($sizesNew)), 'stock-export.xlsx');
    }

    public function user(Request $request)
    {
        $startDate = $request->start_at ? Carbon::create($request->start_at) : '';
        $endDate = $request->end_date ? Carbon::create($request->end_at) : '';

        $users = User::when($startDate, fn ($q) => $q->whereDate('created_at', '>=', $startDate))->when($endDate, fn ($q) => $q->whereDate('created_at', '<=', $endDate))->get();
        return;

        return inertia('Admin/Report/User', [
            'users' => $users
        ]);
    }

    public function userExport()
    {
        // 
    }
}
