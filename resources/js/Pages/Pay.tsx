import { useEffect } from "react";

export default function Pay({ payment }: any) {
    useEffect(() => {
        const redirectToExternalLink = () => {
            window.location.href = payment.snap_url;
        };

        // Memanggil fungsi untuk melakukan redirect saat komponen di-mount
        redirectToExternalLink();
    }, [payment.snap_url]);

    return <div>Redirecting...</div>;
}
