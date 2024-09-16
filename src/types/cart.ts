import { Product } from "./products";

export type CartData = {
    itemId: string;
};

export type Cart = {
    _id: string;
    cartTotal: string;
    createdAt: string;
    orderBy: string;
    orderStatus: string;
    __v: number;
    products: {
        _id: string;
        count: number;
        date: string;
        price: number;
        productId: Product;
    }[];
};

export type CartResponse = {
    success: boolean;
    message: string;
    userOrdersCart: Cart[];
};
