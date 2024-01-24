import App from "@/Layouts/App";
import DateCell from "@/components/ui/date-cell";
import ExportButton from "@/shared/export-button";
import PageHeader from "@/shared/page-header";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Drawer } from "rizzui";

const pageHeader = {
    title: `Sales Report`,
    breadcrumb: [
        {
            href: "#",
            name: "Reports",
        },
        {
            name: "Sales",
        },
    ],
};

export default function Report({ products }: any) {
    const [drawerState, setDrawerState] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        if (products.length) {
            const newData = products.map((product: any) => ({
                date: product.order.updated_at,
                name: product.product.name,
                size: product.size,
                quantity: product.quantity,
                total: product.amount,
            }));

            setData(newData);
        }
    }, [products]);

    return (
        <App title="Sales Report">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="flex gap-x-3 items-center">
                    <ExportButton
                        data={data}
                        header="DATE,PRODUCT NAME,SIZE,QUANTITY,TOTAL"
                        fileName="sales-report"
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
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: any, index: number) => (
                            <tr className="bg-white border-b" key={index}>
                                <td className="px-6 py-4">
                                    <DateCell date={product.order.updated_at} />
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                                >
                                    <span className="block">
                                        {product.product.name}
                                    </span>
                                    <span className="block">
                                        <NumericFormat
                                            displayType="text"
                                            prefix="Rp"
                                            value={product.price}
                                            thousandSeparator="."
                                            decimalSeparator=","
                                            decimalScale={2}
                                            fixedDecimalScale
                                        />
                                    </span>
                                </th>
                                <td className="px-6 py-4 uppercase">
                                    {product.size}
                                </td>
                                <td className="px-6 py-4">
                                    {product.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    <NumericFormat
                                        displayType="text"
                                        prefix="Rp"
                                        value={product.price}
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
