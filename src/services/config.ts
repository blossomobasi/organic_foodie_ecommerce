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
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error); // handle request error
    }
);

// $http.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response?.status === 401) {
//             // handle 401 error
//         }
//     }
// );

export default $http;
