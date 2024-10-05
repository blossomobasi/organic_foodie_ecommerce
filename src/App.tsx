import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import HealthBenefitsPage from "./pages/HealthBenefitsPage";
import BlogsPage from "./pages/BlogsPage";
import FaqPage from "./pages/FaqPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsIdPage from "./pages/ProductsIdPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import OTPPage from "./pages/OTPPage";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer newestOnTop={true} pauseOnHover={true} autoClose={3000} draggable />

            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductsPage />} />
                        <Route path="products/:productId" element={<ProductsIdPage />} />
                        <Route path="health-benefits" element={<HealthBenefitsPage />} />
                        <Route path="blogs" element={<BlogsPage />} />
                        <Route path="faq" element={<FaqPage />} />
                        <Route path="cart" element={<CartPage />} />

                        <Route path="wishlist" element={<WishlistPage />} />
                        <Route path="checkout" element={<CheckoutPage />} />
                    </Route>

                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="OTP" element={<OTPPage />} />
                    <Route path="reset-password" element={<ResetPasswordPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
