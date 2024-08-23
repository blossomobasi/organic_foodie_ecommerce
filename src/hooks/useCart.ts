import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi, getCart } from "../services";
import { toast } from "react-toastify";

const useAddToCart = () => {
    const queryClient = useQueryClient();
    const { mutate: addToCart, isPending } = useMutation({
        mutationFn: addToCartApi,
        onSuccess: () => {
            toast.success("Product added to cart");
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { addToCart, isPending };
};

const useCart = () => {
    const { data: cart, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    return { cart, isLoading };
};

export { useAddToCart, useCart };
