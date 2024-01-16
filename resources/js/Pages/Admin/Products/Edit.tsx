import App from "@/Layouts/App";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import notification from "@/utils/notification";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Category } from "../Categories/Category";
import { Product } from "./Product";
import EditProductForm from "./_shared/edit-product-form";

const pageHeader = {
    title: "Edit Product",
    breadcrumb: [
        {
            href: "#",
            name: "Home",
        },
        {
            href: routes.eCommerce.products,
            name: "Products",
        },
        {
            name: "Edit",
        },
    ],
};

export default function EditProduct({
    product,
    categories,
}: {
    product: Product;
    categories: Category[];
}) {
    const [selectedCategory, setSelectedCategory] = useState<Category[]>(
        product.categories ?? [],
    );

    const [data, setData] = useState<any>({
        name: product.name ?? "",
        description: product.description ?? "",
        categories: product.categories ?? [],
        price: product.price ?? 0,
        discount: product.discount ?? 0,
        discount_percent: product.discount_percent ?? 0,
        weight: product.weight ?? 0,
        images: [],
        sizes: product.sizes ?? [],
    });

    const [isClearFiles, setIsClearFiles] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<any>(null);

    const handleChange = (e: { target: { name: string; value: any } }) => {
        const { name, value } = e.target;

        if (name === "discount") {
            const originalPrice = parseFloat(
                data.price.toString().replace(/\,/g, ""),
            );
            const percentage =
                (value.toString().replace(/\,/g, "") / originalPrice) * 100;

            setData({
                ...data,
                discount: value,
                discount_percent: percentage,
            });
        } else if (name === "discount_percent") {
            const originalPrice = parseFloat(
                data.price.toString().replace(/\,/g, ""),
            );
            const discount = originalPrice * (value / 100);

            setData({
                ...data,
                discount: discount,
                discount_percent: value,
            });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSelect = (value: Category) => {
        const currentCategory = selectedCategory.some(
            (sc) => sc.id === value.id,
        );
        if (currentCategory) {
            handleRemoveCategory(value.id);
        } else {
            setSelectedCategory((prev) => {
                const allSelect = prev.concat(value);
                setData({ ...data, categories: allSelect });
                return allSelect;
            });
        }
    };

    const handleDescription = (value: string) => {
        setData({ ...data, description: value });
    };

    const handleImages = (files: File[]) => {
        setData({ ...data, images: files });
    };

    const handleSize = (e: any, sizeName: any) => {
        const { name, value } = e.target;
        setData((prevSelectedSizes: any) => {
            const updatedSizes = [...prevSelectedSizes.sizes];
            const index = updatedSizes.findIndex((s) => s.name === sizeName);

            if (index !== -1) {
                // Update jika ukuran sudah ada
                updatedSizes[index][name] = value;
            } else {
                // Tambahkan baru jika ukuran belum ada
                updatedSizes.push({ name: sizeName, stock: value });
            }

            // Filter elemen yang memiliki stock null
            const filteredSizes = updatedSizes.filter(
                (s) => s.stock !== null && s.stock !== "",
            );

            return { ...prevSelectedSizes, sizes: filteredSizes };
        });
    };

    const handleRemoveCategory = (categoryIdToRemove: number | string) => {
        setSelectedCategory((prevSelected) => {
            const updatedCategory = prevSelected.filter(
                (category) => category.id !== categoryIdToRemove,
            );
            setData({ ...data, categories: updatedCategory });
            return updatedCategory;
        });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.post(
            routes.eCommerce.updateProduct(product.slug),
            {
                _method: "patch",
                name: data.name,
                description: data.description,
                categories: data.categories,
                price: data.price,
                discount: data.discount,
                discount_percent: data.discount_percent,
                weight: data.weight,
                images: data.images,
                sizes: data.sizes,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    notification("Product has been updated.", "success");
                    setData({});
                    setErrors({});
                    setIsClearFiles(true);
                    router.visit(routes.eCommerce.products, {
                        only: ["products"],
                    });
                },
                onStart: () => setIsLoading(true),
                onFinish: () => setIsLoading(false),
                onError: (error) => {
                    notification("Something went wrong.", "error");
                    setErrors(error);
                },
            },
        );
    };

    return (
        <App title="Edit Product">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <Link
                    href={routes.eCommerce.products}
                    className="mt-4 w-full @lg:mt-0 @lg:w-auto"
                >
                    <Button
                        tag="span"
                        className="w-full @lg:w-auto"
                        variant="outline"
                    >
                        Cancel
                    </Button>
                </Link>
            </PageHeader>
            <EditProductForm
                handleSize={handleSize}
                handleSubmit={submit}
                data={data}
                errors={errors}
                isLoading={isLoading}
                handleChange={handleChange}
                handleSelect={handleSelect}
                handleDescription={handleDescription}
                isClearFiles={isClearFiles}
                product={product}
                categories={categories}
                selectedCategory={selectedCategory}
                handleImages={handleImages}
            />
        </App>
    );
}
