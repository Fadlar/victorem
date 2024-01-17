import { PhoneNumber } from "@/components/ui/phone-input";
import LithiumLayout from "@/layouts/lithium/lithium-layout";
import OrderSummery from "@/shared/ecommerce/checkout/order-summery";
import cn from "@/utils/class-names";
import { router } from "@inertiajs/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { NumericFormat } from "react-number-format";
import { Button, Input, Title } from "rizzui";

export default function Checkout({ className, order }: any) {
    const [errors, setErrors] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingC, setIsLoadingC] = useState(false);
    const [isLoadingS, setIsLoadingS] = useState(false);
    const [isLoadingCost, setIsLoadingCost] = useState(false);
    const [provinces, setProvinces] = useState<any>(null);
    const [cities, setCities] = useState<any>(null);
    const [subdistricts, setSubdistricts] = useState<any>(null);
    const [shippings, setShippings] = useState<any>(null);

    const [shippingMethod, setShippingMethod] = useState<any>(null);
    const [data, setData] = useState<any>({
        province_id: 1,
        city_id: null,
        subdistrict_id: null,
        postal_code: "",
        phone_number: "",
        cost: null,
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleNumberPhone = (value: any) => {
        setData({ ...data, phone_number: value });
    };

    const handleShippingMethod = (cost: any) => {
        setShippingMethod(cost);
        setData({ ...data, cost: cost });
    };

    useEffect(() => {
        const getProvince = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("/location/province");
                setProvinces(response.data.rajaongkir.results);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getProvince();
    }, []);

    useEffect(() => {
        const getCity = async () => {
            try {
                setIsLoadingC(true);
                const response = await axios.get(
                    `/location/city/${data.province_id}`,
                );
                setCities(response.data.rajaongkir.results);
            } catch (error) {
                console.error("Error fetching cities:", error);
            } finally {
                setIsLoadingC(false);
            }
        };

        getCity();
    }, [data.province_id]);

    useEffect(() => {
        const getSubdistrict = async () => {
            try {
                setIsLoadingS(true);
                const response = await axios.get(
                    `/location/subdistrict/${data.city_id}`,
                );
                setSubdistricts(response.data.rajaongkir.results);
            } catch (error) {
                console.error("Error fetching subdistrict:", error);
            } finally {
                setIsLoadingS(false);
            }
        };

        getSubdistrict();
    }, [data.city_id]);

    useEffect(() => {
        const getCost = async () => {
            if (data.subdistrict_id !== null) {
                try {
                    setIsLoadingCost(true);
                    const response = await axios.get(
                        `/location/cost/${data.subdistrict_id}?weight=${order.weight}`,
                    );
                    setShippings(response.data.rajaongkir.results);
                } catch (error) {
                    console.error("Error fetching subdistrict:", error);
                } finally {
                    setIsLoadingCost(false);
                }
            }
        };

        getCost();
    }, [data.subdistrict_id]);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.post(
            "/order",
            {
                ...data,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    //
                },
                onError: (error) => setErrors(error),
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
            },
        );
    };

    return (
        <LithiumLayout>
            <form
                onSubmit={handleSubmit}
                className={cn(
                    "isomorphic-form isomorphic-form mx-auto flex w-full max-w-[1536px] flex-grow flex-col @container [&_label.block>span]:font-medium",
                    className,
                )}
            >
                <div className="items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
                    <div className="gap-4 border-gray-200 @container @5xl:col-span-8 @5xl:border-e @5xl:pb-12 @5xl:pe-7 @6xl:col-span-7 @7xl:pe-12">
                        <div className="flex flex-col gap-4 @xs:gap-7 @5xl:gap-9">
                            <div
                                className={cn(
                                    "grid grid-cols-2 gap-3 @lg:gap-4 @2xl:gap-5 py-5",
                                    className,
                                )}
                            >
                                <Title
                                    as="h3"
                                    className="col-span-full font-semibold"
                                >
                                    Delivery
                                </Title>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="country"
                                        className="font-medium block mb-1.5"
                                    >
                                        Country
                                    </label>
                                    <select
                                        name="country"
                                        id="country"
                                        className="border border-gray-300 rounded-md w-full"
                                    >
                                        <option value="indonesia">
                                            Indonesia
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <Input
                                        name="first_name"
                                        label="First Name"
                                        onChange={handleChange}
                                        value={data.first_name}
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="last_name"
                                        label="Last Name"
                                        onChange={handleChange}
                                        value={data.last_name}
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="province"
                                        className="font-medium flex items-center gap-x-2 mb-1.5"
                                    >
                                        Province{" "}
                                        {isLoading ? (
                                            <span className="animate-spin">
                                                <PiSpinner />
                                            </span>
                                        ) : null}
                                    </label>

                                    <select
                                        name="province_id"
                                        id="province"
                                        className="border border-gray-300 rounded-md w-full"
                                        onChange={handleChange}
                                        value={data.province_id}
                                        disabled={isLoading}
                                        required
                                    >
                                        {provinces !== null ? (
                                            <>
                                                {provinces.map(
                                                    (
                                                        province: any,
                                                        index: number,
                                                    ) => (
                                                        <option
                                                            value={
                                                                province.province_id
                                                            }
                                                            key={index}
                                                        >
                                                            {province.province}
                                                        </option>
                                                    ),
                                                )}
                                            </>
                                        ) : null}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="font-medium flex items-center gap-x-2 mb-1.5"
                                    >
                                        City{" "}
                                        {isLoadingC ? (
                                            <span className="animate-spin">
                                                <PiSpinner />
                                            </span>
                                        ) : null}
                                    </label>
                                    <select
                                        name="city_id"
                                        id="city"
                                        className="border border-gray-300 rounded-md w-full"
                                        onChange={handleChange}
                                        value={data.city_id}
                                        disabled={isLoadingC || cities === null}
                                        required
                                    >
                                        {cities !== null ? (
                                            <>
                                                {cities.map(
                                                    (
                                                        city: any,
                                                        index: number,
                                                    ) => (
                                                        <option
                                                            value={city.city_id}
                                                            key={index}
                                                        >
                                                            {city.type}{" "}
                                                            {city.city_name}
                                                        </option>
                                                    ),
                                                )}
                                            </>
                                        ) : null}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subdistrict"
                                        className="font-medium flex items-center gap-x-2 mb-1.5"
                                    >
                                        Subdistrict{" "}
                                        {isLoadingS ? (
                                            <span className="animate-spin">
                                                <PiSpinner />
                                            </span>
                                        ) : null}
                                    </label>
                                    <select
                                        name="subdistrict_id"
                                        id="subdistrict"
                                        className="border border-gray-300 rounded-md w-full"
                                        onChange={handleChange}
                                        value={data.subdistrict_id}
                                        disabled={
                                            isLoadingS ||
                                            subdistricts === null ||
                                            data.city_id === null
                                        }
                                        required
                                    >
                                        {subdistricts !== null ? (
                                            <>
                                                {subdistricts.map(
                                                    (
                                                        subdistrict: any,
                                                        index: number,
                                                    ) => (
                                                        <option
                                                            value={
                                                                subdistrict.subdistrict_id
                                                            }
                                                            key={index}
                                                        >
                                                            {
                                                                subdistrict.subdistrict_name
                                                            }
                                                        </option>
                                                    ),
                                                )}
                                            </>
                                        ) : null}
                                    </select>
                                </div>
                                <div>
                                    <Input
                                        label="Postal Code"
                                        placeholder="Enter your postal code"
                                        name="postal_code"
                                        onChange={handleChange}
                                        value={data.postal_code}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <PhoneNumber
                                        label="Phone Number"
                                        country="id"
                                        value={data.phone_number}
                                        onChange={handleNumberPhone}
                                    />
                                </div>
                                <Title
                                    as="h3"
                                    className="col-span-full font-semibold mt-5"
                                >
                                    Shipping Method
                                </Title>
                                {shippings !== null ? (
                                    <div className="col-span-full">
                                        {shippings.map(
                                            (shipping: any, index: any) => (
                                                <Fragment key={index}>
                                                    {shipping.costs.map(
                                                        (
                                                            cost: any,
                                                            i: number,
                                                        ) => (
                                                            <div
                                                                onClick={() =>
                                                                    handleShippingMethod(
                                                                        cost,
                                                                    )
                                                                }
                                                                className={cn(
                                                                    "rounded-md mb-4 p-5 flex justify-between",
                                                                    cost.service ===
                                                                        shippingMethod?.service
                                                                        ? "border border-gray-700 bg-gray-100"
                                                                        : "border border-gray-300 bg-gray-50",
                                                                )}
                                                                key={i}
                                                            >
                                                                <div>
                                                                    <span className="block font-medium">
                                                                        <span className="uppercase">
                                                                            {
                                                                                shipping.code
                                                                            }
                                                                        </span>{" "}
                                                                        -{" "}
                                                                        {
                                                                            cost.service
                                                                        }{" "}
                                                                        (
                                                                        {
                                                                            cost.description
                                                                        }
                                                                        )
                                                                    </span>
                                                                    <span className="block">
                                                                        {cost
                                                                            .cost[0]
                                                                            .etd !==
                                                                        "" ? (
                                                                            <>
                                                                                {
                                                                                    cost
                                                                                        .cost[0]
                                                                                        .etd
                                                                                }{" "}
                                                                                days
                                                                            </>
                                                                        ) : null}
                                                                    </span>
                                                                </div>
                                                                <div className="font-medium  text-gray-700">
                                                                    <NumericFormat
                                                                        prefix="Rp"
                                                                        thousandSeparator="."
                                                                        decimalSeparator=","
                                                                        displayType="text"
                                                                        value={
                                                                            cost
                                                                                .cost[0]
                                                                                .value
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </Fragment>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <div className="rounded-md p-5 w-full text-gray-600 bg-gray-100 col-span-full">
                                        Enter your shipping address to view
                                        available shipping methods.
                                    </div>
                                )}
                                <Title
                                    as="h3"
                                    className="col-span-full font-semibold mt-5"
                                >
                                    Payment
                                </Title>
                                <div className="col-span-full">
                                    <div>
                                        <div className="border bg-sky-50 rounded-t-md p-5">
                                            <div className="font-medium text-gray-900">
                                                Payment via Midtrans
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center border bg-gray-50 rounded-b-md h-52">
                                            <div className="text-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="-252.3 356.1 163 80.9"
                                                    className="text-gray-500 w-32 h-24 inline"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={2}
                                                        d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
                                                    />
                                                    <circle
                                                        cx="-227.8"
                                                        cy="361.9"
                                                        r="1.8"
                                                        fill="currentColor"
                                                    />
                                                    <circle
                                                        cx="-222.2"
                                                        cy="361.9"
                                                        r="1.8"
                                                        fill="currentColor"
                                                    />
                                                    <circle
                                                        cx="-216.6"
                                                        cy="361.9"
                                                        r="1.8"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={2}
                                                        d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
                                                    />
                                                </svg>
                                                <div className="max-w-sm text-gray-800">
                                                    After clicking “Pay now”,
                                                    you will be redirected to
                                                    Payments via Midtrans to
                                                    complete your purchase
                                                    securely.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    className="col-span-full mt-3 w-full text-base @md:h-12 dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                                >
                                    Pay now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <OrderSummery isLoading={isLoading} />
                </div>
            </form>
        </LithiumLayout>
    );
}
