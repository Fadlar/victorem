import Customer from "@/Layouts/Customer";
import ProductsList from "./_components/ProductsList";
import { Product } from "../Admin/Products/Product";

export default function Home({ products }: { products: Product[] }) {
    return (
        <Customer>
            <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                            From checkout to global sales tax compliance,
                            companies around the world use Flowbite to simplify
                            their payment stack.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
                        >
                            Get started
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                        >
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src="https://d2kchovjbwl1tk.cloudfront.net/vendor/240/product/14756B_1701684136647.jpg"
                            className="rounded-md"
                            alt="mockup"
                        />
                    </div>
                </div>
            </section>

            <ProductsList products={products} />
        </Customer>
    );
}
