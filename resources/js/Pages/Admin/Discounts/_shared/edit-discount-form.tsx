import InputError from "@/Components/InputError";
import FormFooter from "@/components/form-footer";
import { DatePicker } from "@/components/ui/datepicker";
import FormGroup from "@/shared/form-group";
import { Asset } from "@/shared/roles-permissions/utils";
import cn from "@/utils/class-names";
import { t } from "@/utils/lang";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { NumericFormat } from "react-number-format";
import { Avatar, Text } from "rizzui";
import { Product } from "../../Products/Product";
import { Discount } from "../Discount";

interface EditProductFormProps {
    className?: string;
    products: Product[];
    handleSubmit: (e: { preventDefault: () => void }) => void;
    data: any;
    errors: any;
    isLoading: boolean;
    handleChange: (e: { target: { name: string; value: string } }) => void;
    handleSelect: (value: any) => void;
    setData: any;
    buttonTitle?: string;
    discount: Discount;
}

export default function EditDiscountForm({
    className,
    products,
    handleSubmit,
    data,
    errors,
    isLoading,
    handleChange,
    handleSelect,
    setData,
    buttonTitle = "Update Discount",
    discount,
}: EditProductFormProps) {
    const productFound = Object.keys(data.product).length ? true : false;

    return (
        <div className="@container">
            <form
                onSubmit={handleSubmit}
                className={cn("[&_label.block>span]:font-medium", className)}
            >
                <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11 min-h-screen">
                    <div id="summary" className="pt-7 @2xl:pt-9 @3xl:pt-11">
                        <FormGroup
                            title="Discount Info"
                            description="Edit yout discount information from here"
                        >
                            <div className="col-span-full">
                                <Listbox
                                    value={data.product}
                                    onChange={handleSelect}
                                >
                                    <div className="relative mt-1">
                                        <label
                                            htmlFor="product"
                                            className="font-medium block mb-1"
                                        >
                                            {t("Select Product")}
                                        </label>
                                        <Listbox.Button
                                            className={cn(
                                                "relative w-full border rounded-md bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm",
                                                discount && discount.id
                                                    ? "cursor-not-allowed"
                                                    : "cursor-default",
                                            )}
                                            aria-disabled={
                                                discount && discount.id
                                                    ? true
                                                    : false
                                            }
                                        >
                                            {productFound ? (
                                                <div className="flex gap-x-2 items-center">
                                                    <Avatar
                                                        name={data.product.name}
                                                        src={Asset(
                                                            data.product
                                                                .images[0].url,
                                                        )}
                                                        className="rounded-md flex-shrink-0"
                                                    />
                                                    <div>
                                                        <Text
                                                            className={cn(
                                                                "text-gray-800 font-medium",
                                                            )}
                                                        >
                                                            {data.product.name}
                                                        </Text>
                                                        <span className="-mt-1 block">
                                                            <NumericFormat
                                                                displayType="text"
                                                                value={
                                                                    data.product
                                                                        .price
                                                                }
                                                                prefix="Rp"
                                                                thousandSeparator=","
                                                                decimalScale={2}
                                                                fixedDecimalScale
                                                                className="text-xs text-gray-700"
                                                            />
                                                            <Text className="text-xs text-gray-600 block">
                                                                Stock:{" "}
                                                                {
                                                                    data.product
                                                                        .stock
                                                                }
                                                            </Text>
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span>
                                                    {t("Select Product")}
                                                </span>
                                            )}
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <HiChevronUpDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 z-50 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                {products.map((product) => (
                                                    <Listbox.Option
                                                        key={product.id}
                                                        className={({
                                                            active,
                                                            selected,
                                                        }) =>
                                                            `relative ${
                                                                product.discount
                                                                    ? "cursor-not-allowed"
                                                                    : "cursor-default"
                                                            } select-none py-2 px-4 ${
                                                                active ||
                                                                selected
                                                                    ? "bg-gray-100"
                                                                    : "text-gray-900"
                                                            }`
                                                        }
                                                        value={product}
                                                        disabled={
                                                            product.discount
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <div className="flex gap-x-2 items-center">
                                                                    <Avatar
                                                                        name={
                                                                            product.name
                                                                        }
                                                                        src={Asset(
                                                                            product
                                                                                .images[0]
                                                                                .url,
                                                                        )}
                                                                        className="rounded-md flex-shrink-0"
                                                                    />
                                                                    <div>
                                                                        <Text
                                                                            className={cn(
                                                                                "text-gray-800",
                                                                                selected &&
                                                                                    "font-medium",
                                                                            )}
                                                                        >
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </Text>
                                                                        <span className="-mt-1 block">
                                                                            <NumericFormat
                                                                                displayType="text"
                                                                                value={
                                                                                    product.price
                                                                                }
                                                                                prefix="Rp"
                                                                                thousandSeparator=","
                                                                                decimalScale={
                                                                                    2
                                                                                }
                                                                                fixedDecimalScale
                                                                                className="text-xs text-gray-700"
                                                                            />
                                                                            <Text className="text-xs text-gray-600 block">
                                                                                Stock:{" "}
                                                                                {
                                                                                    product.stock
                                                                                }
                                                                            </Text>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                                {!products.length ? (
                                                    <Listbox.Option
                                                        value=""
                                                        className="relative cursor-not-allowed select-none py-2 px-4 text-gray-700 text-center"
                                                        disabled
                                                    >
                                                        {t("Product not found")}
                                                    </Listbox.Option>
                                                ) : null}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                                <InputError
                                    className="mt-1"
                                    message={errors && errors.product}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="discount_price"
                                    className="mb-1.5 block font-medium"
                                >
                                    {t("Discount Price")}
                                </label>
                                <NumericFormat
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    className="rounded-md border border-gray-200 w-full text-base"
                                    autoComplete="off"
                                    name="discount_price"
                                    placeholder="Rp"
                                    onChange={handleChange}
                                    value={data.discount_price}
                                    min={1}
                                    disabled={!productFound}
                                    max={data.product && data.product.price}
                                />
                                <InputError
                                    className="mt-1"
                                    message={errors && errors.discount_price}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="discount_price"
                                    className="mb-1.5 block font-medium"
                                >
                                    {t("Percentage")}
                                </label>
                                <NumericFormat
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    className="rounded-md border border-gray-200 w-full text-base"
                                    autoComplete="off"
                                    name="percentage"
                                    placeholder="%"
                                    onChange={handleChange}
                                    value={data.percentage}
                                    disabled={!productFound}
                                />
                                <InputError
                                    className="mt-1"
                                    message={errors && errors.percentage}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="start_at"
                                    className="font-medium block mb-1"
                                >
                                    {t("Start At")}
                                </label>
                                <DatePicker
                                    selected={data.start_at}
                                    onChange={(date: Date) =>
                                        setData("start_at", date)
                                    }
                                    name="start_at"
                                    dateFormat="d MMMM yyyy, h:mm aa"
                                    placeholderText="Select Date & Time"
                                    showTimeSelect
                                />
                                <InputError
                                    className="mt-1"
                                    message={errors && errors.start_at}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="end_at"
                                    className="font-medium block mb-1"
                                >
                                    {t("End At")}
                                </label>
                                <DatePicker
                                    selected={data.end_at}
                                    onChange={(date: Date) =>
                                        setData("end_at", date)
                                    }
                                    name="end_at"
                                    dateFormat="d MMMM yyyy, h:mm aa"
                                    placeholderText="Select Date & Time"
                                    showTimeSelect
                                />
                                <InputError
                                    className="mt-1"
                                    message={errors && errors.end_at}
                                />
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <FormFooter isLoading={isLoading} submitBtnText={buttonTitle} />
            </form>
        </div>
    );
}
