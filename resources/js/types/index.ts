import { CouponType } from "@/config/enums";

export interface Coupon {
    id: string;
    name: string;
    type: CouponType;
    slug: string;
    amount?: string;
    code?: string;
}

export interface Address {
    customerName?: string;
    phoneNumber?: string;
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    street?: string;
}

export interface GoogleMapLocation {
    lat?: number;
    lng?: number;
    street_number?: string;
    route?: string;
    street_address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    formattedAddress?: string;
}

export type ProductColor = {
    name?: string;
    code?: string;
};

export interface CartItem {
    id: number;
    name: string;
    slug?: string;
    description?: string;
    image: string;
    color?: ProductColor | null;
    price: number;
    salePrice?: number;
    quantity: number;
    size: number;
    stock?: number;
    discount?: number;
}

export type Product = {
    id: number;
    slug?: string;
    title: string;
    description?: string;
    price: number;
    sale_price?: number;
    thumbnail: string;
    colors?: ProductColor[];
    sizes?: number[];
    base64?: string;
};

export type PosProduct = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    salePrice: number;
    quantity: number;
    size: number;
    discount?: number;
    base64?: string;
};
export interface CalendarEvent {
    id?: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    title: string;
    description?: string;
    location?: string;
}

export interface Permission {
    id: number;
    name: string;
    guard_name: string;
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    permissions: Permission[];
}

export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    email_verified_at: string;
    roles: Role[];
    permissions: Permission[];
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
