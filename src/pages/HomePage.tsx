import BulkOrders from "../components/BulkOrders";
import HomeMain from "../components/HomeMain";
import NewProducts from "../components/NewProducts";
import Offers from "../components/Offers";
import PopularProducts from "../components/PopularProducts";
import Subscribe from "../components/Subscribe";

const HomePage = () => {
    return (
        <main>
            <HomeMain />
            <PopularProducts />
            <BulkOrders />
            <NewProducts />
            <Offers />
            <Subscribe />
        </main>
    );
};

export default HomePage;
