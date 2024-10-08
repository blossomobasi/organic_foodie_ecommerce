import { useMutation } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useOrder = () => {
    const navigate = useNavigate();
    const { mutate: placeOrder, isPending: isPlacingOrder } = useMutation({
        mutationFn: placeOrderApi,
        onSuccess: (data) => {
            toast.success(data.message);
            // Redirect to the payment page in a blank tab
            const newTab = window.open(data.authorization_url, "_blank");

            // Fallback if the popup blocker prevents the new tab from opening - Safari
            if (!newTab || newTab.closed) {
                window.location.href = data.authorization_url;
            } else {
                navigate("/");
            }
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    return { placeOrder, isPlacingOrder };
};
