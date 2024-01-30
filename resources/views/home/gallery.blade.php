@extends('layouts.app')

@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Gallery</h4>
                        <div class="breadcrumb__links">
                            <a href="/">Home</a>
                            <span>Gallery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- About Section Begin -->
    <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/banner-white.jpg') }}" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/banner-black.jpg') }}" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/abous-us/1.jpg') }}" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/abous-us/2.jpg') }}" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/abous-us/3.jpg') }}" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about__pic">
                        <img src="{{ asset('victorem/abous-us/4.jpg') }}" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->
@endsection
