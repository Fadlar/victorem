<?php

namespace App\Enums;

enum OrderStatus: string
{
  case PENDING = 'pending'; // ketika customer klik process to checkout di halaman cart
  case PAYMENT = 'payment'; // ketika customer klik tombol pay
  case PAYMENT_SUCCESS = 'payment_success'; // ketika pembayaran success
  case PACKAGING = 'packaging'; // ketika produk sedang dikemas
  case SHIPPED = 'shipped'; // ketika barang sudah dikirim
  case FINISH = 'finish'; // ketika barang sudah diterima customer
  case REFUND = 'refund'; // ketika terjadi pengembalian barang oleh user
  case CANCELED = 'canceled'; // ketika pesanan di cancel
}
