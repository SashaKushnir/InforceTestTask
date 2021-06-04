import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {CommentItemType, ProductItemType} from "../../redux/products/productsR";
import {useParams} from "react-router-dom";
import {productItemA} from "../../redux/currentProductContent/productItemA";
import s from './ShowProductItemContent.module.css'

interface Param {
    id?: string
}

export const ShowProductItemContent = () => {
    const params = useParams<Param>()
    const d = useDispatch()
    const arr = useSelector((state:RootState) => state.productsR.products)
    let targetProduct: ProductItemType | undefined = useSelector((state: RootState) => state.productItemR.productItem)
    useEffect(() => {
        for(let i = 0; i < arr.length; i ++) {
            if(arr[i].id === Number(params.id)) {
              d(productItemA.setCurrentProduct(arr[i]))
            }
        }
    }, [])
    useEffect(() => {
       for(let i = 0; i < arr.length; i ++) {
            if(arr[i].id === Number(params.id)) {
                targetProduct = {...arr[i]}
            }
       }
    }, [params.id])



    console.log(targetProduct)
    return <div className={s.wrapper}>
        <h1>
            {targetProduct?.name}
        </h1>
        <div>
            <img src={targetProduct?.imageUrl}/>
        </div>
        <div>
            <b>Weight: </b>{targetProduct?.weight}
        </div>
        <div>
            <b>Amount: </b>{targetProduct?.count}
        </div>

        <div>
            <b>Comments: </b>
            {
                targetProduct?.comments.map((commentI, index) => <CommentI commentI={commentI} key={index}/>)
            }
        </div>
    </div>
}


interface CommentIProps {
    commentI: CommentItemType
}

const CommentI:React.FC<CommentIProps> = ({commentI}) => {
    return <div className={s.wrapComment}>
        <div></div>
        <div>
            {commentI.description}
        </div>
        <div>
            {commentI.date.getHours()} hr </div>
        <div>
            {commentI.date.getMinutes()} min
        </div>
        <div></div>
    </div>
}