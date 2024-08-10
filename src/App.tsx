import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import HealthBenefitsPage from "./pages/HealthBenefitsPage";
import BlogsPage from "./pages/BlogsPage";
import FaqPage from "./pages/FaqPage";
import WishlistPage from "./pages/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsIdPage from "./pages/ProductsIdPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="products/:productId" element={<ProductsIdPage />} />
                    <Route path="health-benefits" element={<HealthBenefitsPage />} />
                    <Route path="blogs" element={<BlogsPage />} />
                    <Route path="faq" element={<FaqPage />} />
                    <Route path="wishlist" element={<WishlistPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
