import cn from "@/utils/class-names";
import { useCallback } from "react";

import { ActionIcon } from "@/components/ui/action-icon";
import { PiGridFour, PiListBullets } from "react-icons/pi";
import { router, usePage } from "@inertiajs/react";

export default function ViewSwitcher() {
    // const router = useRouter();
    const pathname = usePage().url;
    // const searchParams = useSearchParams();
    // const layout = searchParams.get("layout");
    // const isGridLayout = layout?.toLowerCase() === "grid";
    const createQueryString = useCallback(
        (name: string, value: string) => {
            // const params = new URLSearchParams(searchParams.toString());
            // params.set(name, value);
            // params.toString();
            return;
        },
        [
            // searchParams
        ],
    );

    const handleLayoutToggle = (view: string) => {
        router.get(`${pathname}?${createQueryString("layout", view)}`);
    };

    return (
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-1.5 px-1.5">
            <ActionIcon
                size="sm"
                variant="flat"
                className={cn(
                    "group bg-transparent hover:enabled:bg-gray-100 dark:hover:enabled:bg-gray-200",
                    // !isGridLayout && "bg-gray-900 dark:bg-gray-200",
                )}
                onClick={() => handleLayoutToggle("list")}
            >
                <PiListBullets
                    className={cn(
                        "h-5 w-5 transition-colors group-hover:text-gray-900",
                        // !isGridLayout && "text-white",
                    )}
                />
            </ActionIcon>
            <ActionIcon
                size="sm"
                variant="flat"
                className={cn(
                    "group bg-transparent hover:enabled:bg-gray-100  dark:hover:enabled:bg-gray-200",
                    // isGridLayout && "bg-gray-900 dark:bg-gray-200",
                )}
                onClick={() => handleLayoutToggle("grid")}
            >
                <PiGridFour
                    className={cn(
                        "h-5 w-5 transition-colors group-hover:text-gray-900",
                        // isGridLayout && "text-white",
                    )}
                />
            </ActionIcon>
        </div>
    );
}
