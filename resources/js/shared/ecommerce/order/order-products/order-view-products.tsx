import Table, { HeaderCell } from "@/components/ui/table";
import { useCart } from "@/store/quick-cart/cart.context";
import { Title, Text } from "@/components/ui/text";
import { toCurrency } from "@/utils/to-currency";
import { CartItem } from "@/types";
import { NumericFormat } from "react-number-format";
import { Asset } from "@/shared/roles-permissions/utils";

const columns = [
    {
        title: <HeaderCell title="Product" />,
        dataIndex: "product",
        key: "product",
        width: 250,
        render: (_: any, row: any) => (
            <div className="flex items-center">
                <div className="relative aspect-square w-12 overflow-hidden rounded-lg">
                    <img
                        alt={row.product.name}
                        src={Asset(row.product.images[0].url)}
                        sizes="(max-width: 768px) 100vw"
                        className="object-cover"
                    />
                </div>
                <div className="ms-4">
                    <Title as="h6" className="!text-sm font-medium">
                        {row.product.name}
                    </Title>
                </div>
            </div>
        ),
    },
    {
        title: <HeaderCell title="Product Price" align="right" />,
        dataIndex: "price",
        key: "price",
        width: 200,
        render: (price: string) => (
            <Text className="text-end text-sm">
                <NumericFormat
                    displayType="text"
                    value={price}
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                    prefix="Rp"
                />
            </Text>
        ),
    },
    {
        title: <HeaderCell title="Quantity" align="center" />,
        dataIndex: "quantity",
        key: "quantity",
        width: 150,
        render: (quantity: number) => (
            <Text className="text-center text-sm font-semibold">
                {quantity}
            </Text>
        ),
    },

    {
        title: <HeaderCell title="Price" align="right" />,
        dataIndex: "amount",
        key: "amount",
        width: 200,
        render: (amount: number, row: CartItem) => (
            <Text className="text-end text-sm">
                <NumericFormat
                    displayType="text"
                    prefix="Rp"
                    value={amount}
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                />
            </Text>
        ),
    },
];

export default function OrderViewProducts({ items }: any) {
    return (
        <Table
            data={items}
            // @ts-ignore
            columns={columns}
            className="text-sm"
            variant="minimal"
            rowKey={(record) => record.id}
            scroll={{ x: 800 }}
        />
    );
}
