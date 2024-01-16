<?php

namespace App\Enums;

enum OrderStatus : string
{
  case PENDING = 'pending';
  case PAYMENT_SUCCESS = 'confirmed';
  case PROCESS = 'process';
  case SHIPPING = 'shipping';
  case FINISH = 'finish';
  case CANCELED = 'canceled';
}