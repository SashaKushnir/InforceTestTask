import {CreateProductFormType} from "../../components/Modal/Modal";

export const productsA = {
    pushProduct: (product: CreateProductFormType) => ({type: "PUSH_PRODUCT", product}) as const,
    removeProduct: (id: number) => ({type: "REMOVE_PRODUCT", id}) as const
}