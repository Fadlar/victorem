import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import { useState } from "react";
import { PiPlusBold, PiXBold } from "react-icons/pi";
import { ActionIcon, Button, Modal, Title } from "rizzui";
import CreateProduct from "./create-product";
import { t } from "@/utils/lang";
import { Link } from "@inertiajs/react";

const pageHeader = {
    title: "Products",
    breadcrumb: [
        {
            href: "#",
            name: "E-Commerce",
        },
        {
            href: routes.eCommerce.products,
            name: "Products",
        },
        {
            name: "List",
        },
    ],
};

export default function ProductHeader() {
    const [modalState, setModalState] = useState(false);
    const closeModal = () => {
        setModalState(false);
    };
    return (
        <>
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            >
                <div className="mt-4 flex items-center gap-3 @lg:mt-0">
                    <Link href={routes.eCommerce.createProduct}>
                        <Button
                            tag="span"
                            className="w-full @lg:w-auto cursor-pointer dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                        >
                            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
                            {t("Add Product")}
                        </Button>
                    </Link>
                </div>
            </PageHeader>

            <Modal isOpen={modalState} onClose={() => setModalState(false)}>
                <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
                    <div className="mb-7 flex items-center justify-between">
                        <Title as="h4" className="font-semibold">
                            {t("Add Product")}
                        </Title>
                        <ActionIcon
                            size="sm"
                            variant="text"
                            onClick={() => setModalState(!modalState)}
                        >
                            <PiXBold className="h-auto w-5" />
                        </ActionIcon>
                    </div>
                    <CreateProduct closeModal={closeModal} />
                </div>
            </Modal>
        </>
    );
}
