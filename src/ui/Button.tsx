import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "primary-outline";
    icon?: React.ReactNode;
    url?: string;
};

const Button = ({ children, variant, icon, className, url, ...props }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (url) {
            navigate(url);
        }
    };
    return (
        <button
            {...props}
            className={cn(buttonVariant({ variant }), className)}
            onClick={handleClick}
        >
            {children}
            {icon && <span>{icon}</span>}
        </button>
    );
};

const buttonVariant = cva("py-2.5 px-6", {
    variants: {
        variant: {
            primary:
                "border border-primaryGreen-700 text-white bg-primaryGreen-700 rounded-md font-semibold hover:bg-primaryGreen-300 ring-offset-2 focus:ring ring-primaryGreen-300",
            secondary:
                "bg-secondaryOrange-400 hover:bg-secondaryOrange-500 ring-offset-2 focus:ring ring-secondaryOrange-400 text-white rounded-md border border-secondaryOrange-400 font-semibold",
            "primary-outline":
                "border border-primaryGreen-700 rounded-md text-primaryGreen-700 font-semibold hover:bg-primaryGreen-100",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export default Button;
