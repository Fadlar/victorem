import Navbar from "@/Components/Customer/Navbar";
import Header from "@/layouts/hydrogen/header";
import Sidebar from "@/layouts/hydrogen/sidebar";
import { t } from "@/utils/lang";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export default function App({
    children,
    title,
}: PropsWithChildren & { title?: string }) {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Head>
                <title>{title ? title + " - Victorem" : "Victorem"}</title>
            </Head>
            <div className="bg-white">
                <Navbar />
                {children}

                <footer className="bg-white m-4">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a
                                href="https://flowbite.com/"
                                className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
                            >
                                <img
                                    src="/victorem/logo-light.png"
                                    className="h-10"
                                    alt="Victorem Logo"
                                />
                            </a>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline me-4 md:me-6"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline me-4 md:me-6"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline me-4 md:me-6"
                                    >
                                        Licensing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2024{` `}
                            <a
                                href="https://victorem.store/"
                                className="hover:underline"
                            >
                                Victorem
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </>
    );
}
