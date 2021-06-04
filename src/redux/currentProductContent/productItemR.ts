import {ActionsTypes} from "../store";
import {productItemA} from "./productItemA";
import {ProductItemType} from "../products/productsR";


interface InitialProductItemType {
    productItem?: ProductItemType
}


const initialProductItem : InitialProductItemType = {
}

export const productItemR = (productItem: InitialProductItemType = initialProductItem, action: ActionsTypes<typeof productItemA>):InitialProductItemType => {
    switch (action.type) {
        case "SET_CURRENT_PRODUCT":
            return {
                ...productItem,
                productItem: {...action.productI}
            }
        default:
            return productItem
    }
}
