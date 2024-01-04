import { CustomTooltip } from "@/components/charts/custom-tooltip";
import PencilIcon from "@/components/icons/pencil";
import TicketIcon from "@/components/icons/ticket";
import { ActionIcon } from "@/components/ui/action-icon";
import AvatarCard from "@/components/ui/avatar-card";
import { HeaderCell } from "@/components/ui/table";
import { Text, Title } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import { Asset } from "@/shared/roles-permissions/utils";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { BsTicket } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { Avatar, Switch } from "rizzui";

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
            <div className="flex gap-x-2">
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
                    {row.discount !== null ? (
                        <Tooltip
                            size="sm"
                            content={() => "Have a discount"}
                            placement="top"
                            color="invert"
                        >
                            <div className="cursor-pointer inline">
                                <TicketIcon className="w-5 h-5 inline" />
                            </div>
                        </Tooltip>
                    ) : null}
                </div>
            </div>
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Customer Price")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "customer_price"
                }
            />
        ),
        dataIndex: "customer_price",
        key: "customer_price",
        width: 100,
        onHeaderCell: () => onHeaderCellClick("customer_price"),
        render: (customer_price: number) => (
            <Text className="!text-sm">
                <NumericFormat
                    prefix="Rp"
                    displayType="text"
                    value={customer_price}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                />
            </Text>
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Agent Price")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "agent_price"
                }
            />
        ),
        dataIndex: "agent_price",
        key: "agent_price",
        width: 100,
        onHeaderCell: () => onHeaderCellClick("agent_price"),
        render: (agent_price: number) => (
            <Text className="!text-sm">
                <NumericFormat
                    prefix="Rp"
                    displayType="text"
                    value={agent_price}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                />
            </Text>
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
        width: 5,
        render: (stock: number) => <Text>{stock}</Text>,
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
