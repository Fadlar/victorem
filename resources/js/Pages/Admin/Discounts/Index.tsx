import App from "@/Layouts/App";
import DiscountHeader from "./_shared/discount-header";
import DiscountTable from "./_shared/discount-table";
import { Discount } from "./Discount";
import { Product } from "../Products/Product";

export default function Index({
    discounts,
    products,
}: {
    discounts: Discount[];
    products: Product[];
}) {
    return (
        <App title="Discounts">
            <DiscountHeader products={products} />
            <DiscountTable data={discounts} />
        </App>
    );
}
