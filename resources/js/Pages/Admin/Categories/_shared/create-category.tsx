import FileUpload from "@/Components/FileUpload";
import InputError from "@/Components/InputError";
import { routes } from "@/config/routes";
import { t } from "@/utils/lang";
import notification from "@/utils/notification";
import { router, useForm } from "@inertiajs/react";
import { Button, Input, Textarea } from "rizzui";

export default function CreateCategory({
    closeModal,
}: {
    closeModal: () => void;
}) {
    const { data, setData, errors, post, processing } = useForm({
        name: "",
        description: "",
        icon: null as null | File,
    });

    const handleChange = (e: { target: { value: string; name: string } }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleImage = (files: File[]) => {
        setData({ ...data, icon: files[0] });
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(routes.eCommerce.categories, {
            onSuccess: () => {
                notification("Category has been created.", "success");
                closeModal();
                router.visit(routes.eCommerce.categories, {
                    only: ["categories"],
                });
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
                    label={t("Category Name")}
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    placeholder={t("Category name")}
                    error={errors.name}
                />
                <Textarea
                    label={t("Description")}
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                    placeholder={t("Description")}
                    error={errors.description}
                />
                <div className="mb-5">
                    <FileUpload
                        label="Category Icon"
                        multiple={false}
                        placeholder="PNG, JPG, JPEG up to 2MB"
                        onChangeFile={handleImage}
                    />
                    <InputError message={errors.icon} />
                </div>
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
                    {t("Create Category")}
                </Button>
            </div>
        </form>
    );
}
