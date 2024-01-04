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
                <footer className="bg-white shadow">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <span className="block text-sm text-gray-500 sm:text-center">
                            © 2023{` `}
                            <a
                                href="https://victorem.com/"
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
