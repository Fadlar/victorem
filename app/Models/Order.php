<?php

namespace App\Models;

use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }

    public function price_format($value)
    {
        return 'Rp' . number_format($value, 0, ',', '.');
    }

    public function status($status)
    {
        $status_color = "";
        if ($status === OrderStatus::PENDING->value || $status === OrderStatus::CANCELED->value) {
            $status_color = "#e11d48";
        } else if ($status === OrderStatus::PAYMENT_SUCCESS->value || $status === OrderStatus::FINISH->value) {
            $status_color = "#10b981";
        } else if ($status === OrderStatus::PAYMENT->value || $status === OrderStatus::REFUND->value) {
            $status_color = "#eab308";
        } else {
            $status_color = "#1f2937";
        }

        return $status_color;
    }
}
