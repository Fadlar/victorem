import PencilIcon from "@/components/icons/pencil";
import { ActionIcon } from "@/components/ui/action-icon";
import { HeaderCell } from "@/components/ui/table";
import { Text, Title } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import { Asset } from "@/shared/roles-permissions/utils";
import { t } from "@/utils/lang";
import { Link } from "@inertiajs/react";
import { Product } from "../../Products/Product";

type Columns = {
    sortConfig?: any;
    onDeleteItem: (id: string) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked?: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
};

export const categoryColumn = ({
    sortConfig,
    onDeleteItem,
    onHeaderCellClick,
    onChecked,
}: Columns) => [
    {
        title: <HeaderCell title={t("Icon")} />,
        dataIndex: "icon",
        key: "icon",
        width: 100,
        render: (icon: any, row: any) => (
            <figure className="relative aspect-square w-12 overflow-hidden rounded-lg bg-gray-100">
                <img
                    alt={row.name ? row.name : "no image"}
                    src={Asset(icon)}
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover"
                />
            </figure>
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Category Name")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "name"
                }
            />
        ),
        dataIndex: "name",
        key: "name",
        width: 200,
        onHeaderCell: () => onHeaderCellClick("name"),
        render: (name: string) => (
            <Title as="h6" className="!text-sm font-medium">
                {name}
            </Title>
        ),
    },
    {
        title: <HeaderCell title={t("Description")} />,
        dataIndex: "description",
        key: "description",
        width: 250,
        render: (description: string) => (
            <Text className="truncate !text-sm ">{description}</Text>
        ),
    },
    {
        title: (
            <HeaderCell
                title={t("Slug")}
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "slug"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("slug"),
        dataIndex: "slug",
        key: "slug",
        width: 200,
        render: (slug: string) => <Text>{slug}</Text>,
    },
    {
        title: (
            <HeaderCell
                title={t("Products")}
                align="center"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "products"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("products"),
        dataIndex: "products",
        key: "products",
        width: 120,
        render: (products: Product[]) => (
            <div className="text-center">{products.length}</div>
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
                    content={() => "Edit Category"}
                    placement="top"
                    color="invert"
                >
                    <Link href={routes.eCommerce.editCategory(row.slug)}>
                        <ActionIcon size="sm" variant="outline">
                            <PencilIcon className="h-4 w-4" />
                        </ActionIcon>
                    </Link>
                </Tooltip>
                <DeletePopover
                    title={`Delete the category`}
                    description={`Are you sure you want to delete this #${row.slug} category?`}
                    onDelete={() => onDeleteItem(row.slug)}
                />
            </div>
        ),
    },
];
