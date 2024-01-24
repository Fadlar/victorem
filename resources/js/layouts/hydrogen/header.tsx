import ApplicationLogo from "@/Components/ApplicationLogo";
import Logo from "@/components/logo";
import SearchWidget from "@/components/search/search";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import HeaderMenuRight from "@/layouts/header-menu-right";
import Sidebar from "@/layouts/hydrogen/sidebar";
import cn from "@/utils/class-names";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { ActionIcon, Drawer } from "rizzui";

export default function Header() {
    const isMounted = useIsMounted();
    const windowScroll = useWindowScroll();
    const [drawerState, setDrawerState] = useState(false);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 flex items-center bg-gray-0/80 px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10",
                ((isMounted && windowScroll.y) as number) > 2
                    ? "card-shadow"
                    : "",
            )}
        >
            <div className="flex w-full max-w-2xl items-center">
                <ActionIcon
                    aria-label="Open Sidebar Menu"
                    variant="text"
                    className={cn("me-3 h-auto w-auto p-0 sm:me-4 xl:hidden")}
                    onClick={() => setDrawerState(!drawerState)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        />
                    </svg>
                </ActionIcon>
                <Drawer
                    isOpen={drawerState}
                    onClose={() => setDrawerState(false)}
                    placement="left"
                    customSize="270px"
                >
                    <Sidebar />
                </Drawer>
                <a
                    href={"/"}
                    aria-label="Site Logo"
                    className="me-4 w-9 shrink-0 lg:me-5 xl:hidden"
                >
                    <ApplicationLogo className="w-10" />
                </a>
                <SearchWidget />
            </div>

            <HeaderMenuRight />
        </header>
    );
}
