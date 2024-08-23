import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { login as loginApi } from "../services";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { AxiosError } from "axios";
import { LoginData } from "../types/auth";
import ScrollToTop from "../ui/ScrollToTop";

const LoginPage = () => {
    const navigate = useNavigate();

    const { mutate, isPending: isLogginIn } = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            toast.success("Login successful");
            // localStorage.setItem("userId", data.findUser._id);
            Cookies.set("refreshToken", data.refreshToken);

            navigate("/");
        },
        onError: (err: AxiosError) => {
            toast.error(err.message);
            console.error(err.response?.data);
        },
    });

    const { register, handleSubmit, formState } = useForm<LoginData>();
    const { errors } = formState;

    function onSubmit(data: LoginData) {
        mutate(data);
    }

    return (
        <ScrollToTop>
            <div className="bg-[#F8FAFB] flex items-center justify-center p-20">
                <div className="bg-white px-32 py-20 rounded-xl">
                    <h1 className="text-4xl font-bold text-[#171725]">Sign Up</h1>
                    <p className="text-[#8D98AF] text-lg py-3">Enter details to get started</p>

                    <form
                        className="pt-3 flex flex-col space-y-3 w-[25rem]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextInput
                            error={errors?.email?.message?.toString()}
                            label="Email"
                            placeholder="Enter your email"
                            inputId="email"
                            {...register("email", { required: "Email is required" })}
                        />

                        <TextInput
                            error={errors?.password?.message?.toString()}
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            inputId="password"
                            {...register("password", { required: "Password is required" })}
                        />

                        <Button isLoading={isLogginIn}>Login</Button>

                        <p className="text-center">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-primaryGreen-700">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </ScrollToTop>
    );
};

export default LoginPage;
