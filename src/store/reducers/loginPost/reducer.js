import { POST_LOGIN_LOADING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './types';



const initialState = {
    logindate: {},
    access: false,
    error: false,
    loading: false,
}



export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_LOGIN_LOADING:
            return {...state, loading: true }
        case POST_LOGIN_SUCCESS:
            return {...state, loading: false, access: true, logindate: payload }
        case POST_LOGIN_ERROR:
            return {...state, loading: false, access: false, logindate: payload }
        default:
            return state
    }
}