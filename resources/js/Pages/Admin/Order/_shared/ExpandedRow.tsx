import { PiXBold } from "react-icons/pi";
import { Title, Text } from "@/components/ui/text";
import { Asset } from "@/shared/roles-permissions/utils";
import { NumericFormat } from "react-number-format";

export default function ExpandedOrderRow({ record }: any) {
    if (record?.order_items?.length === 0) {
        return <Text>No product available</Text>;
    }
    return (
        <div className="grid grid-cols-1 divide-y bg-gray-0 px-3.5 dark:bg-gray-50">
            {record?.order_items.map((order: any) => (
                <article
                    key={record.id + order.product.name}
                    className="flex items-center justify-between py-6 first-of-type:pt-2.5 last-of-type:pb-2.5"
                >
                    <div className="flex items-start">
                        <div className="relative me-4 aspect-[80/60] w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <img
                                className=" object-cover"
                                src={Asset(order.product.images[0].url)}
                                alt={order.product.name}
                            />
                        </div>
                        <header>
                            <Title
                                as="h4"
                                className="mb-0.5 text-sm font-medium"
                            >
                                {order.product.name}
                            </Title>
                            <Text className="mb-1 text-gray-500">
                                {order.product.categories[0].name}
                            </Text>
                            <Text className="text-xs text-gray-500">
                                Unit Price:{" "}
                                <NumericFormat
                                    displayType="text"
                                    value={order.price - order.discount}
                                    prefix="Rp"
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={2}
                                />
                            </Text>
                            <Text className="text-xs text-gray-500">
                                Size:{" "}
                                <span className="uppercase">{order.size}</span>
                            </Text>
                        </header>
                    </div>
                    <div className="flex w-full max-w-xs items-center justify-between gap-4">
                        <div className="flex items-center">
                            <PiXBold size={13} className="me-1 text-gray-500" />{" "}
                            <Text
                                as="span"
                                className="font-medium text-gray-900 dark:text-gray-700"
                            >
                                {order.quantity}
                            </Text>
                        </div>
                        <Text className="font-medium text-gray-900 dark:text-gray-700">
                            <NumericFormat
                                displayType="text"
                                value={order.amount}
                                prefix="Rp"
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                            />
                        </Text>
                    </div>
                </article>
            ))}
        </div>
    );
}
