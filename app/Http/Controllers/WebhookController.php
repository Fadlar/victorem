<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\PaymentLog;
use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function index(Request $request)
    {
        $signatureKey = $request->signature_key;

        $orderId = $request->order_id;
        $statusCode = $request->status_code;
        $grossAmount = $request->gross_amount;
        $serverKey = env('MIDTRANS_SERVER_KEY');

        $mySignatureKey = hash('sha512', $orderId . $statusCode . $grossAmount . $serverKey);

        $transactionStatus = $request->transaction_status;
        $type = $request->payment_type;
        $fraudStatus = $request->fraud_status;

        if ($signatureKey !== $mySignatureKey) {
            return response()->json([
                'status' => 'error',
                'message' => 'invalid signature'
            ], 400);
        }

        $realOrderId = explode('-', $orderId);

        $payment = Payment::find($realOrderId[0]);

        if (!$payment) {
            return response()->json([
                'status' => 'error',
                'message' => 'operation not permitted'
            ], 405);
        }

        if ($transactionStatus == 'capture') {
            if ($fraudStatus == 'challenge') {
                $payment->status = 'challenge';
            } else if ($fraudStatus == 'accept') {
                $payment->status = 'success';
            }
        } else if ($transactionStatus == 'settlement') {
            $payment->status = 'success';
        } else if ($transactionStatus == 'cancel' || $transactionStatus == 'deny' || $transactionStatus == 'expire') {
            $payment->status = 'failure';
        } else if ($transactionStatus == 'pending') {
            $payment->status = 'pending';
        }

        $logData = [
            'status' => $transactionStatus,
            'raw_response' => json_encode($request->all()),
            'payment_id' => $realOrderId[0],
            'payment_type' => $type
        ];

        PaymentLog::create($logData);

        $payment->save();
        $payment = Payment::find(1);
        if ($payment->status === 'success') {
            $payment->order()->update([
                'status' => \App\Enums\OrderStatus::PAYMENT_SUCCESS
            ]);

            $orderItems = OrderItem::where('order_id', $payment->order->id)->with('product')->get();

            foreach ($orderItems as $orderItem) {
                $size = $orderItem->product->sizes()->where('name', $orderItem->size)->firstOr(fn () => false);
                if ($size) {
                    if ($size->quantity !== 0 || $size->quantity !== null) {
                        $size->update([
                            'stock' => $size->stock - $orderItem->quantity
                        ]);
                    }
                }
            }
        }

        return response()->json('oke');
    }
}
