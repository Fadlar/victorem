import Customer from "@/Layouts/Customer";
import { Product } from "../Admin/Products/Product";

import { Asset } from "@/shared/roles-permissions/utils";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
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
    const [selectedSize, setSelectedSize] = useState(sizes[1]);

    return (
        <Customer title="Show Product">
            <div className="bg-white container">
                <div className="pt-6">
                    {/* Product info */}
                    <div className="grid grid-cols-12 gap-x-10 mt-8">
                        <div className="col-span-7">
                            <div className="aspect-h-4 aspect-w-3 overflow-hidden">
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
                            <h1 className="text-2xl font-medium mb-3 tracking-tight text-gray-800 sm:text-3xl text-center">
                                {product.name}
                            </h1>

                            <p className="text-xl tracking-tight text-gray-900 text-center">
                                <NumericFormat
                                    displayType="text"
                                    value={product.price}
                                    thousandSeparator={"."}
                                    decimalSeparator=","
                                    prefix="Rp "
                                    decimalScale={2}
                                    fixedDecimalScale
                                />
                            </p>

                            <form className="mt-8">
                                {/* Sizes */}
                                <div className="mt-8">
                                    <h3 className="text-sm font-medium text-gray-900 text-center">
                                        Ukuran
                                    </h3>
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="mt-4"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Choose a size
                                        </RadioGroup.Label>
                                        <div className="flex justify-center items-center gap-x-2">
                                            {sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? "cursor-pointer"
                                                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                            selectedSize ===
                                                                size
                                                                ? "border border-gray-800 ring-0"
                                                                : "",
                                                            "group relative flex items-center justify-center p-5 h-5 w-5",
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
                                                                            ? "border border-gray-800"
                                                                            : "",
                                                                        checked
                                                                            ? ""
                                                                            : "border-transparent",
                                                                        "pointer-events-none absolute -inset-px",
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

                                <div className="mt-8 space-y-2">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center bg-white border border-gray-800 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center border border-transparent bg-gray-900 px-8 py-3 text-base font-normal text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    >
                                        Buy It Now
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8">
                                <div className="mt-4 space-y-6">
                                    <article
                                        className="prose prose-gray"
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
