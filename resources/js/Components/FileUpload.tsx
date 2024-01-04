import UploadIcon from "@/components/shape/upload";
import { t } from "@/utils/lang";
import React, { Fragment, useEffect, useState } from "react";
import {
    PiFile,
    PiFileCsv,
    PiFileDoc,
    PiFilePdf,
    PiFileXls,
    PiFileZip,
    PiTrashBold,
} from "react-icons/pi";
import { ActionIcon, Text } from "rizzui";
import SimpleBar from "simplebar-react";
import InputError from "./InputError";

const fileType = {
    "text/csv": <PiFileCsv className="h-5 w-5" />,
    "text/plain": <PiFile className="h-5 w-5" />,
    "application/pdf": <PiFilePdf className="h-5 w-5" />,
    "application/xml": <PiFileXls className="h-5 w-5" />,
    "application/zip": <PiFileZip className="h-5 w-5" />,
    "application/gzip": <PiFileZip className="h-5 w-5" />,
    "application/msword": <PiFileDoc className="h-5 w-5" />,
} as { [key: string]: React.ReactElement };

type AcceptedFiles = "img" | "pdf" | "csv" | "imgAndPdf" | "all";

export default function FileUpload({
    label = "Upload Files",
    btnLabel = "Upload",
    fieldLabel,
    multiple = true,
    accept = "all",
    placeholder = "PNG, JPG, JPEG up to 5MB",
    onChangeFile,
    errors,
    isClearFiles,
}: {
    label?: string;
    fieldLabel?: string;
    btnLabel?: string;
    multiple?: boolean;
    accept?: AcceptedFiles;
    placeholder?: string;
    onChangeFile: (files: File[]) => void;
    errors?: any;
    isClearFiles?: boolean;
}) {
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        if(isClearFiles) {
            setFiles([])
        }
    },[isClearFiles])

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(event.target.files || []);

        const isFileDuplicate = (file: File, fileList: File[]) => {
            return fileList.some(
                (existingFile) => existingFile.name === file.name,
            );
        };

        const uniqueNewFiles = newFiles.filter(
            (file) => !isFileDuplicate(file, files),
        );

        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles, ...uniqueNewFiles];
            onChangeFile(updatedFiles);
            return updatedFiles;
        });
    };

    const handleFileDelete = (index: number) => {
        // Filter out the file at the specified index
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(() => {
            const afterDelete = [...updatedFiles];
            onChangeFile(afterDelete);
            return updatedFiles;
        });

        if (multiple && errors !== null) {
            if (Object.keys(errors).length) {
                delete errors[`images.${index}`];
            }
        }
    };

    let inputForm = (
        <div className="mb-3 flex justify-center items-center rounded-lg border border-gray-200 py-3 gap-3">
            <UploadIcon className="w-24 h-24" />
            <div className="text-start">
                <div className="mt-4 flex justify-start text-sm leading-6 text-gray-600">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                        <span>{t("Select file")}</span>
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={handleFileUpload}
                            className="sr-only"
                            multiple={multiple}
                        />
                    </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                    {t(placeholder)}
                </p>
            </div>
        </div>
    );

    const isMultiple = () => {
        if (multiple) {
            return inputForm;
        }

        if (!multiple && files.length) {
            return null;
        } else {
            return inputForm;
        }
    };

    return (
        <>
            <div className="col-span-full">
                <label
                    htmlFor="file"
                    className="block text-sm font-medium leading-6 text-gray-600 mb-2"
                >
                    {t(label)}
                </label>
                {isMultiple()}
                {files.length > 1 ? (
                    <Text className="mb-2 text-gray-500">
                        {files.length} {t("files")}
                    </Text>
                ) : null}
                {files.length > 0 && (
                    <SimpleBar className="max-h-[280px]">
                        <div className="grid grid-cols-1 gap-4">
                            {files?.map((file: File, index: number) => (
                                <Fragment key={file.name}>
                                    <div className="flex min-h-[58px] w-full items-center rounded-xl border border-gray-200 px-3 dark:border-gray-300">
                                        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                                            {file.type.includes("image") ? (
                                                <img
                                                    src={URL.createObjectURL(
                                                        file,
                                                    )}
                                                    className=" object-contain"
                                                    alt={file.name}
                                                    sizes="(max-width: 768px) 100vw"
                                                />
                                            ) : (
                                                <>{fileType[file.type]}</>
                                            )}
                                        </div>
                                        <div className="truncate px-2.5">
                                            {file.name}
                                        </div>
                                        <ActionIcon
                                            onClick={() =>
                                                handleFileDelete(index)
                                            }
                                            size="sm"
                                            variant="flat"
                                            color="danger"
                                            className="ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20"
                                        >
                                            <PiTrashBold className="w-6" />
                                        </ActionIcon>
                                    </div>
                                    {multiple && errors !== null ? (
                                        <>
                                            {Object.keys(errors).length ? (
                                                <InputError
                                                    className="-mt-3"
                                                    message={
                                                        errors[
                                                            `images.${index}`
                                                        ]
                                                    }
                                                />
                                            ) : null}
                                        </>
                                    ) : null}
                                </Fragment>
                            ))}
                        </div>
                    </SimpleBar>
                )}
            </div>
        </>
    );
}
