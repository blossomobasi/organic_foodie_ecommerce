import { LoginData, LoginResponse, RegisterData, RegisterResponse } from "../types/auth";
import { CartData, CartResponse } from "../types/cart";
import {
    NewProductsResponse,
    PopularProductsResponse,
    Product,
    ProductResponse,
    SingleProductResponse,
    WishlistResponse,
} from "../types/products";
import $http from "./config";

const register = async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await $http.post("/api/user/register", data);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await $http.post("/api/user/login", data);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }
    return response.data;
};

// Products
const getProducts = async (): Promise<ProductResponse> => {
    const response = await $http.get("/api/product/all");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};
const createReview = async (reviewData: {
    star: number;
    prodId: string;
    comment: string;
}): Promise<Product> => {
    const response = await $http.put("/api/product/rating", reviewData);

    return response.data;
};
const getNewProducts = async (): Promise<NewProductsResponse> => {
    const response = await $http.get("/api/product/new");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};
const getPopularProducts = async (): Promise<PopularProductsResponse> => {
    const response = await $http.get("/api/product/popular");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

const getProduct = async (id: string): Promise<SingleProductResponse> => {
    const response = await $http.get(`/api/product/single/${id}`);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

// Wishlist
const addToWishlist = async (prodId: string, userId: string): Promise<WishlistResponse> => {
    const response = await $http.put(`/api/product/wishlist/${userId}`, { prodId });
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

// Cart
const addToCart = async (productId: string): Promise<CartResponse> => {
    const response = await $http.post("/api/cart/addToCart", { productId });
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

const removeItemFromCart = async (cartData: CartData): Promise<CartResponse> => {
    const response = await $http.post("/api/cart/remove", cartData);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

const getCart = async (): Promise<CartResponse> => {
    const response = await $http.get("/api/cart/allCartItems");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

export {
    register,
    login,
    getProducts,
    createReview,
    getNewProducts,
    getPopularProducts,
    getProduct,
    addToWishlist,
    addToCart,
    removeItemFromCart,
    getCart,
};
