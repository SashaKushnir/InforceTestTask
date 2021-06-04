import {ActionsTypes} from "../store";
import {productsA} from "./productsA";
import media from '../../images/img.png'
import fruitImg from '../../images/img_1.png'
function makestr() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
export const createProducts = (productNums: number = 5):Array<ProductItemType> => {
    const products: Array<ProductItemType> = []
    for (let i = 0; i < productNums; i++) {
        products.push({
            id: i + 1,
            imageUrl: media,
            name: "Product Name # " + (i + 1),
            count: Math.floor(Math.random() * 100),
            size: {
                width: 200,
                height: 200
            },
            weight: Math.floor(Math.random() * 100) + 'g',
            comments: [{
                id: 0,
                productId: i + 1,
                description: 'some text here',
                date: new Date()}]
        })
    }
    return products
}

interface InitialProductsType {
    products: Array<ProductItemType>
}

export interface ProductItemType {
    id: number
    imageUrl: string
    name: string
    count: number
    size: {
        width: number
        height: number
    },
    weight: string
    comments: Array<CommentItemType>
}

export interface CommentItemType {
    id: number
    productId: number
    description: string
    date: Date
}

const initialProducts : InitialProductsType = {
    products: createProducts()
}

export const productsR = (products: InitialProductsType = initialProducts, action: ActionsTypes<typeof productsA>):InitialProductsType => {
    switch (action.type) {
        case "PUSH_PRODUCT":
            const pushObj = {...action.product,
                weight: action.product.weight + "g",
                imageUrl: fruitImg,
                id : products.products.length + 1,
                size: {
                    width: 200,
                    height: 200
                },
                comments: []
            }
            return <InitialProductsType>{
                ...products,
                products: [...products.products,
                    pushObj
                ]
            }
        case "REMOVE_PRODUCT":
            return {
                ...products,
                products: [...products.products].filter((productI) => productI.id !== action.id)
            }
        default:
            return products
    }
}
