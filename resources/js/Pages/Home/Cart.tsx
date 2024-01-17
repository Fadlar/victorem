import Customer from "@/Layouts/Customer";
import { Asset } from "@/shared/roles-permissions/utils";
import cn from "@/utils/class-names";
import { Link, router } from "@inertiajs/react";
import toast from "react-hot-toast";
import { NumericFormat } from "react-number-format";

export default function Cart({
    carts,
    total_price,
    total_original_price,
    total_discount_amount,
}: any) {
    const removeCart = (id: number) => {
        router.delete(`/cart/${id}`, {
            preserveScroll: true,
            onSuccess: () =>
                toast.success("Product has been removed from cart."),
        });
    };

    return (
        <Customer title="Carts">
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <a href="/products">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div
                            className={cn(carts.length ? "col-lg-8" : "col-12")}
                        >
                            {carts.length ? (
                                <div className="shopping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Size</th>
                                                <th>Quantity</th>
                                                <th className="text-center">
                                                    Total
                                                </th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <>
                                                {carts.map((cart: any) => (
                                                    <tr key={cart.id}>
                                                        <td className="product__cart__item d-flex align-items-center">
                                                            <div
                                                                className="product__cart__item__pic"
                                                                style={{
                                                                    width: "60px",
                                                                    height: "70px",
                                                                    overflow:
                                                                        "hidden",
                                                                }}
                                                            >
                                                                <img
                                                                    src={Asset(
                                                                        cart
                                                                            .product
                                                                            .images[0]
                                                                            .url,
                                                                    )}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="product__cart__item__text">
                                                                <h6>
                                                                    <Link
                                                                        href={`/products/${cart.product.slug}`}
                                                                        style={{
                                                                            color: "#000",
                                                                        }}
                                                                    >
                                                                        {
                                                                            cart
                                                                                .product
                                                                                .name
                                                                        }
                                                                    </Link>
                                                                </h6>
                                                                <div
                                                                    className="d-flex"
                                                                    style={{
                                                                        columnGap:
                                                                            "0.5rem",
                                                                    }}
                                                                >
                                                                    {cart
                                                                        .product
                                                                        .discount !==
                                                                        null ||
                                                                    cart.product
                                                                        .discount !==
                                                                        0 ? (
                                                                        <>
                                                                            <h5>
                                                                                <NumericFormat
                                                                                    prefix="Rp"
                                                                                    decimalSeparator=","
                                                                                    thousandSeparator="."
                                                                                    displayType="text"
                                                                                    decimalScale={
                                                                                        0
                                                                                    }
                                                                                    fixedDecimalScale
                                                                                    value={
                                                                                        cart
                                                                                            .product
                                                                                            .price -
                                                                                        cart
                                                                                            .product
                                                                                            .discount
                                                                                    }
                                                                                />
                                                                            </h5>
                                                                            <del className="text-secondary">
                                                                                <NumericFormat
                                                                                    prefix="Rp"
                                                                                    decimalSeparator=","
                                                                                    thousandSeparator="."
                                                                                    displayType="text"
                                                                                    decimalScale={
                                                                                        0
                                                                                    }
                                                                                    fixedDecimalScale
                                                                                    value={
                                                                                        cart
                                                                                            .product
                                                                                            .price
                                                                                    }
                                                                                />
                                                                            </del>
                                                                        </>
                                                                    ) : (
                                                                        <h5>
                                                                            <NumericFormat
                                                                                prefix="Rp"
                                                                                decimalSeparator=","
                                                                                thousandSeparator="."
                                                                                decimalScale={
                                                                                    0
                                                                                }
                                                                                fixedDecimalScale
                                                                                displayType="text"
                                                                                value={
                                                                                    cart
                                                                                        .product
                                                                                        .price
                                                                                }
                                                                            />
                                                                        </h5>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="quantity__item">
                                                            <div className="quantity">
                                                                <div
                                                                    className="pro-qty-2"
                                                                    style={{
                                                                        textTransform:
                                                                            "uppercase",
                                                                    }}
                                                                >
                                                                    {cart.size}
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="quantity__item text-center">
                                                            <div className="quantity">
                                                                <div className="pro-qty-2">
                                                                    {
                                                                        cart.quantity
                                                                    }
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart__price">
                                                            {cart.product
                                                                .discount !==
                                                                null ||
                                                            cart.product
                                                                .discount !==
                                                                0 ? (
                                                                <NumericFormat
                                                                    prefix="Rp"
                                                                    decimalSeparator=","
                                                                    thousandSeparator="."
                                                                    displayType="text"
                                                                    decimalScale={
                                                                        0
                                                                    }
                                                                    fixedDecimalScale
                                                                    value={
                                                                        (cart
                                                                            .product
                                                                            .price -
                                                                            cart
                                                                                .product
                                                                                .discount) *
                                                                        cart.quantity
                                                                    }
                                                                />
                                                            ) : (
                                                                <NumericFormat
                                                                    prefix="Rp"
                                                                    decimalSeparator=","
                                                                    thousandSeparator="."
                                                                    displayType="text"
                                                                    decimalScale={
                                                                        0
                                                                    }
                                                                    fixedDecimalScale
                                                                    value={
                                                                        cart
                                                                            .product
                                                                            .price *
                                                                        cart.quantity
                                                                    }
                                                                />
                                                            )}
                                                        </td>
                                                        <td className="cart__close">
                                                            <button
                                                                type="button"
                                                                className="btn rounded-circle"
                                                                onClick={() =>
                                                                    removeCart(
                                                                        cart.id,
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-close" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ height: "16rem" }}
                                >
                                    <div>
                                        <div className="text-center">
                                            <svg
                                                fill="#000"
                                                enableBackground="new 0 0 512 512"
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{
                                                    width: "5rem",
                                                    height: "5rem",
                                                    marginBottom: "1rem",
                                                }}
                                            >
                                                <g>
                                                    <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="mr-3 text-center">
                                            Your cart is empty
                                        </div>
                                        <div className="continue__btn mt-3">
                                            <Link href="/products">
                                                Shopping Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {carts.length ? (
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="continue__btn">
                                            <Link href="/products">
                                                Continue Shopping
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        {carts.length ? (
                            <div className="col-lg-4">
                                <div className="cart__total">
                                    <h6>Cart total</h6>
                                    <ul>
                                        <li>
                                            Subtotal
                                            <span>
                                                <NumericFormat
                                                    prefix="Rp"
                                                    thousandSeparator=","
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    displayType="text"
                                                    decimalSeparator="."
                                                    value={total_original_price}
                                                    className="text-dark"
                                                />
                                            </span>
                                        </li>
                                        <li>
                                            Discount
                                            <span>
                                                <NumericFormat
                                                    prefix="Rp"
                                                    thousandSeparator=","
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    displayType="text"
                                                    decimalSeparator="."
                                                    value={
                                                        total_discount_amount
                                                    }
                                                    className="text-dark"
                                                />
                                            </span>
                                        </li>
                                        <li>
                                            Total
                                            <span>
                                                <NumericFormat
                                                    prefix="Rp"
                                                    thousandSeparator=","
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    displayType="text"
                                                    decimalSeparator="."
                                                    value={total_price}
                                                    className="text-dark"
                                                />
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="#" className="primary-btn">
                                        Proceed to checkout
                                    </a>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
            {/* Shopping Cart Section End */}
        </Customer>
    );
}
