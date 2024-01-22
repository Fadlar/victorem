import React from "react";
import { PiTrashDuotone } from "react-icons/pi";
import DateFiled from "@/components/controlled-table/date-field";
import PriceField from "@/components/controlled-table/price-field";
import StatusField from "@/components/controlled-table/status-field";
import { Title, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDateRangeStateValues } from "@/utils/get-formatted-date";
import { useMedia } from "@/hooks/use-media";

const statusOptions = [
    {
        value: "payment",
        name: "payment",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">
                    Payment Pending
                </Text>
            </div>
        ),
    },
    {
        value: "payment_success",
        name: "payment_success",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">
                    Payment Success
                </Text>
            </div>
        ),
    },
    {
        value: "packaging",
        name: "packaging",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">
                    Packanging
                </Text>
            </div>
        ),
    },
    {
        value: "shipped",
        name: "shipped",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">Shipped</Text>
            </div>
        ),
    },
    {
        value: "finish",
        name: "finish",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">
                    Completed
                </Text>
            </div>
        ),
    },
    {
        value: "refund",
        name: "refund",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">Refunded</Text>
            </div>
        ),
    },
    {
        value: "canceled",
        name: "canceled",
        label: (
            <div className="flex items-center">
                <Badge color="DEFAULT" renderAsDot />
                <Text className="ms-2 font-medium text-gray-800">
                    Cancelled
                </Text>
            </div>
        ),
    },
];
type FilterElementProps = {
    isFiltered: boolean;
    filters: { [key: string]: any };
    updateFilter: (columnId: string, filterValue: string | any[]) => void;
    handleReset: () => void;
};

export default function FilterElement({
    isFiltered,
    filters,
    updateFilter,
    handleReset,
}: FilterElementProps) {
    const isMediumScreen = useMedia("(max-width: 1860px)", false);
    return (
        <>
            <PriceField
                value={filters["price"]}
                onChange={(data) => updateFilter("price", data)}
                label={"Price"}
            />
            <DateFiled
                selected={getDateRangeStateValues(filters["created_at"][0])}
                startDate={getDateRangeStateValues(filters["created_at"][0])}
                endDate={getDateRangeStateValues(filters["created_at"][1])}
                onChange={(date: any) => {
                    updateFilter("created_at", date);
                }}
                placeholderText="Select created date"
                {...(isMediumScreen && {
                    inputProps: {
                        label: "Created Date",
                        labelClassName: "font-medium text-gray-700",
                    },
                })}
            />
            <DateFiled
                selected={getDateRangeStateValues(filters["updated_at"][0])}
                startDate={getDateRangeStateValues(filters["updated_at"][0])}
                endDate={getDateRangeStateValues(filters["updated_at"][1])}
                onChange={(date: any) => {
                    updateFilter("updated_at", date);
                }}
                placeholderText="Select modified date"
                {...(isMediumScreen && {
                    inputProps: {
                        label: "Due Date",
                        labelClassName: "font-medium text-gray-700",
                    },
                })}
            />
            <StatusField
                options={statusOptions}
                value={filters["status"]}
                onChange={(value: string) => {
                    updateFilter("status", value);
                }}
                getOptionValue={(option) => option.value}
                displayValue={(selected: string) =>
                    statusOptions.find((option) => option.value === selected)
                        ?.label ?? selected
                }
                {...(isMediumScreen && {
                    label: "Status",
                    labelClassName: "font-medium text-gray-700",
                })}
            />
            {isFiltered ? (
                <Button
                    size="sm"
                    onClick={() => {
                        handleReset();
                    }}
                    className="h-8 bg-gray-200/70"
                    variant="flat"
                >
                    <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" />{" "}
                    Clear
                </Button>
            ) : null}
        </>
    );
}
