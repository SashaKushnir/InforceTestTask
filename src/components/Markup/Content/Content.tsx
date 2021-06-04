import React from 'react'
import {Products} from "../../Products/Products";
import {useDispatch} from "react-redux";
import {FormDialog} from "../../Modal/Modal";
import {Redirect, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import {ShowProductItemContent} from "../../ShowProductItemContent/ShowProductItemContent";

export const Content = () => {
    const d = useDispatch()
    const {url} = useRouteMatch()
    const useParam = useParams()
    return <div>
        <Switch>
            <Redirect exact from={url} to={`${url}/products`}/>
            <Route path={`${url}/products`} render={() => <>
                <Products/>
                <FormDialog/></>}/>
            <Route path={`${url}/productItem/:id`} render={() => <>
            <ShowProductItemContent/></>}/>
        </Switch>
    </div>
}