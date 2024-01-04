import { Input } from "@/components/ui/input";

export default function ProductPricing() {
    return (
        <>
            <Input label="Customer Price" placeholder="10" prefix={"$"} type="number" />
            <Input
                label="Agent Price"
                placeholder="15"
                prefix={"$"}
                type="number"
            />
        </>
    );
}
