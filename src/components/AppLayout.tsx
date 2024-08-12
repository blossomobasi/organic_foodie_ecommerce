import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

const AppLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AppLayout;
