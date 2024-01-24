import App from "@/Layouts/App";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import { Button } from "rizzui";
import OrdersTable from "./_shared/OrdersTable";

const pageHeader = {
    title: `Orders`,
    breadcrumb: [
        {
            href: routes.eCommerce.orders,
            name: "Orders",
        },
    ],
};

export default function Order({ orders }: any) {
    return (
        <App title="Orders">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                {/* <Button
                    tag="span"
                    className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                >
                    Filter
                </Button> */}
            </PageHeader>
            <OrdersTable data={orders} />
        </App>
    );
}
