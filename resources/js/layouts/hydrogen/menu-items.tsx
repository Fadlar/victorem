import { DUMMY_ID } from "@/config/constants";
import { routes } from "@/config/routes";
import {
    PiArticleDuotone,
    PiChartBarDuotone,
    PiFolderLockDuotone,
    PiGearDuotone,
    PiShoppingCartDuotone,
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
        name: "E-Commerce",
        href: "#",
        icon: <PiShoppingCartDuotone />,
        roles: ["super admin", "admin", "team"],
        dropdownItems: [
            {
                name: "Products",
                href: routes.eCommerce.products,
                permission: "viewProduct",
            },
            {
                name: "Product Categories",
                href: routes.eCommerce.categories,
                permission: "viewCategory",
            },
            {
                name: "Orders",
                href: routes.eCommerce.orders,
                permission: "viewOrder",
            },
            {
                name: "Reviews",
                href: routes.eCommerce.reviews,
                permission: "viewTestimonial",
            },
            {
                name: "Discounts",
                href: routes.eCommerce.discounts,
                permission: "viewDiscount",
            },
            {
                name: "Vouchers",
                href: routes.eCommerce.vouchers,
                permission: "viewVoucher",
            },
        ],
    },
    {
        name: "Articles",
        href: "#",
        icon: <PiArticleDuotone />,
        roles: ["super admin", "admin"],
        dropdownItems: [
            {
                name: "List Article",
                href: routes.support.inbox,
                permission: "viewArticle",
            },
            {
                name: "Create Article",
                href: routes.support.snippets,
                permission: "createArticle",
            },
            {
                name: "Article Categories",
                href: routes.support.snippets,
                permission: "viewCategoryArticle",
            },
        ],
    },
    {
        name: "Users",
        href: "#",
        icon: <PiUsersDuotone />,
        roles: ["super admin", "admin", "team"],
        dropdownItems: [
            {
                name: "List User",
                href: routes.invoice.home,
                permission: "viewUser",
            },
            {
                name: "Create User",
                href: routes.invoice.details(DUMMY_ID),
                permission: "createUser",
            },
        ],
    },
    {
        name: "Roles & Permissions",
        href: routes.rolesPermissions,
        icon: <PiFolderLockDuotone />,
        permission: "developer",
    },
    // label start
    {
        name: "Pages",
    },
    {
        name: "Profile",
        href: routes.profile,
        icon: <PiUserCircleDuotone />,
    },
    {
        name: "Settings",
        href: routes.analytics,
        icon: <PiGearDuotone />,
        permission: "setting",
    },
];
