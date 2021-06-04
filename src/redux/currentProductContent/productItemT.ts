import {CommentItemType, ProductItemType} from "../products/productsR";
import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {productItemA} from "./productItemA";

export const pushCommentT = (commentI: CommentItemType) => (d: Dispatch<ActionsTypes<typeof productItemA>>, getState: () => RootState) =>  {
    d(productItemA.addComment(commentI))
    getState().productsR.products.forEach((productI) => {
        if(productI.id === commentI.productId) {
            productI.comments.push(commentI)
        }
    })
}
export const removeCommentT = (commentI: CommentItemType) => (d: Dispatch<ActionsTypes<typeof productItemA>>, getState: () => RootState) =>  {
    d(productItemA.removeComment(commentI.id))
    getState().productsR.products.forEach((productI) => {
        if(productI.id === commentI.productId) {
            productI.comments.filter((commentMappedItem) => commentMappedItem.id !== commentI.id)
        }
    })
}