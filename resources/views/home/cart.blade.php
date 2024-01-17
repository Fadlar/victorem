@extends('layouts.app')
@push('scripts')
    <script>
        $(document).ready(function() {
            $('.delete-cart-item').click(function() {
                var cartId = $(this).data('cart-id');
                var confirmation = confirm('Are you sure you want to delete this item from the cart?');

                if (confirmation) {
                    // Use jQuery AJAX to send a DELETE request
                    $.ajax({
                        url: '/cart/' + cartId,
                        type: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        success: function(data) {
                            // Handle success or error, and optionally update the UI
                            console.log(data);
                            // Reload the page or update the UI as needed
                            location.reload();
                        },
                        error: function(error) {
                            console.error('Error:', error);
                        }
                    });
                }
            });
        });
    </script>
@endpush
@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Shopping Cart</h4>
                        <div class="breadcrumb__links">
                            <a href="/">Home</a>
                            <a href="/products">Shop</a>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    @if (!$carts->count())
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <svg fill="#11111" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style="width: 5rem; height: 5rem; margin-bottom: 1rem;">
                                <g>
                                    <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
                                </g>
                            </svg>
                        </div>
                        <h5 class="text-center">Your cart is empty.</h5>
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
    @if ($carts->count())
        <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <form action="/cart" method="POST">
                            @csrf
                            @method('put')
                            <div class="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Size</th>
                                            <th class="text-center">Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($carts as $cart)
                                            <tr>
                                                <td class="product__cart__item">
                                                    <div class="product__cart__item__pic" style="width: 60px; height: 70px; overflow: hidden;">
                                                        <img src="{{ '/storage/' . $cart->product->images[0]['url'] }}" alt="">
                                                    </div>
                                                    <div class="product__cart__item__text">
                                                        <h6>
                                                            <a href="/products/{{ $cart->product->slug }}" style="color: #000">{{ $cart->product->name }}</a>
                                                        </h6>
                                                        @if ($cart->product->discount !== null || $cart->product->discount > 0)
                                                            <h5>{{ $cart->product->price_format($cart->product->price - $cart->product->discount) }}</h5>
                                                            <del>{{ $cart->product->price_format($cart->product->price) }}</del>
                                                        @else
                                                            <h5>{{ $cart->product->price_format($cart->product->price) }}</h5>
                                                        @endif
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="text-uppercase">{{ $cart->size }}</span>
                                                </td>
                                                <td class="quantity__item">
                                                    <div class="quantity d-flex justify-content-center">
                                                        <div class="pro-qty-2">
                                                            <input type="number" name="cart_updates[{{ $loop->index }}][new_quantity]" value="{{ $cart->quantity }}" min="1" required>
                                                        </div>
                                                    </div>
                                                    @error("cart_updates.{$loop->index}.new_quantity")
                                                        <div class="text-danger text-center">{{ $message }}</div>
                                                    @enderror
                                                </td>
                                                @if ($cart->product->discount !== null || $cart->product->discount > 0)
                                                    <td class="cart__price">{{ $cart->product->price_format(($cart->product->price - $cart->product->discount) * $cart->quantity) }}</td>
                                                @else
                                                    <td class="cart__price">{{ $cart->product->price_format($cart->product->price * $cart->quantity) }}</td>
                                                @endif
                                                <td class="cart__close">
                                                    <input type="hidden" name="cart_updates[{{ $loop->index }}][cart_id]" value="{{ $cart->id }}">

                                                    <button class="btn btn-link delete-cart-item" data-cart-id="{{ $cart->id }}">
                                                        <i class="fa fa-close"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                @if ($cart->product->sizes->where('name', $cart->size)->first()['stock'] > 0)
                                                    <td colspan="5" style="padding-top:7.5px; padding-bottom: 7.5px; border-top: 0" class="text-secondary">Stock available: {{ $cart->product->sizes->where('name', $cart->size)->first()['stock'] }}</td>
                                                @else
                                                    <td colspan="5" style="padding-top:7.5px;  padding-bottom: 7.5px; border-top: 0" class="text-danger">Sold out</td>
                                                @endif
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="5">
                                                    <div class="text-center">Your cart is empty.</div>
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
                                @if ($carts->count())
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="continue__btn update__btn">
                                            <button type="submit"> Update cart</button>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart__total">
                            <h6>Cart total</h6>
                            <ul>
                                <li>Subtotal <span class="text-dark">{{ 'Rp ' . number_format($total_original_price, 0, ',', '.') }}</span></li>
                                <li>Discount <span class="text-secondary">{{ 'Rp ' . number_format($total_discount_amount, 0, ',', '.') }}</span></li>
                                <li>Total <span class="text-dark">{{ 'Rp ' . number_format($total_price, 0, ',', '.') }}</span></li>
                            </ul>
                            <form action="/checkout" method="POST">
                                @csrf
                                <input type="hidden" name="total_original_price" value="{{ $total_original_price }}">
                                <input type="hidden" name="total_discount_amount" value="{{ $total_discount_amount }}">
                                <input type="hidden" name="total_price" value="{{ $total_price }}">
                                <button type="submit" class="primary-btn border-0" style="width: 100%; ">Proceed to checkout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End -->
    @endif
@endsection
