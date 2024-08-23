import { LoginData, LoginResponse, RegisterData, RegisterResponse, User } from "../types/auth";
import { CartData, CartResponse } from "../types/cart";
import {
    NewProductsResponse,
    PopularProductsResponse,
    ProductResponse,
    SingleProductResponse,
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

const getUser = async (id: string): Promise<User> => {
    const response = await $http.get(`/api/user/users/${id}`);

    if (!response.data.success) {
        throw new Error("User not found");
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

// Cart
const addToCart = async (CartData: CartData): Promise<CartResponse> => {
    const response = await $http.post("/api/cart/addToCart", CartData);
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
    getUser,
    getProducts,
    getNewProducts,
    getPopularProducts,
    getProduct,
    addToCart,
    getCart,
};
