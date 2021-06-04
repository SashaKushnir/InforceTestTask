import {ProductItemType} from "../products/productsR";

export const productItemA = {
    setCurrentProduct: (productI: ProductItemType) => ({type: "SET_CURRENT_PRODUCT", productI}) as const
}