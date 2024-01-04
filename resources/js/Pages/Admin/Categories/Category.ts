import { User } from "@/types";
import { Product } from "../Products/Product";

export interface Category {
    id: number | string;
    user_id: number;
    name: string;
    description: string;
    slug: string;
    icon: string | null;
    user?: User;
    products?: Product[];
}
