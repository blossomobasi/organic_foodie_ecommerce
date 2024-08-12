import { cn } from "../utils/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
    label?: string;
    error?: string;
    placeholder?: string;
    inputId?: string;
    className?: string;
};

const TextInput = ({ label, error, placeholder, inputId, type = "text", className }: Props) => {
    return (
        <form className="flex flex-col space-y-2.5">
            {label && (
                <label htmlFor={inputId} className="text-lg font-medium">
                    {label}
                </label>
            )}
            <input
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
        </form>
    );
};

export default TextInput;
