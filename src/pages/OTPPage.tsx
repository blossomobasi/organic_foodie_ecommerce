import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { verifyOTP } from "../services";

import TextInput from "../ui/TextInput";
import AuthLayout from "../ui/AuthLayout";
import Button from "../ui/Button";

const OTPPage = () => {
    const forgotPasswordEmail = localStorage.getItem("email") || "";
    const navigate = useNavigate();
    const { register, formState, handleSubmit } = useForm<{ otp: string }>();
    const { errors } = formState;
    const { mutate: verifyOtp, isPending: isVerifying } = useMutation({
        mutationFn: ({ otp, email }: { otp: string; email: string }) => verifyOTP(otp, email),
        onSuccess: () => {
            toast.success("Verified Successfully");
            navigate("/reset-password");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err?.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    function handleVerifyOTP(data: { otp: string }) {
        if (isVerifying) return;

        verifyOtp({ otp: data.otp, email: forgotPasswordEmail });
    }
    return (
        <AuthLayout>
            <form className="w-[30rem]" onSubmit={handleSubmit(handleVerifyOTP)}>
                <div>
                    <h1 className="text-4xl mb-5 font-bold text-primaryGreen-700">
                        Please Enter OTP
                    </h1>
                    <p className="text-gray-600 mb-2">
                        Your One Time Password (OTP) has been sent to your registered email
                    </p>
                </div>
                <TextInput
                    placeholder="Enter Otp"
                    {...register("otp", {
                        required: "OTP is required",
                    })}
                    type="number"
                    error={errors.otp?.message}
                />

                <p className="mt-4 text-gray-600">
                    Did not recieve OTP?{" "}
                    <span className="text-primaryGreen-700 underline">Resend</span>
                </p>

                <Button isLoading={isVerifying} className="mt-5 w-full">
                    Verify
                </Button>
            </form>
        </AuthLayout>
    );
};

export default OTPPage;
