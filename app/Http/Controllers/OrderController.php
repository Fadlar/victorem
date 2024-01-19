<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Models\Order;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = $request->user()->orders->load('orderItems');
        return view('home.order', [
            'orders' => $orders
        ]);
    }

    public function show(Order $order)
    {
        if ($order->status === OrderStatus::PAYMENT_SUCCESS->value || $order->status === OrderStatus::CANCELED->value || $order->status === OrderStatus::CANCELED->value) {
            return redirect()->route('orders');
        }

        return inertia('Checkouts/Checkout', [
            'order' => $order->load('orderItems', 'orderItems.product')
        ]);
    }

    public function checkout(Request $request)
    {
        $carts = $request->user()->carts->load(['product']);
        $weight = 0;

        foreach ($carts as $cart) {
            $weight += $cart->product->weight * $cart->quantity;
        }

        $order = $request->user()->orders()->create([
            'order_id' => 'INV' . now()->format('YmdHis') . rand(1000, 9999),
            'weight' => $weight,
            'original_price' =>  $request->total_original_price,
            'discount' =>  $request->total_discount_amount,
            'amount' =>  $request->total_price,
        ]);

        foreach ($carts as $orderItem) {
            $order->orderItems()->create([
                'product_id' => $orderItem->product->id,
                'quantity' => $orderItem->quantity,
                'size' => $orderItem->size,
                'price' => $orderItem->product->price,
                'discount' => $orderItem->product->discount,
                'amount' => $orderItem->product->discount !== null ? ($orderItem->product->price - $orderItem->product->discount) * $orderItem->quantity : $orderItem->product->price * $orderItem->quantity,
                'data' => $orderItem->product
            ]);
        }


        foreach ($carts as $cart) {
            $cart->delete();
        }

        return redirect('/checkout/' . $order->order_id);
    }

    public function checkout2(Request $request, Order $order)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'address' => ['required'],
            'cost' => ['required'],
            'postal_code' => ['required'],
            'phone_number' => ['required'],
        ]);

        // $expired = Carbon::create($orderCurrent->created_at->format('Y-m-d H:i:s'))->addDays(1);
        // $now = Carbon::create($this->getDate('today')->format('Y-m-d H:i:s'));


        $order->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'address' => $request->address,
            'postal_code' => $request->postal_code,
            'phone_number' => $request->phone_number,
            'cost' => $request->cost['cost'][0]['value'],
            'cost_data' => $request->cost,
            'amount' => $order->amount + $request->cost['cost'][0]['value'],
            'notes' => $request->notes,
            'status' => \App\Enums\OrderStatus::PAYMENT
        ]);

        $paymentCurrent = Payment::where('user_id', $request->user()->id)->where('status', '!=', 'success')->first();

        $payment = Payment::create([
            'user_id' => $request->user()->id,
            'order_id' => $order->id
        ]);

        $transactionDetails = [
            'order_id' => $payment->id . '-' . Str::random(5),
            'gross_amount' => $order->amount
        ];

        $itemsDetails = [
            [
                'id' => $order->id,
                'price' => number_format($order->amount, 0, '.', ''),
                'quantity' => 1,
                'name' => 'Invoice: ' . $order->order_id,
                'brand' => env('APP_NAME'),
            ]
        ];

        $customerDetails = [
            'first_name' => $order->first_name,
            'last_name' => $order->last_name,
            'email' => $request->user()->email,
            'phone' => $order->phone_number
        ];

        $midtransParams = [
            'transaction_details' => $transactionDetails,
            'item_details' => $itemsDetails,
            'customer_details' => $customerDetails
        ];

        $midtransData = $this->getMidtransData($midtransParams);

        $payment->snap_url = $midtransData->redirect_url;
        $payment->snap_token = $midtransData->token;

        $payment->metadata = [
            'invoice' => $transactionDetails['order_id'],
            'order' => $order->load('orderItems')
        ];

        $payment->save();

        return back();
    }

    private function getMidtransData($params)
    {
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        \Midtrans\Config::$isProduction = (bool) env('MIDTRANS_PRODUCTION');
        \Midtrans\Config::$is3ds = (bool) env('MIDTRANS_3DS');

        $snapUrl = \Midtrans\Snap::createTransaction($params);
        return $snapUrl;
    }

    public function payMidtrans(Order $order)
    {
        $order->load('payment');

        return inertia('Pay', [
            'payment' => $order->payment
        ]);
    }

    public function invoice()
    {
        return inertia('Checkouts/Invoice');
    }
}
