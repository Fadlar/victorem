import FileUpload from "@/Components/FileUpload";
import InputError from "@/Components/InputError";
import { routes } from "@/config/routes";
import cn from "@/utils/class-names";
import { Link, router, useForm } from "@inertiajs/react";
import { ActionIcon, Button, Input, Text, Textarea, Title } from "rizzui";
import { Category } from "../Category";
import SimpleBar from "simplebar-react";
import { Asset } from "@/shared/roles-permissions/utils";
import { useState } from "react";
import notification from "@/utils/notification";
import { t } from "@/utils/lang";

function HorizontalFormBlockWrapper({
    title,
    description,
    children,
    className,
    isModalView = true,
}: React.PropsWithChildren<{
    title: string;
    description?: string;
    className?: string;
    isModalView?: boolean;
}>) {
    return (
        <div
            className={cn(
                className,
                isModalView ? "@3xl:grid @3xl:grid-cols-6" : " ",
            )}
        >
            {isModalView && (
                <div className="col-span-2 mb-6 pe-4 @5xl:mb-0">
                    <Title as="h6" className="font-semibold">
                        {t(title)}
                    </Title>
                    <Text className="mt-1 text-sm text-gray-500">
                        {description}
                    </Text>
                </div>
            )}

            <div
                className={cn(
                    "grid grid-cols-1 gap-3 @lg:gap-4 @2xl:gap-5",
                    isModalView ? "col-span-4" : " ",
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default function EditCategoryForm({ category }: { category: Category }) {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [data, setData] = useState({
        name: category.name ?? "",
        description: category.description ?? "",
        icon: null as null | File,
    });

    const handleChange = (e: { target: { value: string; name: string } }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleImage = (files: File[]) => {
        setData({ ...data, icon: files[0] });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.post(
            routes.eCommerce.updateCategory(category.slug),
            {
                _method: "put",
                ...data,
            },
            {
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                onError: (error) => setErrors(error),
                onSuccess: () => {
                    notification("Category has been updated.", "success");
                    router.visit(routes.eCommerce.categories, {
                        only: ["categories"],
                    });
                },
            },
        );
    };

    return (
        <form
            onSubmit={submit}
            className="isomorphic-form flex flex-grow flex-col @container"
        >
            <div className="grid grid-cols-1 gap-8 divide-y divide-dashed  divide-gray-200 @2xl:gap-10 @3xl:gap-12 [&>div]:pt-7 first:[&>div]:pt-0 @2xl:[&>div]:pt-9 @3xl:[&>div]:pt-11">
                <HorizontalFormBlockWrapper
                    title="Edit product category:"
                    description={t("Edit your category information from here")}
                >
                    <Input
                        label={t("Category Name")}
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                        placeholder={t("Category name")}
                        error={errors.name}
                    />
                    <Textarea
                        label={t("Description")}
                        name="description"
                        onChange={handleChange}
                        value={data.description}
                        placeholder={t("Description")}
                        error={errors.description}
                    />
                </HorizontalFormBlockWrapper>
                <HorizontalFormBlockWrapper
                    title="Update icon image"
                    description={t("Update and upload your icon category here")}
                >
                    <div className="mb-5">
                        <FileUpload
                            label="Category Icon"
                            multiple={false}
                            placeholder="PNG, JPG, JPEG up to 2MB"
                            onChangeFile={handleImage}
                        />
                        <InputError message={errors.icon} />
                        {data.icon === null ? (
                            <SimpleBar className="max-h-[280px]">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex min-h-[58px] w-full items-center rounded-xl border border-gray-200 px-3 dark:border-gray-300">
                                        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                                            <img
                                                src={Asset(category.icon)}
                                                className=" object-contain"
                                                alt={category.name}
                                                sizes="(max-width: 768px) 100vw"
                                            />
                                        </div>
                                        <div className="truncate px-2.5">
                                            {category.icon?.split("/")[1]}
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        ) : null}
                    </div>
                </HorizontalFormBlockWrapper>
            </div>
            <div className="sticky bottom-0 z-40 flex items-center justify-end gap-3 bg-gray-0/10 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col -mx-10 -mb-7 px-10 py-5">
                <Link href={routes.eCommerce.categories}>
                    <Button variant="outline" className="w-full @xl:w-auto">
                        {t("Cancel")}
                    </Button>
                </Link>
                <Button
                    type="submit"
                    isLoading={processing}
                    className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100 py-1"
                >
                    {t("Update Category")}
                </Button>
            </div>
        </form>
    );
}
