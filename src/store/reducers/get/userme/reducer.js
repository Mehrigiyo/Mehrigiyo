import { GET_USERME_LOADING, GET_USERME_SUCCESS, GET_USERME_ERROR } from './types';



const initialState = {
    userData: {},
    access: false,
    error: false,
    loading: false,
}



export const usermeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERME_LOADING:
            return {...state, loading: true }
        case GET_USERME_SUCCESS:
            return {...state, loading: false, access: true, logindate: payload }
        case GET_USERME_ERROR:
            return {...state, loading: false, access: false, logindate: payload }
        default:
            return state
    }
}