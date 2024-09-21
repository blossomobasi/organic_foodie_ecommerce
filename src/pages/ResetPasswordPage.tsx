import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { resetpassword as resetPasswordApi } from "../services";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import AuthLayout from "../ui/AuthLayout";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const ResetPasswordPage = () => {
    const { register, handleSubmit, formState } = useForm<{ password: string }>();
    const { errors } = formState;

    const { mutate: resetPassword, isPending } = useMutation({
        mutationFn: resetPasswordApi,
        onSuccess: () => {
            // toast.success("Reset token sent to email");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    const onSubmit = (data: { password: string }) => {
        if (isPending) return;

        resetPassword(data.password);
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
