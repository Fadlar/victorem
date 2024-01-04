import toast from "react-hot-toast";
import { PiCheckCircle, PiWarningCircle, PiX, PiXCircle } from "react-icons/pi";
import cn from "./class-names";
import { t } from "@/utils/lang";

const notification = (
    message: string,
    type: "success" | "error" | "warning",
) => {
    switch (type) {
        case "success":
            toast.custom((tst) => (
                <div
                    id="toast-success"
                    className={cn(
                        "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
                        tst.visible ? "animate-enter" : "animate-leave",
                    )}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <PiCheckCircle className="w-5 h-5" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">{t(message)}</div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => toast.dismiss(tst.id)}
                    >
                        <span className="sr-only">Close</span>
                        <PiX />
                    </button>
                </div>
            ));
            break;
        case "error":
            toast.custom((tst) => (
                <div
                    id="toast-success"
                    className={cn(
                        "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
                        tst.visible ? "animate-enter" : "animate-leave",
                    )}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <PiXCircle className="w-5 h-5" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">{t(message)}</div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => toast.dismiss(tst.id)}
                    >
                        <span className="sr-only">Close</span>
                        <PiX />
                    </button>
                </div>
            ));
            break;
        case "warning":
            toast.custom((tst) => (
                <div
                    id="toast-success"
                    className={cn(
                        "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
                        tst.visible ? "animate-enter" : "animate-leave",
                    )}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                        <PiWarningCircle className="w-5 h-5" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">{t(message)}</div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => toast.dismiss(tst.id)}
                    >
                        <span className="sr-only">Close</span>
                        <PiX />
                    </button>
                </div>
            ));
            break;
        default:
            toast(message);
            break;
    }
};

export default notification;
