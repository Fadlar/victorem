<?php 

namespace App\Enums;

enum VoucherType: string
{
  case ALLPRODUCT = 'allproduct';
  case ONEPRODUCT = 'product';
}