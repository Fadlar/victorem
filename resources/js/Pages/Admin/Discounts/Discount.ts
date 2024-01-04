import { Product, User } from "@/types";

export interface Discount {
    id: number;
    user_id: number;
    product_id: number;
    discount_price: number;
    percentage: number;
    start_at: number;
    end_at: number;
    user?: User;
    product?: Product;
}
