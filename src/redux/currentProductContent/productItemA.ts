import {CommentItemType, ProductItemType} from "../products/productsR";

export const productItemA = {
    setCurrentProduct: (productI: ProductItemType) => ({type: "SET_CURRENT_PRODUCT", productI}) as const,
    removeComment: (commentId: number) => ({type: "REMOVE_COMMENT", commentId}) as const,
    addComment: (commentI: CommentItemType) => ({type: "ADD_COMMENT", commentI}) as const,
}