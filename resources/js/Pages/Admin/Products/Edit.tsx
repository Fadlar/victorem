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
        customer_price: product.customer_price ?? "",
        agent_price: product.agent_price ?? "",
        stock: product.stock ?? "",
        weight: product.weight ?? "",
    });

    const [images, setImages] = useState<File[]>([]);
    const [isClearFiles, setIsClearFiles] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<any>(null);

    const handleChange = (e: { target: { name: string; value: string } }) => {
        setData({ ...data, [e.target.name]: e.target.value });
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
        setImages(files);
    };

    const handleRemoveCategory = (categoryIdToRemove: number | string) => {
        setSelectedCategory((prevSelected) =>
            prevSelected.filter(
                (category) => category.id !== categoryIdToRemove,
            ),
        );
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.post(
            routes.eCommerce.updateProduct(product.slug),
            {
                _method: "patch",
                name: data.name,
                categories: data.categories,
                description: data.description,
                customer_price: data.customer_price,
                agent_price: data.agent_price,
                stock: data.stock,
                weight: data.weight,
                images: images,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    notification("Product has been updated.", "success");
                    setData({});
                    setErrors({});
                    setImages([]);
                    setIsClearFiles(true);
                    router.visit(routes.eCommerce.editProduct(product.slug), {
                        only: ["product"],
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
