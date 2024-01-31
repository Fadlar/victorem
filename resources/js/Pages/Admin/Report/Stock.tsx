import App from "@/Layouts/App";
import DateCell from "@/components/ui/date-cell";
import PageHeader from "@/shared/page-header";
import { TrashIcon } from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { PiArrowLineUpBold, PiTrashDuotone, PiXBold } from "react-icons/pi";
import { ActionIcon, Button, Drawer, Text, Title } from "rizzui";

const pageHeader = {
    title: `Stock Report`,
    breadcrumb: [
        {
            href: "#",
            name: "Reports",
        },
        {
            name: "Stock",
        },
    ],
};

export default function Stock({ sizes, filter }: any) {
    const [drawerState, setDrawerState] = useState(false);

    const [data, setData] = useState({
        size: filter.size ?? "",
        start_at: filter.start_at ?? "",
        end_at: filter.end_at ?? "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const clearFilter = () => {
        setData({
            size: "",
            start_at: "",
            end_at: "",
        });
    };

    const filterHandler = (e: any) => {
        e.preventDefault();
        router.get("/reports/stock", { ...data });
        setDrawerState(false);
    };

    const currentDate = new Date().toISOString().split("T")[0];

    const downloadHandler = () => {
        window.location.href = `/reports/stock/export?size=${data.size}&start_at=${data.start_at}&end_at=${data.end_at}`;
    };

    return (
        <App title="Stock Report">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="flex gap-x-3 items-center">
                    <Button type="button" onClick={() => setDrawerState(true)}>
                        Filter
                    </Button>
                    <Button
                        variant="outline"
                        onClick={downloadHandler}
                        className="w-full @lg:w-auto"
                    >
                        <PiArrowLineUpBold className="me-1.5 h-[17px] w-[17px]" />
                        Export
                    </Button>
                </div>
            </PageHeader>

            <Drawer
                size="sm"
                isOpen={drawerState}
                onClose={() => setDrawerState(false)}
                overlayClassName="dark:bg-opacity-20 backdrop-blur-md"
                containerClassName="dark:bg-gray-100"
            >
                <div className="flex h-full flex-col p-5">
                    <div className="-mx-5 mb-6 flex items-center justify-between border-b border-gray-200 px-5 pb-4">
                        <Title as="h5">Stock Filter</Title>
                        <ActionIcon
                            size="sm"
                            rounded="full"
                            variant="text"
                            title={"Close Filter"}
                            onClick={() => setDrawerState(false)}
                        >
                            <PiXBold className="h-4 w-4" />
                        </ActionIcon>
                    </div>
                    <form onSubmit={filterHandler}>
                        <div className="mb-4">
                            <Text
                                as="span"
                                className="mb-2 mt-2.5 block text-sm"
                            >
                                Size
                            </Text>
                            <select
                                name="size"
                                id="size"
                                className="w-full border-gray-300 rounded-md"
                                onChange={handleChange}
                                value={data.size}
                            >
                                <option value="">All Size</option>
                                <option value="s">S (Small)</option>
                                <option value="m">M (Medium)</option>
                                <option value="l">L (Large)</option>
                                <option value="xl">XL (Extra Large)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <Text
                                as="span"
                                className="mb-2 mt-2.5 block text-sm"
                            >
                                From Date
                            </Text>
                            <input
                                name="start_at"
                                type="date"
                                onChange={handleChange}
                                value={data.start_at}
                                className="w-full border-gray-300 rounded-md"
                                max={currentDate}
                            />
                        </div>
                        <div className="mb-4">
                            <Text
                                as="span"
                                className="mb-2 mt-2.5 block text-sm"
                            >
                                To Date
                            </Text>
                            <input
                                name="end_at"
                                type="date"
                                onChange={handleChange}
                                value={data.end_at}
                                className="w-full border-gray-300 rounded-md"
                                max={currentDate}
                                min={data.start_at}
                                disabled={!data.start_at}
                                required={data.start_at ? true : false}
                            />
                        </div>
                        {data.start_at && data.end_at ? (
                            <Button
                                type="button"
                                onClick={clearFilter}
                                variant="flat"
                                size="sm"
                                className="w-full text-gray-700"
                            >
                                <TrashIcon className="w-4 h-4" />
                                <span className="ml-1">Clear</span>
                            </Button>
                        ) : null}
                        <Button
                            size="lg"
                            type="submit"
                            className="mt-5 h-11 w-full text-sm"
                        >
                            Show Results
                        </Button>
                    </form>
                </div>
            </Drawer>
            <div className="relative overflow-x-auto rounded-lg border border-gray-300">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Modified
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sizes.map((size: any, index: number) => (
                            <tr className="bg-white border-b" key={index}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                                >
                                    <span className="block">
                                        {size.product.name}
                                    </span>
                                </th>
                                <td className="px-6 py-4 uppercase">
                                    {size.name}
                                </td>
                                <td className="px-6 py-4">{size.stock}</td>
                                <td className="px-6 py-4">
                                    <DateCell date={size.updated_at} />
                                </td>
                            </tr>
                        ))}
                        {!sizes.length && (
                            <tr>
                                <td className="py-4 text-center" colSpan={4}>
                                    No data.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
