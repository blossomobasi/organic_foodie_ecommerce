import BulkOrders from "../components/BulkOrders";
import HomeMain from "../components/HomeMain";
import NewProducts from "../components/NewProducts";
import Offers from "../components/Offers";
import PopularProducts from "../components/PopularProducts";

const HomePage = () => {
    return (
        <main>
            <HomeMain />
            <PopularProducts />
            <NewProducts />
            <BulkOrders />
            <Offers />
        </main>
    );
};

export default HomePage;
