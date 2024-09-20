import { useMutation } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const useOrder = () => {
    const { mutate: placeOrder, isPending: isPlacingOrder } = useMutation({
        mutationFn: placeOrderApi,
        onSuccess: (data) => {
            toast.success(data.message);
            // Redirect to the payment page in a blank tab
            window.open(data.authorization_url, "_blank");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    return { placeOrder, isPlacingOrder };
};
