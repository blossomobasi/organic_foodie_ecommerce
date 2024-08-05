import BulkOrders from "../components/BulkOrders";
import HomeMain from "../components/HomeMain";
import NewProducts from "../components/NewProducts";
import PopularProducts from "../components/PopularProducts";

const HomePage = () => {
    return (
        <main>
            <HomeMain />
            <PopularProducts />
            <NewProducts />
            <BulkOrders />
        </main>
    );
};

export default HomePage;
