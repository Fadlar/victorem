import ControlledTable from "@/components/controlled-table";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import React, { useCallback, useMemo, useState } from "react";
import { discountColumn } from "./discount-column";
import { router } from "@inertiajs/react";
import { routes } from "@/config/routes";
import notification from "@/utils/notification";
import { Discount } from "../Discount";

const filterState = {
    price: ["", ""],
    createdAt: [null, null],
    status: "",
};

export default function DiscountTable({ data = [] }: { data: Discount[] }) {
    const [pageSize, setPageSize] = useState(10);

    const onHeaderCellClick = (value: string) => ({
        onClick: () => {
            handleSort(value);
        },
    });

    const onDeleteItem = useCallback((id: number) => {
        router.delete(routes.eCommerce.udDiscount(id), {
            preserveScroll: true,
            onSuccess: () => {
                notification("Discount has been deleted.", "success");
                router.visit(routes.eCommerce.discounts, {
                    only: ["discounts"],
                });
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        isLoading,
        isFiltered,
        tableData,
        currentPage,
        totalItems,
        handlePaginate,
        filters,
        updateFilter,
        searchTerm,
        handleSearch,
        sortConfig,
        handleSort,
        selectedRowKeys,
        setSelectedRowKeys,
        handleRowSelect,
        handleSelectAll,
        handleDelete,
        handleReset,
    } = useTable(data, pageSize, filterState);

    const columns = useMemo(
        () =>
            discountColumn({
                sortConfig,
                onHeaderCellClick,
                onDeleteItem,
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            selectedRowKeys,
            onHeaderCellClick,
            sortConfig.key,
            sortConfig.direction,
            onDeleteItem,
            handleRowSelect,
            handleSelectAll,
        ],
    );

    const { visibleColumns, checkedColumns, setCheckedColumns } =
        useColumn(columns);

    return (
        <ControlledTable
            variant="modern"
            isLoading={isLoading}
            showLoadingText={true}
            data={tableData}
            // @ts-ignore
            columns={visibleColumns}
            paginatorOptions={{
                pageSize,
                setPageSize,
                total: totalItems,
                current: currentPage,
                onChange: (page: number) => handlePaginate(page),
            }}
            filterOptions={{
                searchTerm,
                onSearchClear: () => {
                    handleSearch("");
                },
                onSearchChange: (event) => {
                    handleSearch(event.target.value);
                },
                hasSearched: isFiltered,
                columns,
                checkedColumns,
                setCheckedColumns,
            }}
            className="overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
        />
    );
}
