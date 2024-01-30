@extends('layouts.app')
@section('content')
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="hero__slider owl-carousel">
            <div class="hero__items set-bg" data-setbg="{{ asset('victorem/banner.jpg') }}"></div>
            <div class="hero__items set-bg" data-setbg="{{ asset('victorem/banner-2.jpg') }}"></div>
            {{-- <div class="hero__items set-bg" data-setbg="{{ asset('assets/img/hero/hero-2.jpg') }}">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                    commitment to exceptional quality.</p>
                                <a href="#" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                                <div class="hero__social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
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
                            <div class="product__item__pic set-bg" data-setbg="{{ '/storage/' . $product->images[0]['url'] }}">
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
