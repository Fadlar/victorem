import App from "@/Layouts/App";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import notification from "@/utils/notification";
import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Product } from "../Products/Product";
import { Discount } from "./Discount";
import EditDiscountForm from "./_shared/edit-discount-form";
import { addMonths, format } from "date-fns";

const pageHeader = {
    title: "Edit Discount",
    breadcrumb: [
        {
            href: "#",
            name: "Home",
        },
        {
            href: routes.eCommerce.discounts,
            name: "Discounts",
        },
        {
            name: "Edit",
        },
    ],
};

interface DataType {
    product: any;
    discount_price: number;
    percentage: number;
    start_at: Date;
    end_at: Date;
}

export default function EditDiscount({
    discount,
    products,
}: {
    discount: Discount;
    products: Product[];
}) {
    const { data, setData, errors, put, processing } = useForm<DataType>({
        product: discount.product ?? {},
        discount_price: discount.discount_price ?? 0,
        percentage: discount.percentage ?? 0,
        start_at: new Date(discount.start_at) ?? new Date(),
        end_at: new Date(discount.end_at) ?? addMonths(new Date(), 1),
    });

    const handleChange = (e: { target: { name: string; value: any } }) => {
        const { name, value } = e.target;

        if (name === "discount_price") {
            const originalPrice = data.product.price;
            const percentage = (value / originalPrice) * 100;

            setData({
                ...data,
                discount_price: value,
                percentage: percentage,
            });
        } else if (name === "percentage") {
            const originalPrice = data.product.price;
            const discount = originalPrice * (value / 100);

            setData({
                ...data,
                discount_price: discount,
                percentage: value,
            });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const handleSelect = (value: any) => {
        setData({ ...data, product: value });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        put(routes.eCommerce.udDiscount(discount.id), {
            onSuccess: () => {
                notification("Discount has been updated.", "success");
                router.visit(routes.eCommerce.discounts, {
                    only: ["discounts"],
                });
            },
        });
    };

    return (
        <App title="Edit Discount">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <Link
                    href={routes.eCommerce.discounts}
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
            <EditDiscountForm
                handleSubmit={submit}
                data={data}
                errors={errors}
                isLoading={processing}
                handleChange={handleChange}
                handleSelect={handleSelect}
                setData={setData}
                products={products}
                buttonTitle="Update Discount"
                discount={discount}
            />
        </App>
    );
}
