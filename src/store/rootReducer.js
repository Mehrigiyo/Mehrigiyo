import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import { regestrationReducer } from "./reducers/regestration/reducer";
import { getTypeDoctors } from "./reducers/get/typesDoctor/reducer";
import { productType } from "./reducers/get/productType/reducer";
export default combineReducers({
    userReducer,
    regestrationReducer,
    getTypeDoctors,
    productType
});