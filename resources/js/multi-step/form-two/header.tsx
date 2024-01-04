import cn from "@/utils/class-names";

import { Link } from "@inertiajs/react";
import StepCounter from "@/shared/multi-step/step-counter";
import {
    useStepperTwo,
    stepTwoTotalSteps,
} from "@/shared/multi-step/multi-step-2";
// import { siteConfig } from "@/config/site.config";

interface FooterProps {
    className?: string;
}

export default function Header({ className }: FooterProps) {
    const { step } = useStepperTwo();
    return (
        <header
            className={cn(
                "fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-gray-0/60 px-4 py-5 backdrop-blur-lg dark:bg-gray-100/5 md:h-20 md:px-5 lg:px-8 4xl:px-10",
                className,
            )}
        >
            <Link href={"/"}>
                <img
                    // src={siteConfig.logo}
                    // alt={siteConfig.title}
                    className="dark:invert"
                />
            </Link>
            <StepCounter
                currentStep={step + 1}
                totalSteps={stepTwoTotalSteps}
            />
        </header>
    );
}
