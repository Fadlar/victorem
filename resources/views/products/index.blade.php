@extends('layouts.app')
@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Shop</h4>
                        <div class="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Shop Section Begin -->
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="shop__sidebar">
                        <div class="shop__sidebar__search">
                            <form action="/products">
                                <input type="search" name="search" placeholder="Search..." value="{{ request()->search }}">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="shop__sidebar__accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="shop__sidebar__categories">
                                                <ul class="nice-scroll">
                                                    <li><a href="/products">All</a></li>
                                                    @forelse ($categories as $category)
                                                        <li><a href="/products?category={{ $category->slug }}">{{ $category->name }} ({{ $category->products->count() }})</a></li>
                                                    @empty
                                                        <li><a href="#">No Category</a></li>
                                                    @endforelse
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="shop__product__option">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__left">
                                    <p>
                                        Showing
                                        @if ($products->firstItem())
                                            {{ $products->firstItem() }}-{{ $products->lastItem() }}
                                        @else
                                            {{ $products->count() }}
                                        @endif
                                        {!! __('of') !!}
                                        {{ $products->total() }}
                                        {!! __('results') !!}
                                    </p>
                                </div>
                            </div>
                            {{-- <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__right">
                                    <p>Sort by:</p>
                                    <select>
                                        <option value="latest">Latest</option>
                                        <option value="oldest">Oldest</option>
                                    </select>
                                </div>
                            </div> --}}
                        </div>
                    </div>
                    <div class="row">
                        @forelse ($products as $product)
                            <div class="col-lg-4 col-md-6 col-sm-6">
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
                                            <h5>{{ $product->price_format($product->price) }}</h5>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div class="text-center col-12">Product not found!</div>
                        @endforelse

                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            {{ $products->links() }}
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <!-- Shop Section End -->
@endsection
