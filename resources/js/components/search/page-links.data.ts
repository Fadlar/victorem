import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
    // label start
    {
        name: "Overview",
    },
    // label end
    {
        name: "Dashboard",
        href: "/dashboard",
        permission: "viewDashboard",
    },
    // label start
    {
        name: "Management",
    },
    // label end
    {
        name: "Products",
        href: routes.eCommerce.products,
        permission: "viewDashboard",
    },
    {
        name: "Categories",
        href: routes.eCommerce.categories,
        permission: "viewDashboard",
    },
    {
        name: "Orders",
        href: "/ecommerce/orders",
        permission: "viewDashboard",
    },
    {
        name: "Reports",
        href: "/reports",
        permission: "viewDashboard",
    },
    {
        name: "Users",
        href: "/users",
        permission: "viewDashboard",
    },
    // label start
    {
        name: "Pages",
    },
    {
        name: "Profile",
        href: routes.profile,
    },
    {
        name: "Settings",
        href: "/settings",
        permission: "viewDashboard",
    },
];
