@extends('layouts.app')
@section('styles')
    <style>
        .lazy-bg {
            background-image: none;
            /* Hapus gambar latar belakang secara default */
        }

        /* .lazy-bg.loaded {
                        background-image: none;
                    } */
    </style>
@endsection
@push('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var lazyBgImages = document.querySelectorAll(".lazy-bg");

            lazyBgImages.forEach(function(img) {
                var bgImage = new Image();
                bgImage.src = img.getAttribute("data-bg");

                bgImage.onload = function() {
                    img.style.backgroundImage = "url('" + bgImage.src + "')";
                    img.classList.add("loaded");
                };
            });
        });
    </script>
@endpush
@section('content')
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="hero__slider owl-carousel">
            <div class="hero__items set-bg" data-setbg="{{ asset('victorem/banner.jpg') }}"></div>
            <div class="hero__items set-bg" data-setbg="{{ asset('victorem/banner-2.jpg') }}"></div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Product Section Begin -->
    <section class="product spad mt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="filter__controls">
                        <li class="active" data-filter="*">Latest Products</li>
                    </ul>
                </div>
            </div>
            <div class="row product__filter">
                @forelse ($products as $product)
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix">
                        <div class="product__item {{ !$product->sizes->sum('stock') ? 'sale' : '' }}">
                            <div class="product__item__pic lazy-bg" data-bg="{{ '/storage/' . $product->images[0]['url'] }}">
                                @if (!$product->sizes->sum('stock'))
                                    <span class="label">Sold out</span>
                                @else
                                    @if ($product->discount_percent !== null && $product->discount_percent !== 0)
                                        <span class="label">{{ $product->discount_format($product->discount_percent) }} OFF</span>
                                    @endif
                                @endif
                            </div>
                            <div class="product__item__text">
                                <h6>{{ $product->name }}</h6>
                                <a href="/products/{{ $product->slug }}" class="add-cart">View Details</a>
                                @if ($product->discount !== null && $product->discount !== 0)
                                    <div class="d-flex" style="column-gap: 5px">
                                        <h5>{{ $product->price_format($product->price - $product->discount) }}</h5>
                                        <del class="text-secondary">{{ $product->price_format2($product->price) }}</del>
                                    </div>
                                @else
                                    @if ($product->discount !== null && $product->discount !== 0)
                                        <div class="d-flex" style="column-gap: 5px">
                                            <h5>{{ $product->price_format($product->price - $product->discount) }}</h5>
                                            <del class="text-secondary">{{ $product->price_format2($product->price) }}</del>
                                        </div>
                                    @else
                                        <h5>{{ $product->price_format($product->price) }}</h5>
                                    @endif
                                @endif
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="text-center col-12">Product not found.</div>
                @endforelse
            </div>
        </div>
    </section>
    <!-- Product Section End -->
@endsection
