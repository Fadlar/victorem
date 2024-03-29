import cn from '@/utils/class-names';
import { t } from "@/utils/lang";

interface FormGroupProps {
    title: string;
    className?: string;
    description?: string;
    children?: React.ReactNode;
}

export default function FormGroup({
    title,
    className,
    description,
    children,
}: FormGroupProps) {
    return (
        <div className={cn("grid gap-5 @3xl:grid-cols-12", className)}>
            <div className="col-span-full @4xl:col-span-4">
                <h4 className="text-base font-medium">{t(title)}</h4>
                {description && <p className="mt-2">{t(description)}</p>}
            </div>
            {children && (
                <div className="col-span-full grid gap-4 @2xl:grid-cols-2 @4xl:col-span-8 @4xl:gap-5 xl:gap-7">
                    {children}
                </div>
            )}
        </div>
    );
}
