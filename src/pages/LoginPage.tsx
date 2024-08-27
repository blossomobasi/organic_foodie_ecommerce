import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { login as loginApi } from "../services";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { LoginData } from "../types/auth";
import ScrollToTop from "../ui/ScrollToTop";
import AuthLayout from "../ui/AuthLayout";

const LoginPage = () => {
    const navigate = useNavigate();

    const { mutate, isPending: isLogginIn } = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            toast.success("Login successful");
            Cookies.set("refreshToken", data.refreshToken);
            Cookies.set("userId", data.findUser._id);

            navigate("/");
        },
        onError: (err: { response: { data: { message: string } } }) => {
            // Get rid of TypeScript error
            toast.error(err.response.data.message || "An error occurred");
        },
    });

    const { register, handleSubmit, formState } = useForm<LoginData>();
    const { errors } = formState;

    function onSubmit(data: LoginData) {
        mutate(data);
    }

    return (
        <ScrollToTop>
            <AuthLayout>
                <div className="w-[30rem]">
                    <div>
                        <h1 className="text-4xl mb-5 font-bold nichrome text-primaryGreen-700">
                            Login
                        </h1>
                        <p className="mb-8 text-[#566363]">
                            Don't have an account yet?{" "}
                            <Link to="/signup" className="text-secondaryOrange-400 font-semibold">
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            error={errors?.email?.message?.toString()}
                            placeholder="Enter your email"
                            inputId="email"
                            {...register("email", { required: "Email is required" })}
                            authInput
                        />

                        <TextInput
                            error={errors?.password?.message?.toString()}
                            type="password"
                            placeholder="Enter your password"
                            inputId="password"
                            {...register("password", { required: "Password is required" })}
                            authInput
                        />

                        <div className="flex items-center justify-between py-3">
                            <div className="flex space-x-3">
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe" className="text-[#566363]">
                                    Remember me
                                </label>
                            </div>

                            <Link
                                to="/forgot-password"
                                className="font-semibold text-primaryGreen-700"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button isLoading={isLogginIn}>Login</Button>
                    </form>
                </div>
            </AuthLayout>
        </ScrollToTop>
    );
};

export default LoginPage;
