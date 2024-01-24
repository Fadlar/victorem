import { orderData } from "@/data/order-data";
import { getWidgetColumns } from "@/shared/ecommerce/order/order-list/columns";
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";

export default function RecentOrder({
    className,
    data,
}: {
    className?: string;
    data: any;
}) {
    return (
        <BasicTableWidget
            title={"Recent Order"}
            data={data}
            // @ts-ignore
            getColumns={getWidgetColumns}
            className={className}
            enablePagination
            noGutter
            searchPlaceholder="Search order..."
            variant="modern"
        />
    );
}
