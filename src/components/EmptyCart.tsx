const EmptyCart = () => {
    return (
        <span className="flex flex-col items-center justify-center space-y-2 w-full">
            <h2 className="text-5xl font-bold nichrome">There is no Item in your cart :(</h2>
            <p className="text-grey-600">Make your cart happy by adding an item :)</p>
        </span>
    );
};

export default EmptyCart;
