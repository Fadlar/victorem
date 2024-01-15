import InputError from "@/Components/InputError";
import SelectBox from "@/components/ui/select";
import FormGroup from "@/shared/form-group";
import cn from "@/utils/class-names";
import { Fragment, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Button, Input } from "rizzui";

interface PricingInventoryProps {
    className?: string;
    data: any;
    errors: any;
    handleChange: (e: { target: { name: string; value: string } }) => void;
    handleSize: (e: any, value: any) => void;
}

const sizes = [
    {
        name: "Small",
        value: "s",
    },
    {
        name: "Medium",
        value: "m",
    },
    {
        name: "Large",
        value: "l",
    },
    {
        name: "Extra Large",
        value: "xl",
    },
    {
        name: "Extra Extra Large",
        value: "xxl",
    },
];

export default function PricingInventory({
    className,
    data,
    errors,
    handleChange,
    handleSize,
}: PricingInventoryProps) {
    return (
        <div className="divide-y divide-dashed divide-gray-200">
            <FormGroup
                title="Pricing"
                description="Add your product pricing here"
                className={cn(className)}
            >
                <div className="col-span-full">
                    <label
                        htmlFor="price"
                        className="mb-1 block text-gray-600 font-medium"
                    >
                        Price
                    </label>
                    <NumericFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="rounded-md border border-gray-200 w-full text-base"
                        autoComplete="off"
                        name="price"
                        placeholder="Rp"
                        onChange={handleChange}
                        value={data.customer_price}
                        min={1}
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.price}
                    />
                </div>
                <div>
                    <label
                        htmlFor="discount"
                        className="mb-1.5 block font-medium"
                    >
                        Discount
                    </label>
                    <NumericFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="rounded-md border border-gray-200 w-full text-base"
                        autoComplete="off"
                        name="discount"
                        placeholder="Rp"
                        onChange={handleChange}
                        value={data.discount}
                        min={1}
                        disabled={!data.price ? true : false}
                        max={data.product && data.product.customer_price}
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.discount}
                    />
                </div>
                <div>
                    <label
                        htmlFor="discount_percent"
                        className="mb-1.5 block font-medium"
                    >
                        Percentage
                    </label>
                    <NumericFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        className="rounded-md border border-gray-200 w-full text-base"
                        autoComplete="off"
                        name="discount_percent"
                        placeholder="%"
                        onChange={handleChange}
                        value={data.discount_percent}
                        disabled={!data.price ? true : false}
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.discount_percent}
                    />
                </div>
            </FormGroup>
            <FormGroup
                title="Product Management"
                description="Add your product management info here"
                className={cn(className, "pt-10")}
            >
                {sizes.map((size, index) => (
                    <Fragment key={index}>
                        <div>
                            <Input
                                label="Size"
                                placeholder={size.name}
                                readOnly
                            />
                            <input
                                type="hidden"
                                name="size"
                                onChange={(e) => handleSize(e, size.value)}
                                value={size.value}
                                readOnly
                            />
                            <InputError
                                message={errors && errors.stock}
                                className="col-span-full mt-1"
                            />
                        </div>
                        <div>
                            <Input
                                name="stock"
                                type="number"
                                label="Stock"
                                value={
                                    data.sizes.find(
                                        (selectedSize: any) =>
                                            selectedSize.name === size.value,
                                    )?.stock || ""
                                }
                                onChange={(e) => handleSize(e, size.value)}
                                placeholder="Product stock"
                            />
                            <InputError
                                message={errors[`sizes.${index}.stock`]}
                                className="col-span-full mt-1"
                            />
                            {index === 0 ? (
                                <InputError
                                    message={errors && errors.sizes}
                                    className="col-span-full mt-1"
                                />
                            ) : null}
                        </div>
                    </Fragment>
                ))}
            </FormGroup>
            <FormGroup
                title="Weight"
                description=""
                className={cn(className, "pt-10")}
            >
                <div>
                    <Input
                        type="number"
                        name="weight"
                        value={data.weight}
                        onChange={handleChange}
                        label="Weight (Grams)"
                        placeholder="Product weight"
                    />
                    <InputError
                        message={errors && errors.weight}
                        className="col-span-full mt-1"
                    />
                </div>
            </FormGroup>
        </div>
    );
}
