import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {ProductItem} from "./ProductItem";
import {Grid} from "@material-ui/core";

export const Products = () => {

    const products = useSelector((state:RootState) => state.productsR.products).map((productI, index) =>
    <ProductItem productI={productI} key={index}/>)

    return <div>
        <Grid container={true} spacing={2}>
            {products}
        </Grid>
    </div>
}