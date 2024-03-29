import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useModal } from "./use-modal";
import { usePage } from "@inertiajs/react";

export default function GlobalModal() {
    const { isOpen, view, closeModal, customSize } = useModal();
    const pathname = usePage().url;
    useEffect(() => {
        closeModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            customSize={customSize}
            overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
            containerClassName="dark:bg-gray-100"
        >
            {view}
        </Modal>
    );
}
