import React, {useState} from "react"
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from '@material-ui/core';
import { Modal } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {commonA} from "../../../redux/common/commonA";
import {NavLink, useParams, useRouteMatch} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },
    whiteColored: {
        color: "white"
    }
}))

export const Header = () => {
    const d = useDispatch()
    const classes = useStyles()
    const fullUrl = window.location.href
    // console.log(url)
    const showModal = () => {
        d(commonA.modalStatusToggle(true))
    }
    return <AppBar position={"static"}>
        <Toolbar>
            {!(fullUrl.includes("/products")) && <NavLink to={'/content/products'}>
                <IconButton color={'inherit'}>
                    <KeyboardBackspaceIcon className={classes.whiteColored}/>
                </IconButton>
            </NavLink>
            }<Typography className={classes.typographyStyles}>
                <span>Product site header</span>
            </Typography>
            <span onClick={showModal}>
                <IconButton color={"inherit"} size={"small"}>
                    Create new product

                </IconButton>    <IconButton color={"inherit"}>
                    <AddIcon color={"inherit"}/>
                </IconButton>
            </span>
        </Toolbar>
    </AppBar>
}