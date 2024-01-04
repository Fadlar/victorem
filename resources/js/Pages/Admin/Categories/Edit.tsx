import App from "@/Layouts/App";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import { Link } from "@inertiajs/react";
import { Category } from "./Category";
import EditCategoryForm from "./_shared/edit-category-form";

const pageHeader = {
    title: "Edit Category",
    breadcrumb: [
        {
            href: "#",
            name: "Home",
        },
        {
            href: routes.eCommerce.categories,
            name: "Categories",
        },
        {
            name: "Edit",
        },
    ],
};

export default function EditCategory({ category }: { category: Category }) {
    return (
        <App title="Edit Category">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <Link
                    href={routes.eCommerce.categories}
                    className="mt-4 w-full @lg:mt-0 @lg:w-auto"
                >
                    <Button
                        tag="span"
                        className="w-full @lg:w-auto"
                        variant="outline"
                    >
                        Cancel
                    </Button>
                </Link>
            </PageHeader>
            <EditCategoryForm category={category} />
        </App>
    );
}
