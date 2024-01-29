import LithiumLayout from "@/layouts/lithium/lithium-layout";
import OrderViewProducts from "@/shared/ecommerce/order/order-products/order-view-products";
import PrintButton from "@/shared/print-button";
import { Asset } from "@/shared/roles-permissions/utils";
import cn from "@/utils/class-names";
import { Head } from "@inertiajs/react";
import clsx from "clsx";
import { format } from "date-fns";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { NumericFormat } from "react-number-format";
import { Avatar, Badge, Button, Text, Title } from "rizzui";

function WidgetCard({
    title,
    className,
    children,
    childrenWrapperClass,
}: {
    title?: string;
    className?: string;
    children: React.ReactNode;
    childrenWrapperClass?: string;
}) {
    return (
        <div className={className}>
            <Title
                as="h3"
                className="mb-3.5 text-base font-semibold @5xl:mb-5 4xl:text-lg"
            >
                {title}
            </Title>
            <div
                className={cn(
                    "rounded-lg border border-gray-200 px-5 @sm:px-7 @5xl:rounded-xl",
                    childrenWrapperClass,
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default function Invoice({ invoice }: any) {
    const [orderStatus, setOrderStatus] = useState([
        { id: 1, label: "Order Pending", value: "pending" },
        { id: 2, label: "Payment Pending", value: "payment" },
        { id: 3, label: "Payment Success", value: "payment_success" },
        { id: 4, label: "Order Packaging", value: "packaging" },
        { id: 5, label: "Order Shipped", value: "shipped" },
        { id: 6, label: "Order Complete", value: "finish" },
        // { id: 7, label: "Refund", value: "refund" },
        // {id: 8, label: 'Order Canceled', value: 'canceled'},
    ]);

    const currentOrderStatus = orderStatus.find(
        (status) => status.value === invoice.status,
    );

    useEffect(() => {
        if (invoice.status === "refund") {
            const newStatus = { id: 7, label: "Refund", value: "refund" };
            setOrderStatus([...orderStatus, newStatus]);
        }
    }, [invoice.status]);

    return (
        <LithiumLayout>
            <Head>
                <title>Invoice - Victorem</title>
            </Head>
            <div className="@container">
                <div>
                    <div className="border-b pt-5 pb-5 flex justify-between items-center">
                        <h2 className="text-gray-700 font-lexend">
                            Order #{invoice.order_id}
                        </h2>
                        {invoice.status === "finish" ? (
                            <a
                                href={`/order/${invoice.order_id}/invoice-download`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <PrintButton />
                            </a>
                        ) : null}
                    </div>
                    <div className="py-5 flex items-center text-gray-800 font-medium border-b">
                        <div className="border-r pr-4">
                            {format(invoice.created_at, "MMMM dd, yyyy")} at{" "}
                            {format(invoice.created_at, "hh:mm a")}
                        </div>
                        <div className="px-4 border-r">
                            {invoice.order_items.length} Items
                        </div>
                        <div className="px-4 border-r">
                            Total{" "}
                            <NumericFormat
                                displayType="text"
                                prefix="Rp"
                                decimalScale={0}
                                decimalSeparator=","
                                thousandSeparator="."
                                value={invoice.amount}
                            />
                        </div>
                        <div className="px-4">
                            <Badge
                                className={clsx(
                                    "capitalize font-medium",
                                    (invoice.status === "payment_success" ||
                                        invoice.status === "finish") &&
                                        "bg-green-lighter text-green-dark",
                                    (invoice.status === "pending" ||
                                        invoice.status === "cancelled") &&
                                        "bg-red-lighter text-red-dark",
                                    invoice.status === "packaging" &&
                                        "bg-secondary-lighter text-secondary-dark",
                                    (invoice.status === "refund" ||
                                        invoice.status === "payment") &&
                                        "bg-orange-lighter text-orange-dark",
                                    invoice.status === "shipped" &&
                                        "bg-primary-lighter text-primary-dark",
                                )}
                            >
                                {invoice.status === "payment_success"
                                    ? invoice.status.replace(/_/g, " ")
                                    : invoice.status}
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="items-start pt-10 @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
                    <div className="space-y-7 @5xl:col-span-8 @5xl:space-y-10 @6xl:col-span-7">
                        {invoice.resi !== null ? (
                            <div className="pb-2">
                                <span className="block font-medium text-gray-700">
                                    Resi:{" "}
                                    <span className="font-semibold text-lg">
                                        {invoice.resi}
                                    </span>
                                </span>
                            </div>
                        ) : null}
                        {invoice.reason_cancelled !== null &&
                        invoice.status === "canceled" ? (
                            <div className="pb-2">
                                <span className="block mb-2 font-medium text-gray-700">
                                    Reason
                                </span>
                                <div className="border rounded-xl p-5">
                                    {invoice.reason_cancelled}
                                </div>
                            </div>
                        ) : null}
                        {invoice.notes !== null ? (
                            <div className="pb-2">
                                <span className="block mb-2 font-medium text-gray-700">
                                    Notes
                                </span>
                                <div className="border rounded-xl p-5">
                                    {invoice.notes}
                                </div>
                            </div>
                        ) : null}

                        <div className="pb-5">
                            <OrderViewProducts items={invoice.order_items} />
                            <div className="border-t border-gray-200 pt-7 @5xl:mt-3">
                                <div className="ms-auto max-w-lg space-y-6">
                                    <div className="flex justify-between font-medium">
                                        Subtotal{" "}
                                        <span>
                                            <NumericFormat
                                                displayType="text"
                                                prefix="Rp"
                                                value={invoice.original_price}
                                                decimalScale={2}
                                                thousandSeparator="."
                                                decimalSeparator=","
                                                fixedDecimalScale
                                            />
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                        Product discount{" "}
                                        <span>
                                            <NumericFormat
                                                displayType="text"
                                                prefix="Rp"
                                                value={invoice.discount}
                                                decimalScale={2}
                                                thousandSeparator="."
                                                decimalSeparator=","
                                                fixedDecimalScale
                                            />
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                        Cost{" "}
                                        <span>
                                            <NumericFormat
                                                displayType="text"
                                                prefix="Rp"
                                                value={invoice.cost}
                                                decimalScale={2}
                                                thousandSeparator="."
                                                decimalSeparator=","
                                                fixedDecimalScale
                                            />
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-5 text-base font-semibold">
                                        Total{" "}
                                        <span>
                                            <NumericFormat
                                                displayType="text"
                                                prefix="Rp"
                                                value={invoice.amount}
                                                decimalScale={2}
                                                thousandSeparator="."
                                                decimalSeparator=","
                                                fixedDecimalScale
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-7 pt-8 @container @5xl:col-span-4 @5xl:space-y-10 @5xl:pt-0 @6xl:col-span-3">
                        <WidgetCard
                            title="Order Status"
                            childrenWrapperClass="py-5 @5xl:py-8 flex"
                        >
                            <div className="ms-2 w-full space-y-7 border-s-2 border-gray-100">
                                {invoice.status === "cancelled" ? (
                                    <div
                                        className={cn(
                                            "relative ps-6 text-sm font-medium before:absolute before:-start-[9px] before:top-px before:h-5 before:w-5 before:-translate-x-px before:rounded-full before:bg-red before:content-[''] after:absolute after:-start-px after:top-5  after:h-10 after:w-0.5  after:content-[''] last:after:hidden",
                                        )}
                                    >
                                        <span className="absolute -start-1.5 top-1 text-white">
                                            <PiCheckBold className="h-auto w-3" />
                                        </span>
                                        Cancelled
                                    </div>
                                ) : (
                                    <>
                                        {orderStatus.map((item) => (
                                            <div
                                                key={item.id}
                                                className={cn(
                                                    "relative ps-6 text-sm font-medium before:absolute before:-start-[9px] before:top-px before:h-5 before:w-5 before:-translate-x-px before:rounded-full before:bg-gray-100 before:content-[''] after:absolute after:-start-px after:top-5  after:h-10 after:w-0.5  after:content-[''] last:after:hidden",
                                                    currentOrderStatus &&
                                                        currentOrderStatus.id >
                                                            item.id
                                                        ? "before:bg-primary after:bg-primary"
                                                        : "after:hidden",
                                                    invoice.status ===
                                                        item.value &&
                                                        "before:bg-primary",
                                                )}
                                            >
                                                {currentOrderStatus &&
                                                currentOrderStatus.id >=
                                                    item.id ? (
                                                    <span className="absolute -start-1.5 top-1 text-white">
                                                        <PiCheckBold className="h-auto w-3" />
                                                    </span>
                                                ) : null}

                                                {item.label}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </WidgetCard>
                        <WidgetCard
                            title="Customer Details"
                            childrenWrapperClass="py-5 @5xl:py-8 flex"
                        >
                            <div className="relative aspect-square h-16 w-16 shrink-0 @5xl:h-20 @5xl:w-20">
                                <Avatar
                                    size="xl"
                                    name={invoice.user.name}
                                    src={Asset(
                                        invoice.user?.user_detail?.avatar,
                                    )}
                                />
                            </div>
                            <div className="ps-4 @5xl:ps-6">
                                <Title
                                    as="h3"
                                    className="mb-2.5 text-base font-semibold @7xl:text-lg"
                                >
                                    {invoice.user.name}
                                </Title>
                                <Text
                                    as="p"
                                    className="mb-2 break-all last:mb-0"
                                >
                                    {invoice.user.email}
                                </Text>
                                <Text as="p" className="mb-2 last:mb-0">
                                    {invoice.phone_number}
                                </Text>
                            </div>
                        </WidgetCard>
                        <WidgetCard
                            title="Shipping Address"
                            childrenWrapperClass="@5xl:py-6 py-5"
                        >
                            <Title
                                as="h3"
                                className="mb-2.5 text-base font-semibold @7xl:text-lg"
                            >
                                {invoice.first_name} {invoice.last_name}
                            </Title>
                            <Text
                                as="p"
                                className="mb-2 leading-loose last:mb-0"
                            >
                                {invoice.address}
                            </Text>
                        </WidgetCard>
                    </div>
                </div>
            </div>
        </LithiumLayout>
    );
}

const InvoiceTemplate = () => {
    const handleDownload = () => {
        // Membuat instance dari jsPDF
        const pdf = new jsPDF();

        // Menambahkan konten ke PDF (sesuaikan dengan kebutuhan Anda)
        pdf.text("Invoice", 80, 10);
        pdf.text("-------------------------", 80, 15);
        pdf.text("Item 1: $10", 20, 30);
        pdf.text("Item 2: $20", 20, 40);
        pdf.text("-------------------------", 20, 50);
        pdf.text("Total: $30", 20, 60);

        // Simpan atau tampilkan PDF
        pdf.save("invoice.pdf"); // Simpan sebagai file
        // atau
        // pdf.output('dataurlnewwindow'); // Tampilkan di jendela baru
    };

    return <Button type="button">Download Invoice (PDF)</Button>;
};
