import { HeaderCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Title, Text } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { ActionIcon } from "@/components/ui/action-icon";
import { routes } from "@/config/routes";
import EyeIcon from "@/components/icons/eye";
import PencilIcon from "@/components/icons/pencil";
import TableAvatar from "@/components/ui/avatar-card";
import DateCell from "@/components/ui/date-cell";
import { Link } from "@inertiajs/react";
import { NumericFormat } from "react-number-format";
import DeletePopover from "@/shared/delete-popover";

function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
        case "payment":
            return (
                <div className="flex items-center">
                    <Badge color="warning" renderAsDot />
                    <Text className="ms-2 font-medium text-orange-dark">
                        Payment Pending
                    </Text>
                </div>
            );
        case "payment_success":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-green-dark">
                        Payment Success
                    </Text>
                </div>
            );
        case "packaging":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-secondary-dark">
                        Packaging
                    </Text>
                </div>
            );
        case "shipped":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-green-dark">
                        Shipped
                    </Text>
                </div>
            );
        case "finish":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-green-dark">
                        Complete
                    </Text>
                </div>
            );
        case "refund":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-orange-dark">
                        Refund
                    </Text>
                </div>
            );
        case "cancelled":
            return (
                <div className="flex items-center">
                    <Badge color="danger" renderAsDot />
                    <Text className="ms-2 font-medium text-red-dark">
                        Cancelled
                    </Text>
                </div>
            );
        default:
            return (
                <div className="flex items-center">
                    <Badge renderAsDot className="bg-gray-400" />
                    <Text className="ms-2 font-medium text-gray-600">
                        {status}
                    </Text>
                </div>
            );
    }
}

type Columns = {
    sortConfig?: any;
    onDeleteItem: (id: string) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked?: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
};

export const getColumns = ({
    sortConfig,
    onDeleteItem,
    onHeaderCellClick,
}: Columns) => [
    {
        title: <HeaderCell title="Order ID" />,
        dataIndex: "order id",
        key: "order_id",
        width: 90,
        render: (_: any, row: any) => <Text>#{row.order_id}</Text>,
    },
    {
        title: <HeaderCell title="Customer" />,
        dataIndex: "customer",
        key: "customer",
        width: 300,
        hidden: "customer",
        render: (_: any, row: any) => (
            <TableAvatar
                src={row.user.user_detail?.avatar}
                name={row.user.name}
                description={row.user.email.toLowerCase()}
            />
        ),
    },
    {
        title: <HeaderCell title="Items" />,
        dataIndex: "items",
        key: "items",
        width: 150,
        render: (_: any, row: any) => (
            <Text className="font-medium text-gray-700">
                {row.order_items.length}
            </Text>
        ),
    },
    {
        title: (
            <HeaderCell
                title="Price"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "amount"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("price"),
        dataIndex: "price",
        key: "amount",
        width: 150,
        render: (_: any, row: any) => (
            <Text className="font-medium text-gray-700">
                <NumericFormat
                    displayType="text"
                    value={row.amount}
                    prefix="Rp"
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                />
            </Text>
        ),
    },
    {
        title: (
            <HeaderCell
                title="Created"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "created_at"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("created_at"),
        dataIndex: "created at",
        key: "created_at",
        width: 200,
        render: (_: any, row: { created_at: Date }) => (
            <DateCell date={row.created_at} />
        ),
    },
    {
        title: (
            <HeaderCell
                title="Modified"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "updated_at"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("updated_at"),
        dataIndex: "updated at",
        key: "updated_at",
        width: 200,
        render: (_: any, row: { updated_at: Date }) => (
            <DateCell date={row.updated_at} />
        ),
    },
    {
        title: <HeaderCell title="Status" />,
        dataIndex: "status",
        key: "status",
        width: 140,
        render: (value: string) => getStatusBadge(value),
    },
    {
        // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
        title: <HeaderCell title="Actions" className="opacity-0" />,
        dataIndex: "action",
        key: "action",
        width: 130,
        render: (_: string, row: any) => (
            <div className="flex items-center justify-end gap-3 pe-4">
                {/* <Tooltip
                    size="sm"
                    content={() => "Edit Order"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.editOrder(row.id)}>
                        <ActionIcon
                            tag="span"
                            size="sm"
                            variant="outline"
                            className="hover:text-gray-700"
                        >
                            <PencilIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip> */}
                <Tooltip
                    size="sm"
                    content={() => "View Order"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.orderDetails(row.id)}>
                        <ActionIcon
                            tag="span"
                            size="sm"
                            variant="outline"
                            className="hover:text-gray-700"
                        >
                            <EyeIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip>
                {/* <DeletePopover
                    title={`Delete the order`}
                    description={`Are you sure you want to delete this #${row.order_id} order?`}
                    onDelete={() => onDeleteItem(row.id)}
                /> */}
            </div>
        ),
    },
];
