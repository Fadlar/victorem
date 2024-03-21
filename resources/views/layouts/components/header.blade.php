    <div class="offcanvas-menu-wrapper">
        {{-- <div class="offcanvas__option">
            <div class="offcanvas__links">
                @auth
                    <a href="/profile">Account</a>
                @else
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                @endauth
            </div>
        </div> --}}
        <div class="offcanvas__nav__option">
            <a href="#" class="search-switch"><img src="{{ asset('assets/img/icon/search.png') }}" alt=""></a>
            <a href="/cart"><img src="{{ asset('assets/img/icon/cart.png') }}" alt=""> <span>0</span></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__text">
            <p>Welcome to victorem store.</p>
        </div>
    </div>
    <!-- Offcanvas Menu End -->

    <!-- Header Section Begin -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7">
                        <div class="header__top__left">
                            <p>Welcome to victorem store.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <div class="header__top__right">
                            <div class="header__top__links">
                                @auth
                                    <div class="header__menu" style="color: white; padding: 0">
                                        <ul>
                                            <li>
                                                {{ auth()->user()->name }}
                                                <ul class="dropdown">
                                                    @role('admin|owner')
                                                        <li><a href="/dashboard">Dashboard</a></li>
                                                    @endrole
                                                    <li>
                                                        <a href="/profile">Account</a>
                                                    </li>
                                                    <li>
                                                        <a href="/orders">Orders</a>
                                                    </li>
                                                    <li>
                                                        <form action="/logout" method="POST">
                                                            @csrf
                                                            <button type="submit" href="/">Logout</button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                @else
                                    <a href="/login">Login</a>
                                    <a href="/register">Register</a>
                                @endauth
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row flex-row align-items-center">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                        <a href="/"><img src="{{ asset('victorem/logo.png') }}" style="height: 50px; width: 50px" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li class="{{ request()->path() == '/' ? 'active' : '' }}"><a href="/">Home</a></li>
                            <li class="{{ request()->path() == 'products' ? 'active' : '' }}"><a href="/products">Shop</a></li>
                            <li class="{{ request()->path() == 'gallery' ? 'active' : '' }}"><a href="/gallery">Gallery</a></li>
                            <li class="{{ request()->path() == 'contact' ? 'active' : '' }}"><a href="/contact">Contact</a></li>
                            @auth
                                <li class="hide-menu">
                                    <a href="#">{{ auth()->user()->name }}</a>
                                    <ul class="dropdown">
                                        @role('admin|owner')
                                            <li><a href="/dashboard">Dashboard</a></li>
                                        @endrole
                                        <li><a href="/profile">Account</a></li>
                                        <li><a href="/orders">Orders</a></li>
                                        <li>
                                            <form action="/logout" method="POST">
                                                @csrf
                                                <button type="submit">Logout</button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            @endauth
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="header__nav__option">
                        <a href="/products"><img src="{{ asset('assets/img/icon/search.png') }}" alt=""></a>
                        <a href="/cart"><img src="{{ asset('assets/img/icon/cart.png') }}" alt=""> <span>0</span></a>
                    </div>
                </div>
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
    </header>
    <!-- Header Section End -->
