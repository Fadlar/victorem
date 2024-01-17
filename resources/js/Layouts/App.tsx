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
            <Head title={`${title ? t(title) + " - " : ""} Skateboard`} />
            <main className="flex min-h-screen flex-grow">
                <Sidebar className="fixed hidden xl:block dark:bg-gray-0" />
                <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
                    <Header />
                    <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}
