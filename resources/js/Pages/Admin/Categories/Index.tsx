import App from "@/Layouts/App";
import CategoryHeader from "./_shared/category-header";
import CategoryTable from "./_shared/category-table";

export default function Categories({ categories }: any) {
    return (
        <App title="Categories">
            <CategoryHeader />
            <CategoryTable data={categories} />
        </App>
    );
}
