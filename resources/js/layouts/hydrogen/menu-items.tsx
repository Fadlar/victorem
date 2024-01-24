import { routes } from "@/config/routes";
import {
    PiChartBarDuotone,
    PiDownloadDuotone,
    PiFolderLockDuotone,
    PiGearDuotone,
    PiShoppingBagDuotone,
    PiShoppingCartDuotone,
    PiTagDuotone,
    PiUserCircleDuotone,
    PiUsersDuotone,
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
    // label start
    {
        name: "Overview",
    },
    // label end
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <PiChartBarDuotone />,
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
        icon: <PiShoppingBagDuotone />,
        permission: "viewDashboard",
    },
    {
        name: "Categories",
        href: routes.eCommerce.categories,
        icon: <PiTagDuotone />,
        permission: "viewDashboard",
    },
    {
        name: "Orders",
        href: "/ecommerce/orders",
        icon: <PiShoppingCartDuotone />,
        permission: "viewDashboard",
    },
    {
        name: "Reports",
        href: "#",
        icon: <PiDownloadDuotone />,
        dropdownItems: [
            {
                name: "Sales Report",
                href: "/reports/sale",
                badge: "",
            },
            {
                name: "Stock Report",
                href: "/reports/stock",
                badge: "",
            },
        ],
    },

    {
        name: "Users",
        href: routes.eCommerce.users,
        icon: <PiUsersDuotone />,
        permission: "viewDashboard",
    },
    // {
    //     name: "Roles & Permissions",
    //     href: routes.rolesPermissions,
    //     icon: <PiFolderLockDuotone />,
    //     permission: "developer",
    // },
    // label start
    {
        name: "Pages",
    },
    {
        name: "Profile",
        href: routes.profile,
        icon: <PiUserCircleDuotone />,
    },
    // {
    //     name: "Settings",
    //     href: "/settings",
    //     icon: <PiGearDuotone />,
    //     permission: "viewDashboard",
    // },
];
