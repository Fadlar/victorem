import App from "@/Layouts/App";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import notification from "@/utils/notification";
import { Link, router, useForm } from "@inertiajs/react";
import { addMonths } from "date-fns";
import { Product } from "../Products/Product";
import { Discount } from "./Discount";
import EditDiscountForm from "./_shared/edit-discount-form";

const pageHeader = {
    title: "Add Discount",
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

export default function CreateDiscount({
    discount,
    products,
}: {
    discount: Discount;
    products: Product[];
}) {
    const { data, setData, errors, post, processing } = useForm<DataType>({
        product: {},
        discount_price: 0,
        percentage: 0,
        start_at: new Date(),
        end_at: addMonths(new Date(), 1),
    });

    const handleChange = (e: { target: { name: string; value: any } }) => {
        const { name, value } = e.target;

        if (name === "discount_price") {
            const originalPrice = data.product.customer_price;
            const percentage = (value / originalPrice) * 100;

            setData({
                ...data,
                discount_price: value,
                percentage: percentage,
            });
        } else if (name === "percentage") {
            const originalPrice = data.product.customer_price;
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

        post(routes.eCommerce.discounts, {
            onSuccess: () => {
                notification("Discount has been created.", "success");
                router.visit(routes.eCommerce.discounts, {
                    only: ["discounts"],
                });
            },
        });
    };

    return (
        <App title="Create Discount">
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
                buttonTitle="Create Discount"
                discount={discount}
            />
        </App>
    );
}
