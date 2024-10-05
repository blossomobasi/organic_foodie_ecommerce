import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { register as registerApi } from "../services";
import { RegisterData } from "../types/auth";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import ScrollToTop from "../ui/ScrollToTop";
import AuthLayout from "../ui/AuthLayout";

const SignupPage = () => {
    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { mutate, isPending: isSigningUp } = useMutation({
        mutationFn: registerApi,
        onSuccess: () => {
            toast.success("Account created successfully");
            navigate("/login");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });
    const { register, handleSubmit, formState } = useForm<RegisterData>();
    const { errors } = formState;

    function onSubmit(data: RegisterData) {
        mutate(data);
    }

    return (
        <ScrollToTop>
            <AuthLayout>
                <div className="w-[30rem]">
                    <div>
                        <h1 className="text-4xl mb-5 font-bold nichrome text-primaryGreen-700">
                            Sign Up
                        </h1>
                        <p className="mb-8 text-[#566363]">
                            Already have an account?{" "}
                            <Link to="/login" className="text-secondaryOrange-400 font-semibold">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            error={errors?.firstname?.message?.toString()}
                            placeholder="Your First name"
                            inputId="firstname"
                            {...register("firstname", { required: "First name is required" })}
                            authInput
                        />
                        <TextInput
                            error={errors?.lastname?.message?.toString()}
                            placeholder="Your Last name"
                            inputId="lastname"
                            {...register("lastname", { required: "Last name is required" })}
                            authInput
                        />
                        <TextInput
                            error={errors?.email?.message?.toString()}
                            placeholder="Email Address"
                            inputId="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address",
                                },
                            })}
                            authInput
                        />
                        <TextInput
                            error={errors?.mobile?.message?.toString()}
                            type="number"
                            placeholder="Phone Number"
                            inputId="mobile"
                            {...register("mobile", {
                                required: "Phone number is required",
                                minLength: {
                                    value: 8,
                                    message: "Phone number must be at least 8 digits",
                                },
                            })}
                            authInput
                        />
                        <TextInput
                            error={errors?.address?.message?.toString()}
                            placeholder="Enter your address"
                            inputId="address"
                            {...register("address", { required: "Address is required" })}
                            authInput
                        />
                        <TextInput
                            error={errors?.password?.message?.toString()}
                            type={showPassword ? "text" : "password"}
                            onIconClick={() => setShowPassword((showPassword) => !showPassword)}
                            showPassword={showPassword}
                            placeholder="Password"
                            inputId="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                            authInput
                        />

                        <div className="flex space-x-3 py-2">
                            <input
                                type="checkbox"
                                id="agree"
                                className="accent-primaryGreen-700"
                                onChange={() => setAgree((agree) => !agree)}
                            />
                            <label htmlFor="agree" className="text-[#566363]">
                                I agree with
                                <span className="font-semibold text-primaryGreen-700">
                                    {" "}
                                    Privacy Policy{" "}
                                </span>
                                and
                                <span className="font-semibold text-primaryGreen-700">
                                    {" "}
                                    Terms of Use
                                </span>
                            </label>
                        </div>

                        <Button disabled={!agree} isLoading={isSigningUp}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </AuthLayout>
        </ScrollToTop>
    );
};

export default SignupPage;
