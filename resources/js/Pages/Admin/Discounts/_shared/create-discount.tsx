import FileUpload from "@/Components/FileUpload";
import InputError from "@/Components/InputError";
import { routes } from "@/config/routes";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { router, useForm } from "@inertiajs/react";
import { Button, Input, Textarea } from "rizzui";
import SelectProduct from "./select-product";
import { Product } from "../../Products/Product";
import { DatePicker } from "@/components/ui/datepicker";
import { useState } from "react";

export default function CreateDiscount({
    closeModal,
    products,
}: {
    closeModal: () => void;
    products: Product[];
}) {
    const { data, setData, errors, post, processing } = useForm({
        product_id: "",
        discount_price: "",
        percentage: "",
        start_at: "",
        end_at: "",
    });

    const [startDate, setStartDate] = useState<Date>();

    const handleChange = (e: { target: { value: string; name: string } }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(routes.eCommerce.discounts, {
            onSuccess: () => {
                notification("Discount has been created.", "success");
                closeModal();
                router.visit(routes.eCommerce.discounts, {
                    only: ["discounts"],
                });
            },
        });
    };

    return (
        <form
            onSubmit={submit}
            className="isomorphic-form flex flex-grow flex-col @container"
        >
            <div className="grid grid-cols-2 gap-3">
                <SelectProduct />
                <Input
                    label={t("Discount Price")}
                    name="discount_price"
                    onChange={handleChange}
                    value={data.discount_price}
                    placeholder={t("Discount name")}
                    error={errors.discount_price}
                />
                <Input
                    label={t("Percentage")}
                    name="percentage"
                    onChange={handleChange}
                    value={data.percentage}
                    placeholder={t("Percentage")}
                    error={errors.percentage}
                />
                <div>
                    <label
                        htmlFor="start_at"
                        className="font-medium block mb-1"
                    >
                        {t("Start At")}
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        dateFormat="d MMMM yyyy, h:mm aa"
                        placeholderText="Select Date & Time"
                        showTimeSelect
                    />
                </div>
                <div>
                    <label htmlFor="end_at" className="font-medium block mb-1">
                        {t("End At")}
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        dateFormat="d MMMM yyyy, h:mm aa"
                        placeholderText="Select Date & Time"
                        showTimeSelect
                    />
                </div>
            </div>
            <div className="sticky bottom-0 flex items-center justify-end gap-3 bg-gray-0/10 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col mt-5">
                <Button
                    variant="outline"
                    className="w-full @xl:w-auto"
                    onClick={() => closeModal()}
                >
                    {t("Cancel")}
                </Button>
                <Button
                    type="submit"
                    isLoading={processing}
                    className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                >
                    {t("Create Discount")}
                </Button>
            </div>
        </form>
    );
}
