import Logo from "@/components/logo";
import cn from "@/utils/class-names";

import { useIsMounted } from "@/hooks/use-is-mounted";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Header() {
    const isMounted = useIsMounted();
    const windowScroll = useWindowScroll();
    return (
        <header
            className={cn(
                "sticky border border-b top-0 z-50 flex items-center justify-between bg-gray-0/80 px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 2xl:py-5 2xl:pl-6 3xl:px-8",
                ((isMounted && windowScroll.y) as number) > 2
                    ? "card-shadow"
                    : "",
            )}
        >
            <div className="hidden items-center gap-3 xl:flex">
                <a
                    aria-label="Site Logo"
                    href={"/"}
                    className="me-4 hidden w-14 shrink-0 text-gray-900 lg:me-5 xl:block"
                >
                    <ApplicationLogo />
                </a>
            </div>
            <div className="flex w-full items-center gap-5 xl:w-auto 3xl:gap-6">
                <div className="flex w-full max-w-2xl items-center xl:w-auto">
                    <a
                        aria-label="Site Logo"
                        href={"/"}
                        className="me-4 w-9 shrink-0 text-gray-900 lg:me-5 xl:hidden"
                    >
                        <ApplicationLogo iconOnly={true} />
                    </a>
                </div>
            </div>
        </header>
    );
}
