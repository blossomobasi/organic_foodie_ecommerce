import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../services";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

import AuthLayout from "../ui/AuthLayout";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const email = localStorage.getItem("email") || "";
    const navigate = useNavigate();
    const { register, handleSubmit, formState, getValues } = useForm<{
        password: string;
        confirmPassword: string;
    }>();
    const { errors } = formState;

    const { mutate: resetPassword, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            resetPasswordApi(email, password),
        onSuccess: () => {
            toast.success("Password updated successfully");
            navigate("/login");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    const onSubmit = (data: { password: string }) => {
        if (isPending) return;

        resetPassword({ password: data.password, email });
    };

    return (
        <AuthLayout>
            <div className="w-[30rem]">
                <div>
                    <h1 className="text-4xl mb-5 font-bold text-primaryGreen-700">
                        Reset Password
                    </h1>
                    <p className="mb-8 text-gray-600">Enter your new password</p>
                </div>

                <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        type={showPassword ? "text" : "password"}
                        onIconClick={() => setShowPassword((showPassword) => !showPassword)}
                        showPassword={showPassword}
                        placeholder="New Password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        authInput
                        error={errors.password?.message}
                    />
                    <TextInput
                        type={showPassword ? "text" : "password"}
                        onIconClick={() => setShowPassword((showPassword) => !showPassword)}
                        showPassword={showPassword}
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues("password") || "Passwords do not match",
                        })}
                        authInput
                        error={errors.confirmPassword?.message}
                    />
                    <Button isLoading={isPending}>Submit</Button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default ResetPasswordPage;
