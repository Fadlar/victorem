import { Product } from "@/Pages/Admin/Products/Product";
import { Asset } from "@/shared/roles-permissions/utils";
import { Link } from "@inertiajs/react";
import { NumericFormat } from "react-number-format";

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Produk Terbaru
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={Asset(product.images[0].url)}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
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
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.name}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    <NumericFormat
                                        prefix="Rp"
                                        displayType="text"
                                        value={product.customer_price}
                                        thousandSeparator={true}
                                        decimalScale={2}
                                        fixedDecimalScale={true}
                                    />
                                </p>
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
