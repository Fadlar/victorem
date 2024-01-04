import InputError from "@/Components/InputError";
import { Category } from "@/Pages/Admin/Categories/Category";
import { Product } from "@/Pages/Admin/Products/Product";
import { Input } from "@/components/ui/input";
import FormGroup from "@/shared/form-group";
import cn from "@/utils/class-names";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { Listbox } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

import { lazy, useEffect, useState } from "react";
import { Button } from "rizzui";

const QuillEditor = lazy(() => import("@/components/ui/quill-editor"));

export default function ProductSummary({
    className,
    categories,
    data,
    errors,
    handleChange,
    handleSelect,
    handleDescription,
    selectedCategory,
}: {
    className?: string;
    categories: Category[];
    data: any;
    errors: any;
    handleChange: (e: { target: { name: string; value: string } }) => void;
    handleSelect: (value: Category) => void;
    handleDescription: (value: string) => void;
    selectedCategory: Category[];
}) {
    return (
        <div>
            <FormGroup
                title="Summary"
                description="Edit your product description information from here"
                className={cn(className)}
            >
                <div className="col-span-full">
                    <Input
                        label="Name"
                        placeholder="Product Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="col-span-full"
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.name}
                    />
                </div>

                <div className="col-span-full">
                    <label
                        htmlFor="category"
                        className="font-medium text-gray-600"
                    >
                        Category
                    </label>
                    <div className="w-full">
                        <Listbox onChange={handleSelect}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative border w-full hover:border-gray-800 cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm overflow-hidden">
                                    {selectedCategory.map((category) => (
                                        <div
                                            key={category.id}
                                            className="bg-gray-100 text-gray-600 text-xs font-semibold rounded py-0.5 px-1.5 inline-flex flex-wrap m-0.5"
                                        >
                                            {category.name}
                                        </div>
                                    ))}
                                    {!selectedCategory.length ? (
                                        <div className="text-sm text-gray-600">
                                            {t("Select Category")}
                                        </div>
                                    ) : null}
                                </Listbox.Button>
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
                                    {categories.map((category) => (
                                        <Listbox.Option
                                            key={category.id}
                                            value={category}
                                            className="cursor-pointer py-2 pl-5 pr-4 bg-white flex"
                                        >
                                            <span
                                                className={`block truncate ${
                                                    selectedCategory.some(
                                                        (c) =>
                                                            c.id ===
                                                            category.id,
                                                    )
                                                        ? "font-medium text-teal-500"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {category.name}
                                            </span>
                                        </Listbox.Option>
                                    ))}
                                    {!categories.length ? (
                                        <Listbox.Option
                                            value=""
                                            className="cursor-no-allowed py-2 pl-5 pr-4 bg-white flex"
                                            disabled
                                        >
                                            <span>{t("No data.")}</span>
                                        </Listbox.Option>
                                    ) : null}
                                </Listbox.Options>
                            </div>
                        </Listbox>
                        <InputError
                            className="mt-1"
                            message={errors && errors.categories}
                        />
                    </div>
                </div>
                <div className="col-span-full">
                    <QuillEditor
                        value={data.description}
                        onChange={handleDescription}
                        label="Description"
                        className="col-span-full [&_.ql-editor]:min-h-[100px]"
                        labelClassName="font-medium text-gray-700 dark:text-gray-600"
                    />
                    <InputError
                        message={errors && errors.description}
                        className="mt-1"
                    />
                </div>
            </FormGroup>
        </div>
    );
}
