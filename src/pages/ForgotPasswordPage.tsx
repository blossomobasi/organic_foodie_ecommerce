import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { forgotPassword as forgotPasswordApi } from "../services";

import AuthLayout from "../ui/AuthLayout";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
    const { register, handleSubmit, formState } = useForm<{ email: string }>();
    const { errors } = formState;

    const { mutate: forgotPassword, isPending } = useMutation({
        mutationFn: forgotPasswordApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => {
            toast.error(err.message || "An error occurred");
        },
    });

    const onSubmit = (data: { email: string }) => {
        if (isPending) return;

        forgotPassword(data.email);
    };

    return (
        <AuthLayout>
            <div className="w-[30rem]">
                <div>
                    <h1 className="text-4xl mb-5 font-bold text-primaryGreen-700">
                        Forgot Password
                    </h1>
                    <p className="text-gray-600 mb-2">Enter your email to reset your password</p>
                    <p className="mb-8 text-gray-600">
                        Go back to
                        <Link to="/login" className="text-primaryGreen-700 underline">
                            {" "}
                            Login
                        </Link>
                    </p>
                </div>

                <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: /^\S+@\S+$/i,
                        })}
                        error={errors.email?.message}
                    />
                    <Button isLoading={isPending}>Submit</Button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
