import cn from "@/utils/class-names";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Carousel() {
    const [currentStep, setCurrentStep] = useState(0);
    const [moving, setMoving] = useState("right");

    const [steps, setSteps] = useState([
        { name: "Step 1", href: "#", status: "current" },
        { name: "Step 2", href: "#", status: "upcoming" },
        { name: "Step 3", href: "#", status: "upcoming" },
    ]);

    const prevStep = () => {
        setMoving("left");
        setSteps((old) =>
            old.map((v, i) => {
                if (i === currentStep) {
                    v.status = "upcoming";
                } else if (i === currentStep - 1) {
                    v.status = "current";
                }
                return v;
            }),
        );
        setCurrentStep(currentStep - 1);
        return false;
    };

    const nextStep = async () => {
        setMoving("right");
        // getValues('firstname')

        if (true) {
            setSteps((old) =>
                old.map((v, i) => {
                    if (i === currentStep) {
                        v.status = "complete";
                    } else if (i === currentStep + 1) {
                        v.status = "current";
                    }
                    return v;
                }),
            );
            setCurrentStep(currentStep + 1);
        }
        return false;
    };

    const wrapper = useRef<any>(null);
    const [wrapperWidth, setWrapperWidth] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (wrapper.current !== null) {
                setWrapperWidth(wrapper.current.offsetWidth);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-top">
                {/* <h1>test</h1> */}
                <div
                    className="flex items-start overflow-hidden w-96 sm:w-full"
                    ref={wrapper}
                >
                    <div className="flex flex-nowrap">
                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 0}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-full opacity-0`
                                    : `translate-x-full opacity-0`
                            }
                            className="w-0 bg-green-200 overflow-visible"
                            as="div"
                        >
                            <div style={{ width: `${wrapperWidth}px` }}>
                                <img
                                    src="/victorem/background.png"
                                    className="aspect-video"
                                    alt="bg"
                                />
                            </div>
                        </Transition>

                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 1}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-96 opacity-0`
                                    : `translate-x-96 opacity-0`
                            }
                            className="bg-red-200 w-0 overflow-visible"
                            as="div"
                        >
                            <div style={{ width: `${wrapperWidth}px` }}>
                                <img
                                    src="/victorem/background2.png"
                                    className="aspect-video"
                                    alt="bg"
                                />
                            </div>
                        </Transition>

                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 2}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-96 opacity-0`
                                    : `translate-x-96 opacity-0`
                            }
                            className="w-0 overflow-visible"
                            as="div"
                        >
                            <div style={{ width: `${wrapperWidth}px` }}>
                                <img
                                    src="/victorem/background.png"
                                    className="aspect-video"
                                    alt="bg"
                                />
                            </div>
                        </Transition>
                    </div>
                </div>
                <div className={`mt-2`}>
                    {/* <p className="text-sm font-medium mb-1 mt-3 text-center">
                        Step{" "}
                        {steps.findIndex((step) => step.status === "current") +
                            1}{" "}
                        of {steps.length}
                    </p> */}
                    <nav
                        className="container flex items-center justify-center relative -mt-14"
                        aria-label="Progress"
                    >
                        <button
                            type="button"
                            disabled={currentStep === 0}
                            onClick={() => prevStep()}
                        >
                            <BiLeftArrow
                                className={cn(
                                    "w-5 h-5",
                                    currentStep === 0
                                        ? "text-slate-400 cursor-not-allowed"
                                        : "text-white cursor-pointer",
                                )}
                            />
                        </button>
                        <ol className="mx-8 flex items-center space-x-5">
                            {steps.map((step, i) => (
                                <li key={`step_${i}`}>
                                    {step.status === "complete" ? (
                                        <button
                                            disabled
                                            className="block w-1 h-1 bg-white rounded-full"
                                        >
                                            <span className="sr-only"></span>
                                        </button>
                                    ) : step.status === "current" ? (
                                        <a
                                            href={step.href}
                                            className="relative flex items-center justify-center"
                                            aria-current="step"
                                        >
                                            <span
                                                className="absolute w-2 h-2 p-px flex"
                                                aria-hidden="true"
                                            >
                                                <span className="w-full h-full rounded-full bg-white" />
                                            </span>
                                            <span
                                                className="relative block w-1 h-1 bg-black rounded-full"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only"></span>
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="block w-1 h-1 bg-white rounded-full hover:bg-gray-400"
                                        >
                                            <span className="sr-only"></span>
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ol>
                        <button
                            type="button"
                            disabled={currentStep === 2}
                            onClick={() => nextStep()}
                        >
                            <BiRightArrow
                                className={cn(
                                    "w-5 h-5",
                                    currentStep === 2
                                        ? "text-slate-400 cursor-not-allowed"
                                        : "text-white cursor-pointer",
                                )}
                            />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
