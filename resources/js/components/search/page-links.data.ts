import { routes } from "@/config/routes";

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
        name: "Sale Reports",
        href: "/reports/sale",
        permission: "viewDashboard",
    },
    {
        name: "Stock Reports",
        href: "/reports/stock",
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
    // {
    //     name: "Settings",
    //     href: "/settings",
    //     permission: "viewDashboard",
    // },
];

export const pageLinksOwner = [
    // label start
    {
        name: "Menu",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        permission: "viewDashboard",
    },
    {
        name: "Sale Reports",
        href: "/reports/sale",
        permission: "viewDashboard",
    },
    {
        name: "Profile",
        href: routes.profile,
    },
];
