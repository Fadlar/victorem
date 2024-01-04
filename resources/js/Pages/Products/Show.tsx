import Customer from "@/Layouts/Customer";
import { Product } from "../Admin/Products/Product";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Asset } from "@/shared/roles-permissions/utils";
import { NumericFormat } from "react-number-format";

const highlights = [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
];

const colors = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
];

const sizes = [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function ShowProduct({ product }: { product: Product }) {
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();

    return (
        <Customer title="Show Product">
            <div className="bg-white container">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol
                            role="list"
                            className="mx-auto flex max-w-2xl items-center space-x-2 lg:max-w-7xl"
                        >
                            <li className="text-sm">
                                <a
                                    href="/products"
                                    aria-current="page"
                                    className="font-medium text-gray-500 hover:text-gray-600"
                                >
                                    Products
                                </a>
                            </li>

                            <span>/</span>

                            <li className="text-sm">
                                <a
                                    href={product.slug}
                                    aria-current="page"
                                    className="font-medium text-gray-500 hover:text-gray-600"
                                >
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/* Image gallery */}

                    {/* Product info */}
                    <div className="grid grid-cols-12 gap-x-10 mt-8">
                        <div className="col-span-7">
                            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={Asset(product.images[0].url)}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Options */}
                        <div className="col-span-5">
                            <h2 className="sr-only">Product information</h2>
                            <h1 className="text-2xl font-semibold mb-3 tracking-tight text-gray-800 sm:text-3xl">
                                {product.name}
                            </h1>

                            <p className="text-3xl tracking-tight text-gray-900">
                                <NumericFormat
                                    displayType="text"
                                    value={product.customer_price}
                                    thousandSeparator={"."}
                                    decimalSeparator=","
                                    prefix="Rp "
                                    decimalScale={2}
                                    fixedDecimalScale
                                />
                            </p>

                            <form className="mt-8">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Color
                                    </h3>

                                    <RadioGroup
                                        value={selectedColor}
                                        onChange={setSelectedColor}
                                        className="mt-4"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Choose a color
                                        </RadioGroup.Label>
                                        <div className="flex items-center space-x-3">
                                            {colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({
                                                        active,
                                                        checked,
                                                    }) =>
                                                        classNames(
                                                            color.selectedClass,
                                                            active && checked
                                                                ? "ring ring-offset-1"
                                                                : "",
                                                            !active && checked
                                                                ? "ring-2"
                                                                : "",
                                                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label
                                                        as="span"
                                                        className="sr-only"
                                                    >
                                                        {color.name}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            "h-8 w-8 rounded-full border border-black border-opacity-10",
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Sizes */}
                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Size
                                        </h3>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-gray-600 hover:text-gray-500"
                                        >
                                            Size guide
                                        </a>
                                    </div>

                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="mt-4"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Choose a size
                                        </RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-4">
                                            {sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                            active
                                                                ? "ring-2 ring-gray-500"
                                                                : "",
                                                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3",
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">
                                                                {size.name}
                                                            </RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active
                                                                            ? "border"
                                                                            : "border-2",
                                                                        checked
                                                                            ? "border-gray-500"
                                                                            : "border-transparent",
                                                                        "pointer-events-none absolute -inset-px rounded-md",
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line
                                                                            x1={
                                                                                0
                                                                            }
                                                                            y1={
                                                                                100
                                                                            }
                                                                            x2={
                                                                                100
                                                                            }
                                                                            y2={
                                                                                0
                                                                            }
                                                                            vectorEffect="non-scaling-stroke"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    Tambahkan ke keranjang
                                </button>
                            </form>
                            <div className="mt-8">
                                <h2 className="text-sm font-medium text-gray-900">
                                    Deskripsi
                                </h2>

                                <div className="mt-4 space-y-6">
                                    <article
                                        className="prose prose-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Customer>
    );
}
