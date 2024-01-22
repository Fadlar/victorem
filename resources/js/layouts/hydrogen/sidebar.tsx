import { Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";

import { Title } from "@/components/ui/text";

import Logo from "@/components/logo";
import { Collapse } from "@/components/ui/collapse";
import SimpleBar from "@/components/ui/simplebar";
import cn from "@/utils/class-names";
import { hasAccess } from "@/utils/has-access";
import { PiCaretDownBold } from "react-icons/pi";
import { menuItems } from "./menu-items";
import { t } from "@/utils/lang";
import { PageProps } from "@/types";

export default function Sidebar({ className }: { className?: string }) {
    const pathname = usePage().url;
    const { auth } = usePage<PageProps>().props;

    return (
        <aside
            className={cn(
                "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72",
                className,
            )}
        >
            <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
                <a href={"/"} aria-label="Site Logo">
                    <Logo className="max-w-[155px]" />
                </a>
            </div>

            <SimpleBar className="h-[calc(100%-80px)]">
                <div className="mt-4 pb-3 3xl:mt-6">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === (item?.href as string);
                        const pathnameExistInDropdowns: any = // @ts-ignore
                            item?.dropdownItems?.filter(
                                // @ts-ignore
                                (dropdownItem) =>
                                    dropdownItem.href === pathname,
                            );
                        const isDropdownOpen = Boolean(
                            pathnameExistInDropdowns?.length,
                        );

                        return (
                            <Fragment key={item.name + "-" + index}>
                                {item?.href ? (
                                    <>
                                        {/* @ts-ignore */}
                                        {item?.dropdownItems ? (
                                            <>
                                                {/* @ts-ignore */}
                                                {item?.roles.some((item1) =>
                                                    auth.user.roles.some(
                                                        (item2) =>
                                                            item2.name ===
                                                            item1,
                                                    ),
                                                ) ? (
                                                    <Collapse
                                                        defaultOpen={
                                                            isDropdownOpen
                                                        }
                                                        header={({
                                                            open,
                                                            toggle,
                                                        }) => (
                                                            <div
                                                                onClick={toggle}
                                                                className={cn(
                                                                    "group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2",
                                                                    isDropdownOpen
                                                                        ? "before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                                                                        : "text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700",
                                                                )}
                                                            >
                                                                <span className="flex items-center">
                                                                    {item?.icon && (
                                                                        <span
                                                                            className={cn(
                                                                                "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]",
                                                                                isDropdownOpen
                                                                                    ? "text-primary"
                                                                                    : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700",
                                                                            )}
                                                                        >
                                                                            {
                                                                                item?.icon
                                                                            }
                                                                        </span>
                                                                    )}
                                                                    {t(
                                                                        item.name,
                                                                    )}
                                                                </span>

                                                                <PiCaretDownBold
                                                                    strokeWidth={
                                                                        3
                                                                    }
                                                                    className={cn(
                                                                        "h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90",
                                                                        open &&
                                                                            "rotate-0 rtl:rotate-0",
                                                                    )}
                                                                />
                                                            </div>
                                                        )}
                                                    >
                                                        {/* @ts-ignore */}
                                                        {item?.dropdownItems?.map(
                                                            (
                                                                // @ts-ignore
                                                                dropdownItem,
                                                                // @ts-ignore
                                                                index,
                                                            ) => {
                                                                const isChildActive =
                                                                    pathname ===
                                                                    (dropdownItem?.href as string);
                                                                const content =
                                                                    (
                                                                        <Link
                                                                            href={
                                                                                dropdownItem?.href
                                                                            }
                                                                            key={
                                                                                dropdownItem?.name +
                                                                                index
                                                                            }
                                                                            className={cn(
                                                                                "mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5",
                                                                                isChildActive
                                                                                    ? "text-primary"
                                                                                    : "text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900",
                                                                            )}
                                                                        >
                                                                            <div className="flex items-center truncate">
                                                                                <span
                                                                                    className={cn(
                                                                                        "me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200",
                                                                                        isChildActive
                                                                                            ? "bg-primary ring-[1px] ring-primary"
                                                                                            : "opacity-40",
                                                                                    )}
                                                                                />
                                                                                <span className="truncate">
                                                                                    {t(
                                                                                        dropdownItem?.name,
                                                                                    )}
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    );

                                                                if (
                                                                    dropdownItem.permission
                                                                ) {
                                                                    if (
                                                                        hasAccess(
                                                                            dropdownItem.permission,
                                                                        )
                                                                    ) {
                                                                        return content;
                                                                    } else {
                                                                        return;
                                                                    }
                                                                } else {
                                                                    return content;
                                                                }
                                                            },
                                                        )}
                                                    </Collapse>
                                                ) : null}
                                            </>
                                        ) : (
                                            <>
                                                {item.permission ? (
                                                    <>
                                                        {hasAccess(
                                                            item.permission,
                                                        ) ? (
                                                            <Link
                                                                href={
                                                                    item?.href
                                                                }
                                                                className={cn(
                                                                    "group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                                                                    isActive
                                                                        ? "before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                                                                        : "text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90",
                                                                )}
                                                            >
                                                                <div className="flex items-center truncate">
                                                                    {item?.icon && (
                                                                        <span
                                                                            className={cn(
                                                                                "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]",
                                                                                isActive
                                                                                    ? "text-primary"
                                                                                    : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700",
                                                                            )}
                                                                        >
                                                                            {
                                                                                item?.icon
                                                                            }
                                                                        </span>
                                                                    )}
                                                                    <span className="truncate">
                                                                        {t(
                                                                            item.name,
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        ) : null}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item?.href}
                                                        className={cn(
                                                            "group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                                                            isActive
                                                                ? "before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                                                                : "text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90",
                                                        )}
                                                    >
                                                        <div className="flex items-center truncate">
                                                            {item?.icon && (
                                                                <span
                                                                    className={cn(
                                                                        "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]",
                                                                        isActive
                                                                            ? "text-primary"
                                                                            : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700",
                                                                    )}
                                                                >
                                                                    {item?.icon}
                                                                </span>
                                                            )}
                                                            <span className="truncate">
                                                                {t(item.name)}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <Title
                                        as="h6"
                                        className={cn(
                                            "mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8",
                                            index !== 0 && "mt-6 3xl:mt-7",
                                        )}
                                    >
                                        {t(item.name)}
                                    </Title>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </SimpleBar>
        </aside>
    );
}
