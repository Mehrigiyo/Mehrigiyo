import { POST_LOGIN_LOADING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './types';



const initialState = {
    date: {},
    access: false,
    error: false,
    loading: false,
}



export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_LOGIN_LOADING:
            return {...state, loading: true }
        case POST_LOGIN_SUCCESS:
            return {...state, loading: false, access: true, data: payload }
        case POST_LOGIN_ERROR:
            return {...state, loading: false, access: false, error: payload }
        default:
            return state
    }
}