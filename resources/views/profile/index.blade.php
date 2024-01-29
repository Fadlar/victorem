@extends('layouts.app')
@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Profile</h4>
                        <div class="breadcrumb__links">
                            <a href="/">Home</a>
                            <a href="#">More</a>
                            <span>Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->
    <section class="py-5">
        <div class="container">
            <form action="/">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <label for="name">Name</label>
                        <input type="name" class="form-control" />
                    </div>
                </div>
            </form>

        </div>
    </section>
@endsection
