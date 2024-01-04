import App from "@/Layouts/App";
import ProductHeader from "./_shared/product-header";
import ProductTable from "./_shared/product-table";

export default function Products({ products }: any) {
    return (
        <App title="Products">
            <ProductHeader />
            <ProductTable data={products} />
        </App>
    );
}
