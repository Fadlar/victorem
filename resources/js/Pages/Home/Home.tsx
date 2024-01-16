import Customer from "@/Layouts/Customer";
import { Product } from "../Admin/Products/Product";
import { Asset } from "@/shared/roles-permissions/utils";
import { NumericFormat } from "react-number-format";

export default function Home({ products }: { products: Product[] }) {
    return (
        <Customer title="Home">
            {/* Hero Section Begin */}
            <section className="hero">
                <div className="hero__slider owl-carousel">
                    <div
                        className="hero__items set-bg"
                        data-setbg="/assets/img/hero/hero-1.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>
                                            A specialist label creating luxury
                                            essentials. Ethically crafted with
                                            an unwavering commitment to
                                            exceptional quality.
                                        </p>
                                        <a href="#" className="primary-btn">
                                            Shop now{" "}
                                            <span className="arrow_right" />
                                        </a>
                                        <div className="hero__social">
                                            <a href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hero__items set-bg"
                        data-setbg="/assets/img/hero/hero-2.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>
                                            A specialist label creating luxury
                                            essentials. Ethically crafted with
                                            an unwavering commitment to
                                            exceptional quality.
                                        </p>
                                        <a href="#" className="primary-btn">
                                            Shop now{" "}
                                            <span className="arrow_right" />
                                        </a>
                                        <div className="hero__social">
                                            <a href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
            {/* Product Section Begin */}
            <section className="product spad mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">
                                    Latest Products
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div
                                    key={product.id}
                                    className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
                                >
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{
                                                backgroundImage: `url(${Asset(
                                                    product.images[0].url,
                                                )})`,
                                            }}
                                        >
                                            <span className="label">
                                                50% OFF
                                            </span>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>{product.name}</h6>
                                            <a
                                                href={`/products/${product.slug}`}
                                                className="add-cart"
                                            >
                                                View Details
                                            </a>
                                            <h5>
                                                {product.discount !== null ||
                                                product.discount !== 0 ? (
                                                    <NumericFormat />
                                                ) : (
                                                    ""
                                                )}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Product not found.</div>
                        )}
                    </div>
                </div>
            </section>
            {/* Product Section End */}
        </Customer>
    );
}
