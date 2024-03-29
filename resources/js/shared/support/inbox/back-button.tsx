import { PiArrowLeft } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";

export default function BackButton() {
    // const router = useRouter();
    return (
        <Button
            size="sm"
            variant="outline"
            // onClick={() => router.back()}
            className="flex items-center gap-2"
        >
            <PiArrowLeft />
            Back
        </Button>
    );
}
