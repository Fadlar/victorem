import App from "@/Layouts/App";
import DateCell from "@/components/ui/date-cell";
import ExportButton from "@/shared/export-button";
import PageHeader from "@/shared/page-header";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Drawer } from "rizzui";

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

export default function Stock({ sizes }: any) {
    const [drawerState, setDrawerState] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        if (sizes.length) {
            const newData = sizes.map((size: any) => ({
                name: size.product.name,
                size: size.name,
                stock: size.stock,
            }));

            setData(newData);
        }
    }, [sizes]);

    return (
        <App title="Stock Report">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="flex gap-x-3 items-center">
                    <ExportButton
                        data={data}
                        header="PRODUCT NAME,SIZE,STOCK"
                        fileName="stock-report"
                    />
                    {/* <Button type="button" onClick={() => setDrawerState(true)}>
                        Filter
                    </Button> */}
                </div>
            </PageHeader>
            <Drawer
                isOpen={drawerState}
                size="sm"
                onClose={() => setDrawerState(false)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dolorum, quis quidem deserunt hic rerum, quae quaerat voluptas
                quod laboriosam nihil laudantium explicabo cumque eaque corrupti
                tenetur, nulla aliquam ut.
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
