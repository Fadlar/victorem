import FileUpload from "@/Components/FileUpload";
import { Product, ProductImages } from "@/Pages/Admin/Products/Product";
import FormGroup from "@/shared/form-group";
import { Asset } from "@/shared/roles-permissions/utils";
import cn from "@/utils/class-names";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { router } from "@inertiajs/react";
import { Fragment, useState } from "react";
import { PiTrashBold } from "react-icons/pi";
import { ActionIcon, Button } from "rizzui";

interface ProductMediaProps {
    className?: string;
    product: Product;
}

export default function ProductMedia({
    className,
    product,
}: ProductMediaProps) {
    const [images, setImages] = useState<File[]>([]);
    const [errors, setErrors] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isClearFiles, setIsClearFiles] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.post(
            `/ecommerce/products/${product.slug}`,
            {
                _method: "patch",
                images: images,
            },
            {
                preserveScroll: true,
                onStart: () => setIsLoading(true),
                onFinish: () => setIsLoading(false),
                onSuccess: () => {
                    notification("Product images has been updated.", "success");
                    setImages([]);
                    setErrors(null);
                    setIsClearFiles(true);
                },
                onError: (error) => {
                    notification("Something went wrong.", "error");
                    setErrors(error);
                },
            },
        );
    };

    const handleFileDelete = (id: number) => {
        router.delete(`/ecommerce/product-image/${id}`, {
            preserveScroll: true,
            onSuccess: () => notification("Product images deleted.", "success"),
        });
    };

    const onReorder = (images: any) => {
        router.put(
            `/ecommerce/product-image/${product.slug}`,
            {
                images: images,
            },
            {
                preserveScroll: true,
                // onStart: () =>
            },
        );
    };

    return (
        <form onSubmit={submit}>
            <FormGroup
                title="Upload new product images"
                description="Upload your product image gallery here"
                className={cn(className)}
            >
                <FileUpload
                    onChangeFile={(file) => setImages(file)}
                    errors={errors}
                    isClearFiles={isClearFiles}
                />
                {product.images.length > 0 && (
                    <div className="max-h-[280px] col-span-full mb-5">
                        <div className="mb-2 text-gray-800">
                            {t("Product images")}
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            {product.images.map((image) => (
                                <Fragment key={image.id}>
                                    <div className="flex min-h-[58px] w-full items-center rounded-xl border border-gray-200 px-3">
                                        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                                            <img
                                                src={Asset(image.url)}
                                                className=" object-contain"
                                                alt={"image" + image.position}
                                                sizes="(max-width: 768px) 100vw"
                                            />
                                        </div>
                                        <div className="truncate px-2.5">
                                            {image.url.split("/")[1]}
                                        </div>
                                        <ActionIcon
                                            onClick={() =>
                                                handleFileDelete(image.id)
                                            }
                                            size="sm"
                                            variant="flat"
                                            color="danger"
                                            className="ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20"
                                        >
                                            <PiTrashBold className="w-6" />
                                        </ActionIcon>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </FormGroup>
            <div className="mt-7 text-end">
                <Button
                    type="submit"
                    isLoading={isLoading}
                    className="w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                >
                    {t("Update")}
                </Button>
            </div>
        </form>
    );
}
