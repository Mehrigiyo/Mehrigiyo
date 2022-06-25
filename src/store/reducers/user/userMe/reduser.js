import {
     GET_USERME_LOADING, GET_USERME_SUCCESS, GET_USERME_ERROR,
     PUT_USER_ME_LOADING, PUT_USER_ME_SUCCESS, PUT_USER_ME_ERROR } from './types';


     
const initialState = {
    logindate: {},
    access: false,
    error: false,
    loading: false,
}



export const usermeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // User Me GET
        case GET_USERME_LOADING :
            return {...state, loading: true }
        case GET_USERME_SUCCESS:
            return {...state, loading: false, access: true, logindate: payload }
        case GET_USERME_ERROR:
            return {...state, loading: false, access: false, logindate: payload }
        
        // User Me PUT

            case PUT_USER_ME_LOADING:
                return {...state, loading: true }
            case PUT_USER_ME_SUCCESS:
                console.log(payload);
                return {...state, loading: false, access: true, logindate: payload}
            case PUT_USER_ME_ERROR:
                return {...state, loading: false, access: false, logindate: payload }
        
        default:
            return state
    }
}