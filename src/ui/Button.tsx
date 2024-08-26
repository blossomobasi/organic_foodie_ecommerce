import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { useNavigate } from "react-router-dom";
import MiniSpinner from "./MiniSpinner";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "primary-outline";
    icon?: React.ReactNode;
    url?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
    disabled?: boolean;
};

const Button = ({
    children,
    variant,
    icon,
    className,
    url,
    onClick,
    isLoading,
    disabled,
    ...props
}: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (url) {
            navigate(url);
        }

        if (onClick) {
            onClick(event);
        }
    };
    return (
        <button
            {...props}
            className={cn(buttonVariant({ variant }), className)}
            onClick={handleClick}
            disabled={isLoading || disabled}
        >
            {isLoading ? (
                <span className="flex items-center justify-center">
                    <MiniSpinner />
                </span>
            ) : (
                children
            )}
            {icon && <span>{icon}</span>}
        </button>
    );
};

const buttonVariant = cva("py-2.5 px-6", {
    variants: {
        variant: {
            primary:
                "border border-primaryGreen-700 text-white bg-primaryGreen-700 rounded-md font-semibold hover:bg-primaryGreen-300 ring-offset-2 focus:ring ring-primaryGreen-300",
            // "border border-primaryGreen-700 hover:border-secondaryOrange-400 text-white bg-primaryGreen-700 rounded-md font-semibold hover:bg-secondaryOrange-400 ring-offset-2 focus:ring ring-primaryGreen-300",
            secondary:
                "bg-secondaryOrange-400 hover:bg-secondaryOrange-500 ring-offset-2 focus:ring ring-secondaryOrange-400 text-white rounded-md border border-secondaryOrange-400 font-semibold",
            // "bg-secondaryOrange-400 hover:bg-primaryGreen-700 ring-offset-2 focus:ring ring-secondaryOrange-400 text-white rounded-md border border-secondaryOrange-400 hover:border-primaryGreen-700 font-semibold",
            "primary-outline":
                "border border-primaryGreen-700 rounded-md text-primaryGreen-700 font-semibold hover:bg-primaryGreen-100",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export default Button;
