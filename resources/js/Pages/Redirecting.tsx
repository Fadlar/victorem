import { useEffect } from "react";

export default function Redirecting() {
    useEffect(() => {
        const redirectToExternalLink = () => {
            window.location.href = "/";
        };

        // Memanggil fungsi untuk melakukan redirect saat komponen di-mount
        redirectToExternalLink();
    }, []);

    return <div>Redirecting...</div>;
}
