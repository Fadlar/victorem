import FormNav from "@/shared/ecommerce/product/create-edit/form-nav";
import cn from "@/utils/class-names";
import { Category } from "../../Categories/Category";
import { Product } from "../Product";
import ProductSummary from "./product-summary";
import ProductMedia from "./product-media";
import PricingInventory from "./pricing-inventory";
import FormFooter from "@/components/form-footer";

interface IndexProps {
    className?: string;
    product: Product;
    categories: Category[];
    handleSubmit: (e: { preventDefault: () => void }) => void;
    data: any;
    errors: any;
    isLoading: boolean;
    handleChange: (e: { target: { name: string; value: string } }) => void;
    handleSelect: (value: Category) => void;
    handleDescription: (value: string) => void;
    handleImages: (files: File[]) => void;
    handleSize: (e: any, value: any) => void;
    isClearFiles: boolean;
    selectedCategory: Category[];
    buttonTitle?: string;
}

export default function EditProductForm({
    product,
    className,
    categories,
    handleSubmit,
    data,
    errors,
    isLoading,
    handleChange,
    handleSelect,
    handleDescription,
    handleImages,
    handleSize,
    isClearFiles,
    selectedCategory,
    buttonTitle = "Update Product",
}: IndexProps) {
    return (
        <div className="@container">
            <FormNav />
            <form
                onSubmit={handleSubmit}
                className={cn("[&_label.block>span]:font-medium", className)}
            >
                <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
                    <div id="summary" className="pt-7 @2xl:pt-9 @3xl:pt-11">
                        <ProductSummary
                            data={data}
                            errors={errors}
                            handleChange={handleChange}
                            handleSelect={handleSelect}
                            handleDescription={handleDescription}
                            selectedCategory={selectedCategory}
                            categories={categories}
                        />
                    </div>
                    <div id="media" className="pt-7 @2xl:pt-9 @3xl:pt-11">
                        <ProductMedia
                            product={product}
                            handleImages={handleImages}
                            errors={errors}
                            isClearFiles={isClearFiles}
                        />
                    </div>
                    <div
                        id="pricingInventory"
                        className="pt-7 @2xl:pt-9 @3xl:pt-11"
                    >
                        <PricingInventory
                            data={data}
                            errors={errors}
                            handleChange={handleChange}
                            handleSize={handleSize}
                            className="mb-10"
                        />
                    </div>
                </div>
                <FormFooter isLoading={isLoading} submitBtnText={buttonTitle} />
            </form>
        </div>
    );
}
