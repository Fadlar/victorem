<?php

namespace App\Enums;

enum OrderStatus: string
{
  case PENDING = 'pending';
  case PAYMENT = 'payment';
  case PAYMENT_SUCCESS = 'payment_success';
  case PACKAGING = 'packaging';
  case SHIPPED = 'shipped';
  case FINISH = 'finish';
  case REFUND = 'refund';
  case CANCELED = 'canceled';
}
