import InputError from "@/Components/InputError";
import FormGroup from "@/shared/form-group";
import cn from "@/utils/class-names";
import { NumericFormat } from "react-number-format";
import { Input } from "rizzui";

interface PricingInventoryProps {
    className?: string;
    data: any;
    errors: any;
    handleChange: (e: { target: { name: string; value: string } }) => void;
}

export default function PricingInventory({
    className,
    data,
    errors,
    handleChange,
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
                        htmlFor="customer_price"
                        className="mb-1 block text-gray-600 font-medium"
                    >
                        Customer Price
                    </label>
                    <NumericFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="rounded-md border border-gray-200 w-full text-base"
                        autoComplete="off"
                        name="customer_price"
                        placeholder="Rp"
                        onChange={handleChange}
                        value={data.customer_price}
                        min={1}
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.customer_price}
                    />
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="agent_price"
                        className="mb-1 block text-gray-600 font-medium"
                    >
                        Agent Price
                    </label>
                    <NumericFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="rounded-md border border-gray-200 w-full text-base"
                        autoComplete="off"
                        name="agent_price"
                        placeholder="Rp"
                        onChange={handleChange}
                        value={data.agent_price}
                        min={1}
                    />
                    <InputError
                        className="mt-1"
                        message={errors && errors.agent_price}
                    />
                </div>
            </FormGroup>
            <FormGroup
                title="Product Management"
                description="Add your product management info here"
                className={cn(className, "pt-10")}
            >
                <div>
                    <Input
                        name="stock"
                        type="number"
                        label="Product Stock"
                        value={data.stock}
                        onChange={handleChange}
                        placeholder="Enter product stock"
                    />
                    <InputError
                        message={errors && errors.stock}
                        className="col-span-full mt-1"
                    />
                </div>
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
