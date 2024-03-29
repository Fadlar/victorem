import { Title, Text } from "@/components/ui/text";
import { ActionIcon } from "@/components/ui/action-icon";
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import TrashIcon from "@/components/icons/trash";
import { PiTrashFill } from "react-icons/pi";
import { t } from "@/utils/lang";

type DeletePopoverProps = {
    title: string;
    description: string;
    onDelete: () => void;
};

const DeletePopover = ({
    title,
    description,
    onDelete,
}: DeletePopoverProps) => {
    return (
        <Popover
            placement="left"
            className="z-50"
            content={({ setOpen }) => (
                <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
                    <Title
                        as="h6"
                        className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center"
                    >
                        <PiTrashFill className="me-1 h-[17px] w-[17px]" />{" "}
                        {t(title)}
                    </Title>
                    <Text className="mb-2 leading-relaxed text-gray-500">
                        {t(description)}
                    </Text>
                    <div className="flex items-center justify-end">
                        <Button
                            size="sm"
                            className="me-1.5 h-7"
                            onClick={onDelete}
                        >
                            {t("Yes")}
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7"
                            onClick={() => setOpen(false)}
                        >
                            {t("No")}
                        </Button>
                    </div>
                </div>
            )}
        >
            <ActionIcon
                size="sm"
                variant="outline"
                aria-label={"Delete Item"}
                className="cursor-pointer hover:!border-gray-900 hover:text-gray-700"
            >
                <TrashIcon className="h-4 w-4" />
            </ActionIcon>
        </Popover>
    );
};

const DeletePopover2 = ({
    title,
    description,
    onDelete,
}: DeletePopoverProps) => {
    return (
        <Popover
            placement="left"
            className="z-50"
            content={({ setOpen }) => (
                <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
                    <Title
                        as="h6"
                        className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center"
                    >
                        <PiTrashFill className="me-1 h-[17px] w-[17px]" />{" "}
                        {t(title)}
                    </Title>
                    <Text className="mb-2 leading-relaxed text-gray-500">
                        {t(description)}
                    </Text>
                    <div className="flex items-center justify-end">
                        <Button
                            size="sm"
                            className="me-1.5 h-7"
                            onClick={onDelete}
                        >
                            {t("Yes")}
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7"
                            onClick={() => setOpen(false)}
                        >
                            {t("No")}
                        </Button>
                    </div>
                </div>
            )}
        >
            <Button type="button" variant="outline">
                <TrashIcon className="h-4 w-4" />
            </Button>
        </Popover>
    );
};

DeletePopover.Button = DeletePopover2;

export default DeletePopover;
