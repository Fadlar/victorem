import Footer from "@/Components/Homepage/Footer";
import Header from "@/Components/Homepage/Header";
import { Head } from "@inertiajs/react";
import { PropsWithChildren, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

export default function Customer({
    children,
    title,
}: PropsWithChildren & { title?: string }) {
    useEffect(() => {
        // Paths to your scripts
        const scriptPaths = [
            "/assets/js/jquery-3.3.1.min.js",
            "/assets/js/bootstrap.min.js",
            "/assets/js/jquery.nice-select.min.js",
            "/assets/js/jquery.nicescroll.min.js",
            "/assets/js/jquery.magnific-popup.min.js",
            "/assets/js/jquery.countdown.min.js",
            "/assets/js/jquery.slicknav.js",
            "/assets/js/mixitup.min.js",
            "/assets/js/owl.carousel.min.js",
            "/assets/js/main.js",
        ];

        // Create and append script elements to the body
        scriptPaths.forEach((path) => {
            const script = document.createElement("script");
            script.src = path;
            script.async = true;
            document.body.appendChild(script);
        });

        // Cleanup function to remove script elements on component unmount
        return () => {
            scriptPaths.forEach((path) => {
                const script = document.querySelector(`script[src="${path}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
    return (
        <HelmetProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/bootstrap.min.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/font-awesome.min.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/elegant-icons.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/magnific-popup.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/nice-select.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/owl.carousel.min.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/slicknav.min.css"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/style.css"
                    type="text/css"
                />
            </Helmet>
            <Head>
                <title>{title ? title + " - Victorem" : "Victorem"}</title>
            </Head>
            <div className="offcanvas-menu-overlay" />
            <Header />

            {children}
            <Footer />
        </HelmetProvider>
    );
}
