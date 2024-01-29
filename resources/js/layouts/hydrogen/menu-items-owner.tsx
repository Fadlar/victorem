import { routes } from "@/config/routes";
import {
    PiChartBarDuotone,
    PiDownloadDuotone,
    PiUserCircleDuotone,
} from "react-icons/pi";

export const menuItemsOwner = [
    // label end
    {
        name: "Menu",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <PiChartBarDuotone />,
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
        name: "Profile",
        href: routes.profile,
        icon: <PiUserCircleDuotone />,
    },
];
