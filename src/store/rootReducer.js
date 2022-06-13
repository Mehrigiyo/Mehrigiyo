import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import {regestrationReducer} from "./reducers/regestration/reducer";
import { newsDataReduser } from "./reducers/get/news/reducer";
import { getTypeDoctors } from "./reducers/get/typesDoctor/reducer";
import { productType } from "./reducers/get/productType/reducer";
import {changeRouter} from "./ChangeRouter/reducer";
export default combineReducers({
    userReducer,
    regestrationReducer,
    newsDataReduser,
    getTypeDoctors,
    getTypeDoctors,
    productType,
    changeRouter
});