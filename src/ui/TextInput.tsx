import React, { ForwardedRef } from "react";
import { cn } from "../utils/cn";

type Props = {
    type?: string;
    label?: string;
    error?: string;
    placeholder?: string;
    inputId?: string;
    className?: string;
};

const TextInput = React.forwardRef<HTMLInputElement, Props>(
    (
        { label, error, placeholder, inputId, type = "text", className, ...rest },
        ref: ForwardedRef<HTMLInputElement>
    ) => (
        <div className="flex flex-col space-y-2.5">
            {label && (
                <label htmlFor={inputId} className="text-lg font-medium">
                    {label}
                </label>
            )}
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
            {error && <span className="text-secondaryOrange-500">{error}</span>}
        </div>
    )
);

export default TextInput;
