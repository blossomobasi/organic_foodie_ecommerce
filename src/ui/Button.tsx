import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary" | "tertiary-outline";
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

const buttonVariant = cva("py-2.5 px-14 border", {
    variants: {
        variant: {
            primary: "border border-byc-black text-byc-black font-semibold",
            secondary: "bg-byc-black text-white border-2 border-byc-black font-semibold",
            tertiary: "bg-byc-red-500 rounded-md border-byc-red-500 text-white",
            "tertiary-outline": "border-byc-red-500 rounded-md text-byc-red-500",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export default Button;
