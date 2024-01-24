import EyeIcon from "@/components/icons/eye";
import PencilIcon from "@/components/icons/pencil";
import { ActionIcon } from "@/components/ui/action-icon";
import TableAvatar from "@/components/ui/avatar-card";
import { Badge } from "@/components/ui/badge";
import DateCell from "@/components/ui/date-cell";
import { HeaderCell } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import notification from "@/utils/notification";
import { Link, router } from "@inertiajs/react";
import { NumericFormat } from "react-number-format";
import { Button } from "rizzui";

function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
        case "active":
            return (
                <div className="flex items-center">
                    <Badge color="success" renderAsDot />
                    <Text className="ms-2 font-medium text-green-dark">
                        Active
                    </Text>
                </div>
            );
        case "inactive":
            return (
                <div className="flex items-center">
                    <Badge color="danger" renderAsDot />
                    <Text className="ms-2 font-medium text-red-dark">
                        Inactive
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
        title: <HeaderCell title="Name" />,
        dataIndex: "name",
        key: "name",
        width: 300,
        hidden: "customer",
        render: (name: string, row: any) => (
            <TableAvatar
                src={row.user_detail?.avatar}
                name={name}
                description={row.email.toLowerCase()}
            />
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
                title="Email Verified"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "email_verified_at"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("email_verified_at"),
        dataIndex: "Email Verified",
        key: "email_verified_at",
        width: 200,
        render: (_: any, row: { email_verified_at: Date }) => (
            <>
                {row.email_verified_at !== null ? (
                    <DateCell date={row.email_verified_at} />
                ) : (
                    "-"
                )}
            </>
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
                    <Link href={routes.eCommerce.editUser(row.id)}>
                        <ActionIcon
                            tag="span"
                            size="sm"
                            variant="outline"
                            className="hover:text-gray-700"
                        >
                            <PencilIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip>
                <Tooltip
                    size="sm"
                    content={() => "View Order"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.showUser(row.id)}>
                        <ActionIcon
                            tag="span"
                            size="sm"
                            variant="outline"
                            className="hover:text-gray-700"
                        >
                            <EyeIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip> */}
                {row.status === "active" ? (
                    <Link
                        href={routes.eCommerce.showUser(row.id)}
                        method="patch"
                        onSuccess={() => {
                            notification("User has been updated", "success");
                            router.visit(routes.eCommerce.users, {
                                only: ["users"],
                            });
                        }}
                    >
                        <Button type="button" variant="outline" size="sm">
                            Deactivate
                        </Button>
                    </Link>
                ) : (
                    <Link
                        href={routes.eCommerce.showUser(row.id)}
                        method="patch"
                        onSuccess={() => {
                            notification("User has been updated", "success");
                            router.visit(routes.eCommerce.users, {
                                only: ["users"],
                            });
                        }}
                    >
                        <Button type="button" variant="outline" size="sm">
                            Activate
                        </Button>
                    </Link>
                )}
                <DeletePopover
                    title={`Delete the order`}
                    description={`Are you sure you want to delete this ${row.email} user?`}
                    onDelete={() => onDeleteItem(row.id)}
                />
            </div>
        ),
    },
];
