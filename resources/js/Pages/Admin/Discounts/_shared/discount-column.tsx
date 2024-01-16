import PencilIcon from "@/components/icons/pencil";
import { ActionIcon } from "@/components/ui/action-icon";
import AvatarCard from "@/components/ui/avatar-card";
import { HeaderCell } from "@/components/ui/table";
import { Text, Title } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import { Asset } from "@/shared/roles-permissions/utils";
import { t } from "@/utils/lang";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { NumericFormat } from "react-number-format";

type Columns = {
    sortConfig?: any;
    onDeleteItem: (id: number) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked?: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
};

export const discountColumn = ({
    sortConfig,
    onDeleteItem,
    onHeaderCellClick,
    onChecked,
}: Columns) => [
    {
        title: <HeaderCell title={t("Product Info")} />,
        dataIndex: "product",
        key: "product",
        width: 150,
        render: (product: any, row: any) => (
            <AvatarCard
                src={Asset(product.images[0].url)}
                name={product.name}
                description={product.discount}
                avatarProps={{
                    name: product.name,
                    size: "lg",
                    className: "rounded-lg",
                }}
            />
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Discount Price")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "discount_price"
                }
            />
        ),
        dataIndex: "discount_price",
        key: "discount_price",
        width: 150,
        onHeaderCell: () => onHeaderCellClick("name"),
        render: (discount_price: number, row: any) => (
            <div>
                <small>
                    <NumericFormat
                        displayType="text"
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix="Rp"
                        value={row.product.price}
                        className="text-[0.7rem] animate-pulse font-medium line-through text-gray-400"
                    />
                </small>
                <Title as="h6" className="!text-sm font-medium text-gray-800">
                    <NumericFormat
                        displayType="text"
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix="Rp"
                        value={row.product.price - discount_price}
                    />
                </Title>
            </div>
        ),
    },
    {
        title: <HeaderCell title={t("Discount")} />,
        dataIndex: "percentage",
        key: "percentage",
        width: 10,
        render: (percentage: number) => (
            <NumericFormat
                displayType="text"
                decimalScale={0}
                fixedDecimalScale={true}
                suffix="%"
                value={percentage}
            />
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Stock")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "stock"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("stock"),
        dataIndex: "stock",
        key: "stock",
        width: 10,
        render: (stock: number, row: any) => <Text>{row.product.stock}</Text>,
    },
    {
        title: <HeaderCell title={t("Discount Period")} />,
        dataIndex: "start_at",
        key: "start_at",
        width: 300,
        render: (start_at: number, row: any) => (
            <div className="flex gap-x-1">
                <div>
                    <span className="block">
                        {format(new Date(start_at), "dd MMM yyyy HH:mm")}
                    </span>
                </div>
                <div>-</div>
                <div>
                    <span className="block">
                        {format(new Date(row.end_at), "dd MMM yyyy HH:mm")}
                    </span>
                </div>
            </div>
        ),
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
                    content={() => "Edit Discount"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.editDiscount(row.id)}>
                        <ActionIcon size="sm" variant="outline">
                            <PencilIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip>
                <DeletePopover
                    title={`Delete the discount`}
                    description={`Are you sure you want to delete this #${row.slug} discount?`}
                    onDelete={() => onDeleteItem(row.id)}
                />
            </div>
        ),
    },
];
