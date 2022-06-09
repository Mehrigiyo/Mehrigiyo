import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import {regestrationReducer} from "./reducers/regestration/reducer";
import { newsDataReduser } from "./reducers/news/reducer";

export default combineReducers({
    userReducer,
    regestrationReducer,
    newsDataReduser

});