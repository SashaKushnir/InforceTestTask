import React, {ChangeEvent, FormEventHandler, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {commonA} from "../../redux/common/commonA";
import {Field, Form, Formik, useFormik} from 'formik';
import * as Yup from "yup"
import {makeStyles} from "@material-ui/core";
import {productsA} from "../../redux/products/productsA";
import {pushCommentT} from "../../redux/currentProductContent/productItemT";
import {CommentItemType} from "../../redux/products/productsR";

export interface CreateProductFormType {
    name: string
    count: number
    weight: number
}

const useStyles = makeStyles({
    toCenter: {
        textAlign: "center"
    },
    toCenterButton: {
        textAlign: "center",
        padding: "1%"
    }
})

interface CommentModalProps {
    modalMode: boolean
    setModalMode: (arg: boolean) => void
    commentsLength: number
    productId: number
}

export const CommentModal:React.FC<CommentModalProps> = ({modalMode, setModalMode, commentsLength,productId}) => {
    // const modalStatus = useSelector((state: RootState) => state.commonR.createProductModalStatus)
    const [open, setOpen] = React.useState(modalMode);
    const d = useDispatch()
    const classes = useStyles()
    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
        setModalMode(false)
    };

    useEffect(() => {
        if (modalMode)
            handleClickOpen()
    }, [modalMode])

    const validationSchema = Yup.object().shape({
        description: Yup.string().required('Required')
    });

    const formik = useFormik({
        initialValues: {
            description: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            const comment: CommentItemType = {
                id: commentsLength,
                productId: productId,
                description: values.description,
                date: new Date()
            }
            d(pushCommentT(comment))
            handleClose()
        },
    });

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle className={classes.toCenter} id="form-dialog-title">Creating new product</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <div className={classes.toCenterButton}>
                            <Button  variant={"outlined"} color={"primary"} type="submit">Submit</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
