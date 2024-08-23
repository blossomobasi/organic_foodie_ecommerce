import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addToCart as addToCartApi,
    getCart,
    removeItemFromCart as removeItemFromCartApi,
} from "../services";
import { toast } from "react-toastify";

const useAddToCart = () => {
    const queryClient = useQueryClient();
    const { mutate: addToCart, isPending: isAddingItemToCart } = useMutation({
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

    const { mutate: removeItemFromCart, isPending: isRemovingItemFromCart } = useMutation({
        mutationFn: removeItemFromCartApi,
        onSuccess: () => {
            toast.success("Product removed successfully");
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    const isPending = isAddingItemToCart || isRemovingItemFromCart;

    return { addToCart, isPending, removeItemFromCart };
};

const useCart = () => {
    const { data: cart, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    return { cart, isLoading };
};

export { useAddToCart, useCart };
