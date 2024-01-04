import { Asset } from "@/shared/roles-permissions/utils";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { PiTrashBold } from "react-icons/pi";
import { ActionIcon } from "rizzui";

interface ProductImageListProps {
    items: any[];
    onReorder: (items: any[]) => void;
    onDelete: (id: number) => void;
}

export default function ProductImageList({
    items,
    onReorder,
    onDelete,
}: ProductImageListProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [images, setImages] = useState(items);

    useEffect(() => setIsMounted(true), []);
    useEffect(() => setImages(items), [items]);

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(images);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        const startIndex = Math.min(
            result.source.index,
            result.destination.index,
        );
        const endIndex = Math.max(
            result.source.index,
            result.destination.index,
        );

        const udpatedImages = items.slice(startIndex, endIndex + 1);

        setImages(items);

        const bulkUpdateData = udpatedImages.map((image) => ({
            id: image.id,
            position: items.findIndex((item) => item.id === image.id),
        }));

        onReorder(bulkUpdateData);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="images">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2 overflow-hidden"
                    >
                        {images.map((image, index) => (
                            <Draggable
                                key={image.url}
                                draggableId={image.url}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        className="flex min-h-[58px] w-full items-center rounded-xl border border-gray-200 px-3"
                                    >
                                        <a
                                            {...provided.dragHandleProps}
                                            className="mr-3 cursor-pointer"
                                        >
                                            <BsGripVertical />
                                        </a>
                                        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                                            <img
                                                src={Asset(image.url)}
                                                className=" object-contain"
                                                alt={"image" + image.position}
                                                sizes="(max-width: 768px) 100vw"
                                            />
                                        </div>
                                        <div className="truncate px-2.5">
                                            {image.url.split("/")[1]}
                                        </div>
                                        <ActionIcon
                                            onClick={() => onDelete(image.id)}
                                            size="sm"
                                            variant="flat"
                                            color="danger"
                                            className="ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20"
                                        >
                                            <PiTrashBold className="w-6" />
                                        </ActionIcon>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
