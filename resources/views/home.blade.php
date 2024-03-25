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
    <script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js" integrity="sha384-Hb0JfW8svOHkzqOLJ6/sA7ZwjkQ1QyBnyfB3DgC+LJe4Anl17Dskx7ZG8HS++cXt" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/plugins/unveilhooks/ls.unveilhooks.min.js" integrity="sha384-D6Ap0oST3zzQz6bV40g7qWsQONbpbV44mX8c/ghHtV3G18vvC9D6dHs6SwAptEqV" crossorigin="anonymous"></script>
    <script>
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1; // Menggunakan loadMode 1 untuk lazyload
        window.lazySizesConfig.throttleDelay = 100; // Menunda hingga 100ms sebelum memuat gambar
        window.lazySizesConfig.init = false; // Inisialisasi ditangguhkan untuk memungkinkan konfigurasi kustom
        window.lazySizesConfig.plugins.unveilhooks = true; // Mengaktifkan unveilhooks

        // Inisialisasi setelah konfigurasi selesai
        window.addEventListener('DOMContentLoaded', function() {
            lazySizes.init(); // Inisialisasi Lazysizes
        });
    </script>
@endsection
@push('scripts')
    <script>
        document.addEventListener('lazybeforeunveil', function(e) {
            var img = e.target;
            var unveilHook = img.getAttribute('data-unveil-hook');
            if (unveilHook === 'custom-action') {
                // Tambahkan aksi khusus di sini
                console.log('Gambar telah terungkap sepenuhnya!');
            }
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
                            <div class="product__item__pic set-bg lazyload" data-setbg="{{ '/storage/' . $product->images[0]['url'] }}" data-unveil-hook="custom-action">
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
