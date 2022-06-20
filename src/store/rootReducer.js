import { combineReducers } from "redux";
import userReducer from "./reducers/posts/reducer";
import { regestrationReducer } from "./reducers/regestration/reducer";
import { newsDataReduser } from "./reducers/get/news/reducer";
import { getTypeDoctors } from "./reducers/get/typesDoctor/reducer";
import { productType } from "./reducers/get/productType/reducer";
import {changeRouter} from "./ChangeRouter/reducer";
import { product } from "./reducers/get/Product/reducer";
import { getDoctors } from "./reducers/get/TopDoctor/reducer";
import { loginReducer } from './reducers/loginPost/reducer'
import { usermeReducer } from './reducers/get/userme/reducer';
import { getDoctorByID } from "./reducers/get/DoctorsById/reduser";
import { favoriteDoc } from "./reducers/post/FavoritDoctorPost/reducer";
import{ favoritDoctors} from "./reducers/get/FavoritDoctorGet/reducer"
import {favoritDocDelete} from "./reducers/delete/FavoriteDoctorDelet/reducer" 
export default combineReducers({
    userReducer,
    regestrationReducer,
    newsDataReduser,
    getTypeDoctors,
    productType,
    changeRouter,
    product,
    getDoctors,
    loginReducer,
    usermeReducer,
    getDoctorByID,
    favoriteDoc,
    favoritDoctors,
    favoritDocDelete

});