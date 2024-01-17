import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { carts_global_count } = usePage<any>().props;
    return (
        <>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <Link href="#" className="search-switch">
                        <img src={"/assets/img/icon/search.png"} alt="" />
                    </Link>
                    <Link href="#">
                        <img src={"/assets/img/icon/heart.png"} alt="" />
                    </Link>
                    <Link href="/cart">
                        <img src={"/assets/img/icon/cart.png"} alt="" />{" "}
                        <span>0</span>
                    </Link>
                </div>
                <div id="mobile-menu-wrap" />
            </div>
            {/* Offcanvas Menu End */}
            {/* Header Section Begin */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Welcome to victorem store</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <Link href="/login">Login</Link>
                                        <Link href="/register">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row flex-row align-items-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link href="/">
                                    <img
                                        src={"/victorem/logo.png"}
                                        style={{ height: 50, width: 50 }}
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Contacts</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <Link href="#" className="search-switch">
                                    <img
                                        src={"/assets/img/icon/search.png"}
                                        alt=""
                                    />
                                </Link>
                                <Link href="#">
                                    <img
                                        src={"/assets/img/icon/heart.png"}
                                        alt=""
                                    />
                                </Link>
                                <Link href="/cart">
                                    <img
                                        src={"/assets/img/icon/cart.png"}
                                        alt=""
                                    />{" "}
                                    <span>{carts_global_count}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
        </>
    );
}
