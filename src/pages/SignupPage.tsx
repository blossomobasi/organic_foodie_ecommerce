import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { register as registerApi } from "../services/auth";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
    const navigate = useNavigate();
    const { mutate, isPending: isSigningUp } = useMutation({
        mutationFn: registerApi,
        onSuccess: () => {
            toast.success("Account created successfully");
            navigate("/login");
        },
        onError: (err: AxiosError) => {
            toast.error(err.message);
            console.error(err.response?.data);
        },
    });
    const { register, handleSubmit, getValues, formState } = useForm();
    const { errors } = formState;

    function onSubmit(data) {
        mutate(data);
    }

    return (
        <div className="bg-[#F8FAFB] flex items-center justify-center p-20">
            <div className="bg-white px-32 py-20 rounded-xl">
                <h1 className="text-4xl font-bold text-[#171725]">Sign Up</h1>
                <p className="text-[#8D98AF] text-lg py-3">Enter details to get started</p>

                <form
                    className="pt-3 flex flex-col space-y-3 w-[25rem]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextInput
                        error={errors?.firstName?.message}
                        label="First Name"
                        placeholder="Enter your first name"
                        inputId="firstName"
                        {...register("firstName", { required: "First name is required" })}
                    />
                    <TextInput
                        error={errors?.lastName?.message}
                        label="Last Name"
                        placeholder="Enter your last name"
                        inputId="lastName"
                        {...register("lastName", { required: "Last name is required" })}
                    />
                    <TextInput
                        error={errors?.email?.message}
                        label="Email"
                        placeholder="Enter your email"
                        inputId="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    <TextInput
                        error={errors?.phoneNumber?.message}
                        type="number"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        inputId="phoneNumber"
                        {...register("phoneNumber", {
                            required: "Phone number is required",
                            minLength: {
                                value: 8,
                                message: "Phone number must be at least 8 digits",
                            },
                        })}
                    />

                    <TextInput
                        error={errors?.password?.message}
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        inputId="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                        })}
                    />
                    <TextInput
                        error={errors?.confirmPassword?.message}
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        inputId="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) =>
                                value === getValues("password") || "Passwords do not match",
                        })}
                    />
                    <TextInput
                        error={errors?.address?.message}
                        label="Address"
                        placeholder="Enter your address"
                        inputId="address"
                        {...register("address", { required: "Address is required" })}
                    />

                    <p className="text-center py-2">
                        By signup I agree with <span className="text-[#FE7086]">Terms </span>
                        and
                        <span className="text-[#FE7086]"> Conditions</span>
                    </p>

                    <Button isLoading={isSigningUp}>Sign Up</Button>

                    <div className="border p-3 rounded-md text-center">
                        <span>logo</span>
                        <span>Sign Up with Google</span>
                    </div>

                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primaryGreen-700">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
