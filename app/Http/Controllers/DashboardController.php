<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Models\Order;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $order = Order::where('status', '!=', OrderStatus::PENDING)->where('status', '!=', OrderStatus::CANCELED)->where('status', '!=', OrderStatus::PAYMENT)->get()->count();
        $sales = Order::where('status', OrderStatus::FINISH)->get()->count();
        $revenue = Order::where('status', OrderStatus::FINISH)->get()->sum('amount');
        $trafficData = [
            [
                "day" => "Sunday",
                "sale" => 4000,
                "cost" => 2400,

            ],
            [

                "day" => "Monday",
                "sale" => 3000,
                "cost" => 1398,
            ],
            [

                "day" => "Tuesday",
                "sale" => 2000,
                "cost" => 9800,
            ],
            [
                "day" => "Wednesday",
                "sale" => 2780,
                "cost" => 3908,

            ],
            [

                "day" => "Thursday",
                "sale" => 1890,
                "cost" => 4800,
            ],
            [

                "day" => "Friday",
                "sale" => 2390,
                "cost" => 3800,
            ],
            [

                "day" => "Saturday",
                "sale" => 3490,
                "cost" => 4300,
            ],
        ];

        $conventionRateData = [
            [

                "day" => "Sunday",
                "sale" => 2000,
                "cost" => 2400,
            ],
            [
                "day" => "Monday",
                "sale" => 3000,
                "cost" => 1398,

            ],
            [

                "day" => "Tuesday",
                "sale" => 2000,
                "cost" => 9800,
            ],
            [

                "day" => "Wednesday",
                "sale" => 2780,
                "cost" => 3908,
            ],
            [

                "day" => "Thursday",
                "sale" => 1890,
                "cost" => 4800,
            ],
            [

                "day" => "Friday",
                "sale" => 2390,
                "cost" => 3800,
            ],
            [

                "day" => "Saturday",
                "sale" => 3490,
                "cost" => 4300,
            ],
        ];

        $barData = [
            [

                "day" => "Sunday",
                "sale" => 2000,
                "cost" => 2400,
            ],
            [

                "day" => "Monday",
                "sale" => 2800,
                "cost" => 1398,
            ],
            [

                "day" => "Tuesday",
                "sale" => 3500,
                "cost" => 9800,
            ],
            [

                "day" => "Wednesday",
                "sale" => 2780,
                "cost" => 3908,
            ],
            [

                "day" => "Thursday",
                "sale" => 1890,
                "cost" => 4800,
            ],
            [

                "day" => "Friday",
                "sale" => 2390,
                "cost" => 3800,
            ],
            [

                "day" => "Saturday",
                "sale" => 3490,
                "cost" => 4300,
            ],
        ];

        $starCards = [
            [
                'id' => "1",
                'title' => "Orders",
                'metric' => $order,
                'increased' => true,
                'decreased' => false,
                'fill' => "#015DE1",
                'chart' => $trafficData,
            ],
            [

                "id" => "2",
                "title" => "Sales",
                "metric" => $sales,
                "increased" => false,
                "decreased" => true,
                "fill" => "#048848",
                "chart" => $conventionRateData,
            ],
            [

                "id" => "3",
                "title" => "Revenue",
                "metric" => 'Rp' . number_format($revenue, 0, ',', '.'),
                "increased" => true,
                "decreased" => false,
                "fill" => "#B92E5D",
                "chart" => $barData,
            ]

        ];

        $orders = Order::where('status', '!=', OrderStatus::PENDING)->where('status', '!=', OrderStatus::CANCELED)->where('status', '!=', OrderStatus::PAYMENT)->with(['user', 'orderItems'])->limit(15)->get();

        return inertia('Dashboard', [
            'starCard' => $starCards,
            'recentOrders' => $orders
        ]);
    }
}
