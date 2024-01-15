import PencilIcon from "@/components/icons/pencil";
import { ActionIcon } from "@/components/ui/action-icon";
import { HeaderCell } from "@/components/ui/table";
import { Text, Title } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import { Asset } from "@/shared/roles-permissions/utils";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { Link, router } from "@inertiajs/react";
import { PiMinus } from "react-icons/pi";
import { NumericFormat } from "react-number-format";
import { Avatar, Switch } from "rizzui";
import { Product } from "../Product";

type Columns = {
    sortConfig?: any;
    onDeleteItem: (id: string) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked?: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
};

export const productColumn = ({
    sortConfig,
    onDeleteItem,
    onHeaderCellClick,
    onChecked,
}: Columns) => [
    {
        title: <HeaderCell title={t("Product Info")} />,
        dataIndex: "icon",
        key: "icon",
        width: 150,
        render: (icon: any, row: any) => (
            <div className="flex gap-x-2 items-center">
                <Avatar
                    src={Asset(row.images[0].url)}
                    name={row.name}
                    className="rounded-md"
                />
                <div>
                    <Title
                        as="h6"
                        className="font-medium text-gray-800 !text-sm"
                    >
                        {row.name}
                    </Title>
                </div>
            </div>
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Price")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "price"
                }
            />
        ),
        dataIndex: "price",
        key: "price",
        width: 100,
        onHeaderCell: () => onHeaderCellClick("price"),
        render: (price: number) => (
            <Text className="!text-sm">
                <NumericFormat
                    prefix="Rp"
                    displayType="text"
                    value={price}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                />
            </Text>
        ),
    },
    {
        title: <HeaderCell title={t("Discount")} />,
        dataIndex: "discount",
        key: "discount",
        width: 100,
        onHeaderCell: () => onHeaderCellClick("discount"),
        render: (discount: number, row: any) => (
            <Text className="!text-sm">
                {discount !== null ? (
                    <NumericFormat
                        prefix="Rp"
                        displayType="text"
                        value={row.price}
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="line-through text-rose-500 block"
                    />
                ) : null}
                {discount === null ? <PiMinus /> : null}
                {discount !== null ? (
                    <NumericFormat
                        prefix="Rp"
                        displayType="text"
                        value={row.price - discount}
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        className="block"
                    />
                ) : null}
                {row.discount_percent !== null ? (
                    <NumericFormat
                        suffix="%"
                        displayType="text"
                        value={row.discount_percent
                            .toString()
                            .replace(/\.00$/, "")}
                        thousandSeparator={true}
                        className="block"
                    />
                ) : null}
            </Text>
        ),
    },
    {
        title: <HeaderCell title={t("Stock")} />,
        onHeaderCell: () => onHeaderCellClick("stock"),
        dataIndex: "Stock",
        key: "stock",
        width: 5,
        render: (stock: number, row: Product) => (
            <div>
                {row.sizes.map((size) => (
                    <div key={size.id} className="flex items-center gap-x-2">
                        <span className="uppercase block">{size.name} :</span>
                        <span className="block font-medium">{size.stock}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: <Text>Active</Text>,
        dataIndex: "status",
        key: "status",
        width: 15,
        render: (status: string, row: any) => {
            const isChecked = status === "publish" ? true : false;
            const message = isChecked
                ? "Product has been disabled."
                : "Product has been activated.";
            const handleStatus = () => {
                router.put(
                    routes.eCommerce.changeProductStatus(row.slug),
                    {},
                    {
                        onSuccess: () => {
                            notification(message, "success");
                            router.visit(routes.eCommerce.products, {
                                only: ["product"],
                            });
                        },
                    },
                );
            };
            return <Switch checked={isChecked} onChange={handleStatus} />;
        },
    },
    {
        title: <></>,
        dataIndex: "action",
        key: "action",
        width: 100,
        render: (_: string, row: any) => (
            <div className="flex items-center justify-end gap-3 pe-4">
                <Tooltip
                    size="sm"
                    content={() => "Edit Product"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.editProduct(row.slug)}>
                        <ActionIcon size="sm" variant="outline">
                            <PencilIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip>
                <DeletePopover
                    title={`Delete the product`}
                    description={`Are you sure you want to delete this #${row.slug} product?`}
                    onDelete={() => onDeleteItem(row.slug)}
                />
            </div>
        ),
    },
];
