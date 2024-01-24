import ControlledTable from "@/components/controlled-table";
import { routes } from "@/config/routes";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import notification from "@/utils/notification";
import { router } from "@inertiajs/react";
import { lazy, useCallback, useMemo, useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { ActionIcon } from "rizzui";
import { getColumns } from "./Column";

const FilterElement = lazy(
    () => import("@/Pages/Admin/Order/_shared/FilterElement"),
);

const filterState = {
    price: ["", ""],
    created_at: [null, null],
    updated_at: [null, null],
    status: "",
};

function CustomExpandIcon(props: any) {
    return (
        <ActionIcon
            size="sm"
            variant="outline"
            rounded="full"
            className="expand-row-icon ms-2"
            onClick={(e) => {
                props.onExpand(props.record, e);
            }}
        >
            {props.expanded ? (
                <PiCaretUpBold className="h-3.5 w-3.5" />
            ) : (
                <PiCaretDownBold className="h-3.5 w-3.5" />
            )}
        </ActionIcon>
    );
}

export default function UsersTable({ data = [] }: { data: any[] }) {
    const [pageSize, setPageSize] = useState(10);

    const onHeaderCellClick = (value: string) => ({
        onClick: () => {
            handleSort(value);
        },
    });

    const onDeleteItem = useCallback((id: string) => {
        router.delete(routes.eCommerce.showUser(id), {
            preserveScroll: true,
            onSuccess: () => {
                notification("User has been deleted.", "success");
                router.visit(routes.eCommerce.users, { only: ["users"] });
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
        handleDelete,
        handleReset,
    } = useTable(data, pageSize, filterState);

    const columns = useMemo(
        () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem],
    );

    const { visibleColumns, checkedColumns, setCheckedColumns } =
        useColumn(columns);

    return (
        <ControlledTable
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
                hideIndex: 1,
                columns,
                checkedColumns,
                setCheckedColumns,
                enableDrawerFilter: true,
            }}
            // filterElement={
            //     <FilterElement
            //         isFiltered={isFiltered}
            //         filters={filters}
            //         updateFilter={updateFilter}
            //         handleReset={handleReset}
            //     />
            // }
            className={
                "overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
            }
        />
    );
}
