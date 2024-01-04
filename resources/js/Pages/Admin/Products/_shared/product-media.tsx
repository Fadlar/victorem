import FileUpload from "@/Components/FileUpload";
import { Product } from "@/Pages/Admin/Products/Product";
import FormGroup from "@/shared/form-group";
import cn from "@/utils/class-names";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { Button } from "rizzui";
import ProductImageList from "./product-image-list";
import InputError from "@/Components/InputError";

interface ProductMediaProps {
    className?: string;
    product: Product;
    handleImages: (files: File[]) => void;
    errors: any;
    isClearFiles: boolean;
}

export default function ProductMedia({
    className,
    product,
    handleImages,
    errors,
    isClearFiles,
}: ProductMediaProps) {
    const [isReorder, setIsReorder] = useState(false);

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
                onStart: () => setIsReorder(true),
                onFinish: () => setIsReorder(false),
                onSuccess: () => {
                    notification(
                        "The product image has been updated.",
                        "success",
                    );
                },
            },
        );
    };

    return (
        <>
            <FormGroup
                title="Upload new product images"
                description="Upload your product image gallery here"
                className={cn(className)}
            >
                <FileUpload
                    onChangeFile={handleImages}
                    errors={errors}
                    isClearFiles={isClearFiles}
                />
                <InputError
                    className="-mt-5"
                    message={errors && errors.images}
                />
                {product?.images?.length > 0 && (
                    <div className="max-h-[280px] col-span-full mb-5">
                        <div className="mb-2 text-gray-800">
                            {t("Product images")}
                        </div>
                        <div className="relative overflow-hidden">
                            {isReorder ? (
                                <div className="absolute z-50 inset-0 bg-black/25 backdrop-blur-sm rounded-md flex items-center justify-center">
                                    <span className="animate-spin">
                                        <PiSpinner className="w-10 h-10 text-white" />
                                    </span>
                                </div>
                            ) : null}
                            <ProductImageList
                                items={product.images}
                                onReorder={onReorder}
                                onDelete={handleFileDelete}
                            />
                        </div>
                    </div>
                )}
            </FormGroup>
        </>
    );
}
