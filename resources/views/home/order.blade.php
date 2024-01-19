@extends('layouts.app')

@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>My Orders</h4>
                        <div class="breadcrumb__links">
                            <a href="/">Home</a>
                            <a href="/orders">Order</a>
                            <span>My Orders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    @if (!$orders->count())
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="width: 5rem; height: 5rem; margin-bottom: 1rem;" viewBox="0 0 16 16">
                                <path
                                    d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                        <h5 class="text-center">Your order is empty.</h5>
                        <div class="text-center mt-3">
                            <div class="continue__btn">
                                <a href="/products">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endif
    @if ($orders->count())
        <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shopping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order id</th>
                                        <th>Items</th>
                                        <th>Amount</th>
                                        <th>Created</th>
                                        <th>Modified</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($orders as $order)
                                        <tr>
                                            <td>
                                                <a class="text-dark" href="/order/{{ $order->order_id }}/invoice" class="text-uppercase">#{{ $order->order_id }}</a>
                                            </td>
                                            <td>
                                                {{ $order->orderItems->count() }}
                                            </td>
                                            <td>{{ $order->price_format($order->amount) }}</td>
                                            <td>
                                                <span class="d-block" style="font-weight: 600;">{{ $order->created_at->format('F d, Y') }}</span>
                                                <span class="d-block text-secondary" style="font-size: small; font-weight: 400">{{ $order->created_at->format('H:i A') }}</span>
                                            </td>
                                            <td>
                                                <span class="d-block" style="font-weight: 600;">{{ $order->updated_at->format('F d, Y') }}</span>
                                                <span class="d-block text-secondary" style="font-size: small; font-weight: 400">{{ $order->updated_at->format('H:i A') }}</span>
                                            </td>
                                            <td>
                                                <div class="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color: {{ $order->status($order->status) }}" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                                                    </svg>
                                                    <span style="font-weight: 600; text-transform: capitalize; color: {{ $order->status($order->status) }}">
                                                        @if ($order->status === 'payment_success')
                                                            {{ str_replace('_', ' ', $order->status) }}
                                                        @else
                                                            {{ $order->status }}
                                                        @endif
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="/order/{{ $order->order_id }}/invoice" class="btn btn-outline-dark btn-sm rounded-0 px-3">Detail</a>
                                            </td>
                                        </tr>
                                        {{-- <tr>
                                            @if ($cart->product->sizes->where('name', $cart->size)->first()['stock'] > 0)
                                                <td colspan="5" style="padding-top:7.5px; padding-bottom: 7.5px; border-top: 0" class="text-secondary">Stock available: {{ $cart->product->sizes->where('name', $cart->size)->first()['stock'] }}</td>
                                            @else
                                                <td colspan="5" style="padding-top:7.5px;  padding-bottom: 7.5px; border-top: 0" class="text-danger">Sold out</td>
                                            @endif
                                        </tr> --}}
                                    @empty
                                        <tr>
                                            <td colspan="5">
                                                <div class="text-center">Your order is empty.</div>
                                            </td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="continue__btn">
                                    <a href="/products">Continue Shopping</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End -->
    @endif

@endsection
