import { Product } from "@/Pages/Admin/Products/Product";
import InventoryTracing from "@/shared/ecommerce/product/create-edit/inventory-tracking";
import ProductPricing from "@/shared/ecommerce/product/create-edit/product-pricing";
import FormGroup from "@/shared/form-group";
import cn from "@/utils/class-names";
import { t } from "@/utils/lang";
import { Button, Input } from "rizzui";

interface PricingInventoryProps {
    className?: string;
    product: Product;
}

export default function PricingInventory({
    className,
    product,
}: PricingInventoryProps) {
    return (
        <form>
            <FormGroup
                title="Pricing"
                description="Add your product pricing here"
                className={cn(className)}
            >
                <Input
                    label="Customer Price"
                    placeholder="10"
                    prefix={"$"}
                    type="number"
                />
                <Input
                    label="Agent Price"
                    placeholder="15"
                    prefix={"$"}
                    type="number"
                />
            </FormGroup>
            <FormGroup
                title="Stock"
                description="Add your product stock info here"
                className={cn(className)}
            >
                <Input type="number" label="Current Stock" placeholder="150" />
            </FormGroup>
            <div className="mt-7 text-end">
                <Button
                    type="submit"
                    // isLoading={isLoading}
                    className="w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                >
                    {t("Update")}
                    {/* {submitBtnText} */}
                </Button>
            </div>
        </form>
    );
}
