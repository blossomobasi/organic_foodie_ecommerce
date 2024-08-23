import { LoginData, LoginResponse, RegisterData, RegisterResponse, User } from "../types/auth";
import { CartData, CartResponse } from "../types/cart";
import { ProductResponse, SingleProductResponse } from "../types/products";
import $http from "./config";

export const register = async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await $http.post("/api/user/register", data);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await $http.post("/api/user/login", data);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }
    return response.data;
};

export const getUser = async (id: string): Promise<User> => {
    const response = await $http.get(`/api/user/users/${id}`);

    if (!response.data.success) {
        throw new Error("User not found");
    }
    return response.data;
};

// Products
export const getProducts = async (): Promise<ProductResponse> => {
    const response = await $http.get("/api/product/all");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

export const getProduct = async (id: string): Promise<SingleProductResponse> => {
    const response = await $http.get(`/api/product/single/${id}`);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

// Cart
export const addToCart = async (CartData: CartData): Promise<CartResponse> => {
    const response = await $http.post("/api/cart/addToCart", CartData);
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};

export const getCart = async (): Promise<CartResponse> => {
    const response = await $http.get("/api/cart/allCartItems");
    if (!response.data.success) {
        throw new Error(response.data.message);
    }

    return response.data;
};
