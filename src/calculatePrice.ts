interface TotalPriceData {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

const totalPrice = (props: TotalPriceData): number => {
    const { price, discount, isInstallment, months } = props;

    const totalPriceWithInstallment =
        (price - (price / 100) * discount) / months;
    const totalPriceWithoutInstallment = price - (price / 100) * discount;

    if (isInstallment) {
        return totalPriceWithInstallment;
    }

    return totalPriceWithoutInstallment;
};

const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price);
