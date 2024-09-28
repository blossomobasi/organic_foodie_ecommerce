import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../services";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import AuthLayout from "../ui/AuthLayout";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const ResetPasswordPage = () => {
    const userId = Cookies.get("userId") || "";
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<{ password: string }>();
    const { errors } = formState;

    const { mutate: resetPassword, isPending } = useMutation({
        mutationFn: ({ password, userId }: { password: string; userId: string }) =>
            updatePasswordApi(password, userId),
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

        resetPassword({ password: data.password, userId });
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
                        placeholder="New Password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        error={errors.password?.message}
                    />
                    <Button isLoading={isPending}>Submit</Button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default ResetPasswordPage;
