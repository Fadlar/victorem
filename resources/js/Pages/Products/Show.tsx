import Customer from "@/Layouts/Customer";
import { Product } from "../Admin/Products/Product";
import { Asset } from "@/shared/roles-permissions/utils";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ShowProduct({ product }: { product: Product }) {
    const [sizes, setSizes] = useState<any>(null);

    const { data, setData, post, errors, processing } = useForm<any>({
        product_id: product.id,
        size: "",
        quantity: 1,
    });

    const handleSize = (e: any) => {
        const size = JSON.parse(e.target.value);
        setSizes(size);
        setData({ ...data, size: size.name });
    };

    const submitHandler = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post("/cart", {
            preserveScroll: true,
            onSuccess: () =>
                toast.success("Product successfully added to cart."),
        });
    };

    return (
        <>
            {/* Shop Details Section Begin */}
            <section className="shop-details">
                <div className="product__details__pic">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product__details__breadcrumb">
                                    <a href="/">Home</a>
                                    <a href="/products">Shop</a>
                                    <span>Product Details</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    {product.images !== null ? (
                                        <>
                                            {product.images.map(
                                                (image, index) => (
                                                    <li
                                                        className="nav-item"
                                                        key={image.id}
                                                    >
                                                        <a
                                                            className={`nav-link ${
                                                                index === 0
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            data-toggle="tab"
                                                            href={`#tabs-${image.id}`}
                                                            role="tab"
                                                        >
                                                            <div
                                                                className="product__thumb__pic set-bg"
                                                                data-setbg={Asset(
                                                                    image.url,
                                                                )}
                                                            ></div>
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </>
                                    ) : null}
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="tab-content">
                                    {product.images !== null ? (
                                        <>
                                            {product.images.map(
                                                (image, key) => (
                                                    <div
                                                        key={image.id}
                                                        className={`tab-pane ${
                                                            key === 0
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        id={`tabs-${image.id}`}
                                                        role="tabpanel"
                                                    >
                                                        <div className="product__details__pic__item">
                                                            <img
                                                                src={Asset(
                                                                    image.url,
                                                                )}
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                ),
                                            )}
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__details__content">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text">
                                    <h4>{product.name}</h4>
                                    <h3>
                                        $270.00 <span>70.00</span>
                                    </h3>
                                    <form onSubmit={submitHandler}>
                                        <div className="product__details__option">
                                            <div className="product__details__option__size">
                                                <span>Size:</span>
                                                {product.sizes !== null ? (
                                                    <>
                                                        {product.sizes.map(
                                                            (size) => (
                                                                <label
                                                                    className={
                                                                        sizes?.name ===
                                                                        size.name
                                                                            ? "active"
                                                                            : ""
                                                                    }
                                                                    key={
                                                                        size.id
                                                                    }
                                                                    htmlFor={
                                                                        size.name
                                                                    }
                                                                >
                                                                    {size.name}
                                                                    <input
                                                                        className="bg-dark"
                                                                        type="radio"
                                                                        name="size"
                                                                        id={
                                                                            size.name
                                                                        }
                                                                        value={JSON.stringify(
                                                                            size,
                                                                        )}
                                                                        onChange={
                                                                            handleSize
                                                                        }
                                                                    />
                                                                </label>
                                                            ),
                                                        )}
                                                    </>
                                                ) : null}
                                            </div>
                                            <div className="text-danger">
                                                {errors.size}
                                            </div>
                                        </div>
                                        <div className="product__details__cart__option">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input
                                                        type="number"
                                                        name="quantity"
                                                        value={data.quantity}
                                                        min={1}
                                                        max={sizes?.stock ?? 1}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quantity",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="primary-btn border-0"
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? "adding..."
                                                    : "add to cart"}
                                            </button>
                                        </div>
                                    </form>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>
                                            <span>Categories:</span>
                                            {product.categories !== null ? (
                                                <>
                                                    {product.categories.map(
                                                        (category) => (
                                                            <a
                                                                key={
                                                                    category.id
                                                                }
                                                                className="text-dark"
                                                                href={`/product?category=${category.slug}`}
                                                            >
                                                                {category.name},
                                                                {` `}
                                                            </a>
                                                        ),
                                                    )}
                                                </>
                                            ) : null}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <div className="pt-5 product__details__tab">
                                    <div className="tab-content">
                                        <div className="product__details__tab__content__item">
                                            <h5 className="text-center">
                                                Description
                                            </h5>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: product.description,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Details Section End */}
        </>
    );
}

ShowProduct.layout = (page: any) => (
    <Customer children={page} title="Product Details" />
);
