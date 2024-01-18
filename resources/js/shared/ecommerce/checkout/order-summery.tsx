import { Link } from "@inertiajs/react";

import cn from "@/utils/class-names";
import { routes } from "@/config/routes";
import usePrice from "@/hooks/use-price";
import OrderProducts from "./order-products";
import { Button } from "@/components/ui/button";
import { toCurrency } from "@/utils/to-currency";
import { Title, Text } from "@/components/ui/text";
import { useCart } from "@/store/quick-cart/cart.context";
import { NumericFormat } from "react-number-format";
import { useEffect, useState } from "react";

export default function OrderSummery({
    isLoading,
    className,
    order,
    cost,
}: {
    className?: string;
    isLoading?: boolean;
    order: any;
    cost: any;
}) {
    const [total, setTotal] = useState<number>(Number(order.amount));
    useEffect(() => {
        if (cost !== null) {
            setTotal(Number(order.amount) + cost.cost[0]["value"]);
        }
    }, [cost, order.amount, setTotal]);

    return (
        <div
            className={cn(
                "sticky top-24 mt-8 @5xl:col-span-4 @5xl:mt-0 @6xl:col-span-3 2xl:top-28",
                className,
            )}
        >
            <Title as="h4" className="mb-3 font-semibold">
                Your Order
            </Title>
            <div className="rounded-lg border border-gray-200 p-4 @xs:p-6 @5xl:rounded-none @5xl:border-none @5xl:px-0">
                <div className="rounded-tl-lg rounded-tr-lg border-b border-gray-200 pb-4 @xs:pb-6">
                    {order.order_items.map((item: any, key: number) => (
                        <div key={key} className="flex justify-between mb-2">
                            <div>
                                <span className="block font-medium">
                                    {item.product.name}
                                </span>
                                <div className="block text-xs mt-1">
                                    {item.quantity} x{" "}
                                    <NumericFormat
                                        displayType="text"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={0}
                                        prefix="Rp"
                                        value={item.price}
                                    />
                                </div>
                            </div>
                            <div>
                                <NumericFormat
                                    displayType="text"
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={2}
                                    prefix="Rp"
                                    value={item.amount}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4 @xl:pt-6">
                    {/* <OrderProducts
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                        clearItemFromCart={clearItemFromCart}
                        items={items}
                        className="mb-5 border-b border-gray-200 pb-5"
                    /> */}
                    <div className="mb-4 flex items-center justify-between last:mb-0">
                        Subtotal
                        <Text as="span" className="font-medium text-gray-900">
                            <NumericFormat
                                displayType="text"
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                                prefix="Rp"
                                value={order.original_price}
                            />
                        </Text>
                    </div>
                    <div className="mb-4 flex items-center justify-between last:mb-0">
                        Discount
                        <Text as="span" className="font-medium text-gray-900">
                            <NumericFormat
                                displayType="text"
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                                prefix="Rp"
                                value={order.discount}
                            />
                        </Text>
                    </div>
                    <div className="mb-4 flex items-center justify-between last:mb-0">
                        Shipping
                        {cost !== null ? (
                            <Text
                                as="span"
                                className="font-medium text-gray-900"
                            >
                                <NumericFormat
                                    displayType="text"
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={2}
                                    prefix="Rp"
                                    value={cost.cost[0]["value"]}
                                />
                            </Text>
                        ) : (
                            <Text as="span" className="text-gray-600">
                                Calculating...
                            </Text>
                        )}
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 py-4 text-base font-bold text-gray-1000">
                        Total
                        <Text>
                            <NumericFormat
                                displayType="text"
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                                prefix="Rp"
                                value={total}
                            />
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
