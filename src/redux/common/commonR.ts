import {ActionsTypes} from "../store";
import {commonA} from "./commonA";


interface InitialCommonType {
    createProductModalStatus: boolean
}


const initialCommon: InitialCommonType = {
    createProductModalStatus: false
}

export const commonR = (common: InitialCommonType = initialCommon, action: ActionsTypes<typeof commonA>): InitialCommonType => {
    switch (action.type) {
        case "MODAL_STATUS_TOGGLE":
            return {
                ...common,
                createProductModalStatus: action.status
            }
        default:
            return common
    }
}
