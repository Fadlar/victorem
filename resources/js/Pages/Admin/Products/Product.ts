import { User } from "@/types";
import { Category } from "../Categories/Category";

export interface ProductImages {
    id: number;
    url: string;
    position: number;
}

export interface Size {
    id: number;
    name: string;
    stock: number;
}

export interface Product {
    id: number;
    user_id: number;
    slug: string;
    name: string;
    description: string;
    weight: number;
    price: number;
    discount: number;
    discount_percent: number;
    user: User;
    images: ProductImages[];
    categories: Category[];
    sizes: Size[];
    status: string;
}
