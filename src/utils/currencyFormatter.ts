const currencyFormatter = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(amount);
};

export default currencyFormatter;