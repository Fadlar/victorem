@extends('layouts.app')

@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>About Us</h4>
                        <div class="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>About Us</span>
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
                <div class="col-lg-12">
                    <div class="about__pic">
                        <img src="{{ asset('assets/img/about/about-us.jpg') }}" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="about__item">
                        <h4 class="text-center">Who We Are ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vel ipsum aliquam voluptate delectus minima recusandae iste dolores modi consequuntur! Illum consequatur voluptates exercitationem doloribus rem. Ducimus velit mollitia rem magni consequuntur et. Neque ipsa, corporis tempore in pariatur hic, fuga, eum earum libero autem animi ducimus temporibus architecto cumque consequuntur reprehenderit ullam eveniet esse labore aliquam? Repudiandae velit laborum quis, inventore soluta itaque animi facilis incidunt voluptatem, totam dolorem provident ipsa? Dicta soluta, voluptatum similique pariatur enim nam cupiditate laboriosam cumque expedita qui architecto aspernatur ducimus, quae iure illo laudantium veniam perferendis perspiciatis magnam harum reprehenderit
                            nesciunt ipsam repellat.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->
@endsection
