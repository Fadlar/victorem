import { routes } from "@/config/routes";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { useForm } from "@inertiajs/react";
import { Button, Input } from "rizzui";

export default function CreateProduct({
    closeModal,
}: {
    closeModal: () => void;
}) {
    const { data, setData, errors, post, processing } = useForm({
        name: "",
    });

    const handleChange = (e: { target: { value: string; name: string } }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(routes.eCommerce.products, {
            onSuccess: () => {
                notification("Product has been created.", "success");
                closeModal();
            },
        });
    };

    return (
        <form
            onSubmit={submit}
            className="isomorphic-form flex flex-grow flex-col @container"
        >
            <div className="grid grid-cols-1 gap-3">
                <Input
                    label={t("Product Name")}
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    placeholder={t("Product name")}
                    className="mb-5"
                    error={errors.name}
                />
            </div>
            <div className="sticky bottom-0 z-40 flex items-center justify-end gap-3 bg-gray-0/10 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col">
                <Button
                    variant="outline"
                    className="w-full @xl:w-auto"
                    onClick={() => closeModal()}
                >
                    {t("Cancel")}
                </Button>
                <Button
                    type="submit"
                    isLoading={processing}
                    className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                >
                    {t("Next")}
                </Button>
            </div>
        </form>
    );
}
