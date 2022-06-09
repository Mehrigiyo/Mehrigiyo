import { PRODUCT_TYPE_ERROR, PRODUCT_TYPE_LOADING, PRODUCT_TYPE_SUCCESS } from "./types"


const initialState = {
    data: [],
    loading: false,
    error: null,
}


export const productType = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_TYPE_LOADING:
            return {...state, loading: true }
        case PRODUCT_TYPE_SUCCESS:
            return {...state, data: payload , loading: false}
        case PRODUCT_TYPE_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}