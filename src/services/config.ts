import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    timeout: 30000, // 30 seconds
    headers: {
        "Content-Type": "application/json",
    },
};

const $http: AxiosInstance = axios.create(config);

$http.interceptors.request.use(
    (config) => {
        const refreshToken = Cookies.get("refreshToken");
        if (refreshToken) {
            config.headers.Authorization = `Bearer ${refreshToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error); // handle request error
    }
);

export default $http;
