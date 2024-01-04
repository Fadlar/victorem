import App from "@/Layouts/App";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import notification from "@/utils/notification";
import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Category } from "../Categories/Category";
import { Product } from "./Product";
import EditProductForm from "./_shared/edit-product-form";

const pageHeader = {
    title: "Add Product",
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
            name: "Create",
        },
    ],
};

export default function CreateProduct({
    product,
    categories,
}: {
    product: Product;
    categories: Category[];
}) {
    const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);

    const { data, setData, errors, reset, processing, post, clearErrors } =
        useForm({
            name: "",
            description: "",
            categories: [] as Category[],
            customer_price: "",
            agent_price: "",
            stock: "",
            weight: "",
            images: [] as File[],
        });

    const [isClearFiles, setIsClearFiles] = useState(false);

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
        setData({ ...data, images: files });
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
        post(routes.eCommerce.products, {
            preserveScroll: true,
            onSuccess: () => {
                notification("Product has been created.", "success");
                reset();
                clearErrors();
                setIsClearFiles(true);
                router.visit(routes.eCommerce.products, {
                    only: ["products"],
                });
            },
        });
    };

    return (
        <App title="Add Product">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <Link
                    href={routes.eCommerce.categories}
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
                isLoading={processing}
                handleChange={handleChange}
                handleSelect={handleSelect}
                handleDescription={handleDescription}
                isClearFiles={isClearFiles}
                product={product}
                categories={categories}
                selectedCategory={selectedCategory}
                handleImages={handleImages}
                buttonTitle="Create Product"
            />
        </App>
    );
}
