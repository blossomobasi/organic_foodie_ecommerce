import Cookie from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const refreshToken = Cookie.get("refreshToken");

    useEffect(() => {
        if (!refreshToken) {
            navigate("/login");
        }
    }, [refreshToken, navigate]);

    return <div>{children}</div>;
};

export default ProtectRoute;
