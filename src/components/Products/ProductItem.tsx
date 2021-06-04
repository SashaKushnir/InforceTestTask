import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {ProductItemType} from "../../redux/products/productsR";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Grid,
    IconButton, makeStyles,
    Typography
} from "@material-ui/core";
import {ShareRounded} from "@material-ui/icons";
import avatar from '../../images/img.png'
import {productsA} from "../../redux/products/productsA";
import {useHistory} from 'react-router-dom';
import {productItemA} from "../../redux/currentProductContent/productItemA";

interface ProductItemProps {
    productI: ProductItemType
}

const useStyles = makeStyles({
    textAligning: {
        textAlign: "center"
    }
})

export const ProductItem: React.FC<ProductItemProps> = ({productI}) => {
    const classes = useStyles()
    const d = useDispatch()
    const history = useHistory()
    const removeProductItem = () => {
        d(productsA.removeProduct(productI.id))
    }
    const showInfo = () => {
        d(productItemA.setCurrentProduct(productI))
        history.push("/content/productItem/" + productI.id)
    }
    return <Grid item={true} xs={12} sm={6} md={4}>
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={avatar}/>
                }
                action={
                    <IconButton aria-label="settings" onClick={removeProductItem}>
                        <HighlightOffIcon/>
                    </IconButton>
                }
                title={productI.name}
                subheader={productI.weight}
            />
            <CardMedia
                style={{height: "150px"}}
                image={productI.imageUrl}
                title={productI.name}
            />
            <CardContent>
                <Typography>Amount: {productI.count}</Typography>
            </CardContent>
            <CardActions className={classes.textAligning}>
                <Grid container>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Button className={classes.textAligning} variant={"outlined"} size="small" onClick={showInfo}>show
                            info</Button>
                    </Grid>
                    <Grid item xs={4}/>
                </Grid>
            </CardActions>
        </Card>
    </Grid>
}