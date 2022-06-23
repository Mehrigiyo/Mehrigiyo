import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import { regestrationReducer } from "./reducers/user/regestration/reducer";
import { newsDataReduser } from "./reducers/news/reducer";
import { getTypeDoctors } from "./reducers/get/typesDoctor/reducer";
import { productType } from "./reducers/Shop/productType/reducer";
import {changeRouter} from "./ChangeRouter/reducer";
import { product } from "./reducers/Shop/Product/reducer";
import { dataDoctorsReduser } from "./reducers/Specialist/specialistDoctors/reducer";
import { loginReducer } from './reducers/loginPost/reducer'
import { usermeReducer } from './reducers/user/userMe/reduser';
import { favoritDoctors } from "./reducers/user/FavoritDoctor/reducer";
import {DataCommentByID} from './reducers/Comment/Doctor/reduser'
export default combineReducers({
    userReducer,
    regestrationReducer,
    newsDataReduser,
    getTypeDoctors,
    productType,
    changeRouter,
    product,
    dataDoctorsReduser,
    loginReducer,
    usermeReducer,
    favoritDoctors,
    DataCommentByID
    
});