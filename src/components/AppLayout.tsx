import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <nav>Navigation</nav>

            <main>
                <Outlet />
            </main>

            <footer>Footer</footer>
        </div>
    );
};

export default AppLayout;
