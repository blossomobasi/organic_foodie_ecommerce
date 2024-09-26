const EmptyCart = () => {
    return (
        <span className="flex flex-col items-center justify-center text-center space-y-2 w-full py-20">
            <h2 className="sm:text-5xl text-4xl font-bold nichrome">
                There is no Item in your cart :(
            </h2>
            <p className="text-grey-600">Make your cart happy by adding an item :)</p>
        </span>
    );
};

export default EmptyCart;
