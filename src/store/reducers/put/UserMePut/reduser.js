import { PUT_USER_ME_LOADING, PUT_USER_ME_SUCCESS, PUT_USER_ME_ERROR } from './types';



const initialState = {
    logindate: {},
    access: false,
    error: false,
    loading: false,
}



export const dataUserMe = (state = initialState, { type, payload }) => {
    switch (type) {
        case PUT_USER_ME_LOADING:
            return {...state, loading: true }
        case PUT_USER_ME_SUCCESS:
            return {...state, loading: false, access: true, logindate: payload }
        case PUT_USER_ME_ERROR:
            return {...state, loading: false, access: false, logindate: payload }
        default:
            return state

    }
}