import App from "@/Layouts/App";
import { routes } from "@/config/routes";
import DeletePopover from "@/shared/delete-popover";
import PageHeader from "@/shared/page-header";
import PrintButton from "@/shared/print-button";
import notification from "@/utils/notification";
import { router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { PiXBold } from "react-icons/pi";
import { ActionIcon, Button, Input, Modal, Textarea, Title } from "rizzui";
import OrderView from "./_shared/OrderView";

const pageHeader = {
    title: `Detail Order`,
    breadcrumb: [
        {
            href: routes.eCommerce.orders,
            name: "Orders",
        },
        {
            name: "Detail",
        },
    ],
};

export default function ShowOrder({ order }: any) {
    const { data, setData, patch, processing } = useForm({
        status: order.status ?? "",
        resi: order.resi ?? "",
        reason_cancelled: order.reason_cancelled ?? "",
    });

    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
        setModalState(false);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    const onDeleteItem = () => {
        router.delete(routes.eCommerce.orderDetails(order.id), {
            onSuccess: () =>
                router.visit(routes.eCommerce.orders, { only: ["orders"] }),
        });
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        patch(routes.eCommerce.orderDetails(order.id), {
            onSuccess: () => {
                notification("Order status has been updated.", "success");
                setModalState(false);
            },
        });
    };

    return (
        <App title={`Detail #${order.order_id}`}>
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="flex items-center gap-x-2">
                    <Button type="button" onClick={() => setModalState(true)}>
                        Update Status
                    </Button>
                    {order.status === "finish" ? (
                        <a
                            href={`/order/${order.order_id}/invoice-download`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <PrintButton />
                        </a>
                    ) : null}

                    <DeletePopover.Button
                        title={`Delete the order`}
                        description={`Are you sure you want to delete this #${order.order_id} order?`}
                        onDelete={() => onDeleteItem()}
                    />
                </div>
            </PageHeader>
            <OrderView order={order} />
            <Modal
                isOpen={modalState}
                size="DEFAULT"
                onClose={() => setModalState(false)}
            >
                <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
                    <div className="mb-7 flex items-center justify-between">
                        <Title as="h4" className="font-semibold">
                            Change Status
                        </Title>
                        <ActionIcon
                            size="sm"
                            variant="text"
                            onClick={() => setModalState(!modalState)}
                        >
                            <PiXBold className="h-auto w-5" />
                        </ActionIcon>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="mb-2">
                            <label
                                htmlFor="status"
                                className="font-medium block text-gray-700 mb-2"
                            >
                                Status
                            </label>
                            <select
                                name="status"
                                id="status"
                                className="w-full border rounded-md border-gray-300"
                                value={data.status}
                                onChange={handleChange}
                            >
                                <option value="payment">Payment Pending</option>
                                <option value="payment_success">
                                    Payment Success
                                </option>
                                <option value="packaging">Packaging</option>
                                <option value="shipped">Shipped</option>
                                <option value="finish">Completed</option>
                                <option value="refund">Refunded</option>
                                <option value="canceled">Cancelled</option>
                            </select>
                        </div>
                        {data.status === "shipped" && (
                            <div className="mb-2">
                                <Input
                                    label="Resi"
                                    name="resi"
                                    placeholder="Enter a resi"
                                    value={data.resi}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {data.status === "canceled" && (
                            <div className="mb-2">
                                <Textarea
                                    label="Reason"
                                    name="reason_cancelled"
                                    placeholder="Enter a reason"
                                    value={data.reason_cancelled}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="sticky mt-4 bottom-0 z-40 flex items-center justify-end gap-3 bg-gray-0/10 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col">
                            <Button
                                variant="outline"
                                className="w-full @xl:w-auto"
                                onClick={() => closeModal()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                isLoading={processing}
                                className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </App>
    );
}
