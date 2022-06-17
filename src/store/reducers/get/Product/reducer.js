import { PRODUCT_ERROR,  PRODUCT_LOADING, PRODUCT_SUCCESS, } from "./types"

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export const product = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_LOADING:
            return {...state, loading: true }
        case PRODUCT_SUCCESS:
            return {...state, data: payload , loading: false}
        case PRODUCT_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}