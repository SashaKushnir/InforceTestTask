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

export const FormDialog = () => {
    const modalStatus = useSelector((state: RootState) => state.commonR.createProductModalStatus)
    const [open, setOpen] = React.useState(false);
    const d = useDispatch()
    const classes = useStyles()
    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
        d(commonA.modalStatusToggle(false))
    };

    useEffect(() => {
        if (modalStatus)
            handleClickOpen()
    }, [modalStatus])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required')
            .min(2, 'Too Short')
            .matches(
                /^\S.{0,48}\S$/, "don't start or end with space"
            )
            .max(50, "Too long")
        ,
        count: Yup.string().required('Required')
            .max(10, 'Too Long!')
            .matches(/^[0-9]$/, "only numbers!"),
        weight: Yup.string().required('Required')
            .max(10, 'Too Long!')
            .matches(/^\d+$/, "only numbers!")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            count: 1,
            weight: 1000
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            d(productsA.pushProduct(values))
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
                            id="name"
                            name="name"
                            label="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            fullWidth
                            id="count"
                            name="count"
                            label="Count"
                            value={formik.values.count}
                            onChange={formik.handleChange}
                            error={formik.touched.count && Boolean(formik.errors.count)}
                            helperText={formik.touched.count && formik.errors.count}
                        />
                        <TextField
                            fullWidth
                            id="weight"
                            name="weight"
                            label="Weight"
                            value={formik.values.weight}
                            onChange={formik.handleChange}
                            error={formik.touched.weight && Boolean(formik.errors.weight)}
                            helperText={formik.touched.weight && formik.errors.weight}
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
