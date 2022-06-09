import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import {regestrationReducer} from "./reducers/regestration/reducer";
import { newsDataReduser } from "./reducers/get/news/reducer";
import { getTypeDoctors } from "./reducers/get/typesDoctor/reducer";

export default combineReducers({
    userReducer,
    regestrationReducer,
    newsDataReduser,
    getTypeDoctors,
});