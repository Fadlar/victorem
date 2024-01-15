import { Product } from "@/Pages/Admin/Products/Product";
import { Asset } from "@/shared/roles-permissions/utils";
import cn from "@/utils/class-names";
import { Link } from "@inertiajs/react";
import { IoStar } from "react-icons/io5";
import { PiMinus } from "react-icons/pi";
import { NumericFormat } from "react-number-format";

export default function ProductsList({ products }: { products: Product[] }) {
    const isStock = (product: Product) => {
        let sum = 0;
        if (product.sizes.length) {
            sum = product.sizes.reduce(
                (acc, current) => acc + current.stock,
                0,
            );
        }
        return sum;
    };

    return (
        <div className="bg-white container">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-medium tracking-tight text-gray-900 text-center">
                    SHOP THE LATEST RELEASES
                </h2>
                <div className="flex justify-center py-5">
                    <div className="w-14 h-1 bg-gray-700" />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            {isStock(product) ? (
                                <>
                                    {product.discount ? (
                                        <div className="absolute -top-3 -right-3">
                                            <div className="rounded-full mx-auto flex justify-center items-center w-10 h-10 z-30 p-5 bg-rose-500 border border-rose-100">
                                                <div className="text-xs text-center">
                                                    <span className="text-white block font-semibold animate-pulse">
                                                        {product.discount_percent
                                                            .toString()
                                                            .replace(
                                                                /\.00$/,
                                                                "",
                                                            )}
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </>
                            ) : (
                                <div className="absolute -top-3 -right-3 z-20">
                                    <div className="rounded-full mx-auto flex justify-center items-center w-10 h-10 z-30 p-5 bg-gray-800 border border-gray-700">
                                        <div className="text-xs text-center">
                                            <span className="text-white tracking-tight font-medium">
                                                Sold Out
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div
                                className={cn(
                                    "aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none sm:h-80",
                                    !isStock(product) &&
                                        "opacity-40 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200",
                                )}
                            >
                                <img
                                    src={Asset(product.images[0].url)}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 text-center flex items-center flex-wrap justify-center gap-2">
                                <div>
                                    <h3 className="text-base text-gray-800 font-medium">
                                        <Link
                                            href={`/products/${product.slug}`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.name}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <span>
                                        <PiMinus />
                                    </span>
                                    {product.discount ? (
                                        <>
                                            <span className="block text-base font-medium text-rose-500 line-through">
                                                <NumericFormat
                                                    displayType="text"
                                                    value={product.price
                                                        .toString()
                                                        .replace(/\.00$/, "")}
                                                    thousandSeparator={"."}
                                                    decimalSeparator=","
                                                />
                                            </span>
                                            <span className="block text-base font-medium text-gray-700">
                                                <NumericFormat
                                                    displayType="text"
                                                    value={(
                                                        product.price -
                                                        product.discount
                                                    )
                                                        .toString()
                                                        .replace(/\.00$/, "")}
                                                    thousandSeparator={"."}
                                                    decimalSeparator=","
                                                />
                                            </span>
                                        </>
                                    ) : (
                                        <span className="block text-base font-medium text-gray-700">
                                            <NumericFormat
                                                displayType="text"
                                                value={product.price
                                                    .toString()
                                                    .replace(/\.00$/, "")}
                                                thousandSeparator={"."}
                                                decimalSeparator=","
                                            />
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="text-yellow-400 flex justify-center items-center mt-2 gap-0.5">
                                <IoStar className="w-5 h-5" />
                                <IoStar className="w-5 h-5" />
                                <IoStar className="w-5 h-5" />
                                <IoStar className="w-5 h-5" />
                                <IoStar className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
                {!products.length ? (
                    <div className="flex items-center justify-center w-full h-56">
                        Tidak ada produk.
                    </div>
                ) : null}
            </div>
        </div>
    );
}
