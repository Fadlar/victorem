import App from "@/Layouts/App";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import { Link } from "@inertiajs/react";
import { Button } from "rizzui";
import UsersTable from "./_shared/UsersTable";

const pageHeader = {
    title: `Users`,
    breadcrumb: [
        {
            href: routes.eCommerce.orders,
            name: "Users",
        },
    ],
};

export default function User({ users }: any) {
    return (
        <App title="User">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                {/* <Link href={routes.eCommerce.createUser}>
                    <Button>Add User</Button>
                </Link> */}
            </PageHeader>
            <UsersTable data={users} />
        </App>
    );
}
