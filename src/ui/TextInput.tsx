import React, { ForwardedRef } from "react";
import { cn } from "../utils/cn";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

type Props = {
    type?: string;
    label?: string;
    error?: string;
    placeholder?: string;
    inputId?: string;
    className?: string;
    authInput?: boolean;
    onIconClick?: () => void;
    showPassword?: boolean;
};

const TextInput = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            label,
            error,
            placeholder,
            inputId,
            type = "text",
            className,
            authInput,
            onIconClick,
            showPassword,
            ...rest
        },
        ref: ForwardedRef<HTMLInputElement>
    ) => (
        <div className="flex flex-col space-y-2.5">
            {label && (
                <label htmlFor={inputId} className="text-lg font-medium">
                    {label}
                </label>
            )}
            {!authInput ? (
                <input
                    {...rest}
                    ref={ref}
                    type={type}
                    id={inputId}
                    className={cn(
                        "border rounded-md px-2 py-3 w-full placeholder:text-[#566363] text-[#566363] focus-within:outline-none",
                        className,
                        error ? "border-secondaryOrange-500" : "border-grey-400",
                        className
                    )}
                    placeholder={placeholder}
                />
            ) : (
                <span className="flex items-center relative">
                    <input
                        {...rest}
                        ref={ref}
                        type={type}
                        id={inputId}
                        className={cn(
                            "border-b py-3 w-full placeholder:text-[#566363] text-[#566363] focus-within:outline-none",
                            className,
                            error ? "border-secondaryOrange-500" : "border-grey-400",
                            className
                        )}
                        placeholder={placeholder}
                    />

                    {type === "password" && !showPassword ? (
                        <span
                            className="absolute right-2 cursor-pointer text-[#566363]"
                            onClick={onIconClick}
                        >
                            <FaEyeSlash size={23} />
                        </span>
                    ) : (
                        type === "text" &&
                        showPassword && (
                            <span
                                className="absolute right-2 cursor-pointer text-[#566363]"
                                onClick={onIconClick}
                            >
                                <IoEyeSharp size={23} />
                            </span>
                        )
                    )}
                </span>
            )}
            {error && <span className="text-secondaryOrange-500">{error}</span>}
        </div>
    )
);

export default TextInput;
