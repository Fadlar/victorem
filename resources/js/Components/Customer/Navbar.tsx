import { navigations } from "@/data/navigations";
import ProfileMenu from "@/layouts/profile-menu";
import { PageProps } from "@/types";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import { Fragment, useState } from "react";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigations.categories.map(
                                                (category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? "border-gray-600 text-gray-800"
                                                                    : "border-transparent text-gray-900",
                                                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ),
                                            )}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigations.categories.map(
                                            (category) => (
                                                <Tab.Panel
                                                    key={category.name}
                                                    className="space-y-10 px-4 pb-8 pt-10"
                                                >
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map(
                                                            (item) => (
                                                                <div
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    className="group relative text-sm"
                                                                >
                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                        <img
                                                                            src={
                                                                                item.imageSrc
                                                                            }
                                                                            alt={
                                                                                item.imageAlt
                                                                            }
                                                                            className="object-cover object-center"
                                                                        />
                                                                    </div>
                                                                    <a
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className="mt-6 block font-medium text-gray-900"
                                                                    >
                                                                        <span
                                                                            className="absolute inset-0 z-10"
                                                                            aria-hidden="true"
                                                                        />
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </a>
                                                                    <p
                                                                        aria-hidden="true"
                                                                        className="mt-1"
                                                                    >
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                    {category.sections.map(
                                                        (section) => (
                                                            <div
                                                                key={
                                                                    section.name
                                                                }
                                                            >
                                                                <p
                                                                    id={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="font-medium text-gray-900"
                                                                >
                                                                    {
                                                                        section.name
                                                                    }
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="mt-6 flex flex-col space-y-6"
                                                                >
                                                                    {section.items.map(
                                                                        (
                                                                            item,
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    item.name
                                                                                }
                                                                                className="flow-root"
                                                                            >
                                                                                <a
                                                                                    href={
                                                                                        item.href
                                                                                    }
                                                                                    className="-m-2 block p-2 text-gray-500"
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </a>
                                                                            </li>
                                                                        ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        ),
                                                    )}
                                                </Tab.Panel>
                                            ),
                                        )}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigations.pages.map((page) => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <a
                                                href={page.href}
                                                className="-m-2 block p-2 font-medium text-gray-900"
                                            >
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Login
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 block p-2 font-medium text-gray-900"
                                        >
                                            Create account
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a
                                        href="#"
                                        className="-m-2 flex items-center p-2"
                                    >
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">
                                            CAD
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-white">
                {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p> */}

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="">
                        <div className="flex h-20 items-center">
                            <button
                                type="button"
                                className="relative bg-white p-2 text-gray-800 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0 flex-shrink-0">
                                <a href="/">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-14 w-14"
                                        src="/victorem/logo-light.png"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:flex w-full justify-center">
                                <div className="flex h-full space-x-8">
                                    {navigations.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center flex-shrink-0">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {auth.user ? null : (
                                        <>
                                            <Link
                                                href="/login"
                                                className="text-sm font-medium text-gray-800 hover:text-gray-600"
                                            >
                                                Login
                                            </Link>
                                            <span
                                                className="h-6 w-px bg-gray-300"
                                                aria-hidden="true"
                                            />
                                            <Link
                                                href="/register"
                                                className="text-sm font-medium text-gray-800 hover:text-gray-600"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>

                                {/* Search */}
                                {/* <div className="flex lg:ml-6">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-800 hover:text-gray-600"
                                    >
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div> */}

                                {/* Cart */}
                                <div className="flex items-center gap-x-5">
                                    {auth.user ? (
                                        <>
                                            <div className="ml-4 flow-root lg:ml-6">
                                                <a
                                                    href="#"
                                                    className="group -m-2 flex items-center p-2"
                                                >
                                                    <ShoppingBagIcon
                                                        className="h-6 w-6 flex-shrink-0 text-gray-800 group-hover:text-gray-600"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-2 text-sm font-medium text-gray-800 group-hover:text-gray-600">
                                                        0
                                                    </span>
                                                    <span className="sr-only">
                                                        items in cart, view bag
                                                    </span>
                                                </a>
                                            </div>

                                            <ProfileMenu />
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
