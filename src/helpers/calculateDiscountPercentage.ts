export const calculateDiscountPercentage = (regularPrice: number, salePrice: number) => {
    const discountAmount = regularPrice - salePrice;
    const discountPercentage = (discountAmount / regularPrice) * 100;
    return Math.floor(discountPercentage);
};