import OrganicSnacks from "../assets/images/black_friday_out_of_stock.png";
import BerryBlissBites from "../assets/images/berry_bliss_bites.png";
import CoconutCrunchies from "../assets/images/crispy_coconut_crunchies.png";
import Button from "../ui/Button";
import { LiaTimesSolid } from "react-icons/lia";

const WishlistPage = () => {
    const wishlists = [
        {
            image: OrganicSnacks,
            title: "Organic Almond Delight",
            category: "Coconut Flakes",
            unitPrice: 237.43,
            stock: "In Stock",
        },
        {
            image: BerryBlissBites,
            title: "Seed Power Bars",
            category: "Coconut Flakes",
            unitPrice: 874.45,
            stock: "In Stock",
        },
        {
            image: CoconutCrunchies,
            title: "Coconut Date Energy Bars",
            category: "Coconut Flakes",
            unitPrice: 237.43,
            stock: "In Stock",
        },
    ];
    const totalWishlist = wishlists.length;
    const totalPrice = wishlists.reduce((acc, item) => acc + item.unitPrice, 0);

    return (
        <section className="flex flex-col items-center">
            <div className="py-14 text-center lg:px-20 px-5 max-w-[120rem] w-full">
                <h2 className="text-5xl font-bold nichrome pb-5">Wish List</h2>
                <p className="mb-10 text-grey-600">{totalWishlist} items in your wishlist</p>

                <div className=" overflow-x-auto">
                    <table className="lg:w-full w-[70rem]">
                        <thead>
                            <tr className="border">
                                <th className="w-[40%] p-2">Product Name</th>
                                <th className="w-[20%]">Unit Price</th>
                                <th className="w-[20%]">Stock Status</th>
                                <th className="w-[20%]"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {wishlists.map((wishlist, index) => (
                                <tr key={index} className="border">
                                    <td className="p-5 flex items-center space-x-5">
                                        <span className="cursor-pointer">
                                            <LiaTimesSolid size={25} />
                                        </span>
                                        <img
                                            src={wishlist.image}
                                            alt={wishlist.title}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <h3 className="font-medium text-start">{wishlist.title}</h3>
                                    </td>
                                    <td>${wishlist.unitPrice}</td>
                                    <td>{wishlist.stock}</td>
                                    <td>
                                        <Button>Add to Cart</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="py-14 text-end flex flex-col items-end space-y-3">
                    <p className="text-lg text-grey-600">Estimated Total:</p>
                    <h2 className="text-2xl font-bold">${Math.round(totalPrice * 100) / 100}</h2>
                    <Button className="py-4 px-28">Add All to Cart</Button>
                </div>
            </div>
        </section>
    );
};

export default WishlistPage;
