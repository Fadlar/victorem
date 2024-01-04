import { User } from "@/types";
import { Category } from "../Categories/Category";
import { Discount } from "../Discounts/Discount";

export interface ProductImages {
    id: number;
    url: string;
    position: number;
}

export interface Product {
    id: number;
    user_id: number;
    slug: string;
    name: string;
    description: string;
    stock: number;
    weight: number;
    customer_price: number;
    agent_price: number;
    user: User;
    images: ProductImages[];
    categories: Category[];
    discount: Discount;
    status: string;
}
