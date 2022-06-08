import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import {regestrationReducer} from "./reducers/regestration/reducer";


export default combineReducers({
    userReducer,
    regestrationReducer,
});