import { LoginData, LoginResponse, RegisterData, RegisterResponse, User } from "../../types/auth";
import $http from "../config";

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
