import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/auth";

export const useUser = () => {
    const userId = localStorage.getItem("userId") || "";
    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUser(userId),
    });

    return { user: data, isLoading };
};
