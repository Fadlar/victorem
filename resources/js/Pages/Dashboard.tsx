import App from "@/Layouts/App";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import { Link } from "@inertiajs/react";
import { PiPlusBold } from "react-icons/pi";
import { Button } from "rizzui";

const pageHeader = {
    title: "Products",
    breadcrumb: [
        {
            href: routes.eCommerce.dashboard,
            name: "E-Commerce",
        },
        {
            href: routes.eCommerce.products,
            name: "Products",
        },
        {
            name: "List",
        },
    ],
};

export default function Dashboard() {
    return (
        <App title="Dashboard">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="mt-4 flex items-center gap-3 @lg:mt-0">
                    {/* <ExportButton
                        data={productsData}
                        fileName="product_data"
                        header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
                    /> */}
                    <Link
                        href={routes.eCommerce.products}
                        className="w-full @lg:w-auto"
                    >
                        <Button
                            tag="span"
                            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                        >
                            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
                            Add Product
                        </Button>
                    </Link>
                </div>
            </PageHeader>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-800">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
