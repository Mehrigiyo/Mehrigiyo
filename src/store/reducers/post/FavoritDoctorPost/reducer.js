import { FAVORITDOCTOR_TYPE_ERROR, FAVORITDOCTOR_TYPE_LOADING, FAVORITDOCTOR_TYPE_SUCCESS } from "./types"


const initialState = {
    data: [],
    loading: false,
    error: null,
}


export const favoriteDoc = (state = initialState, { type, payload }) => {
    switch (type) {
        case FAVORITDOCTOR_TYPE_LOADING:
            return {...state, loading: true }
        case FAVORITDOCTOR_TYPE_SUCCESS:
            return {...state, data: payload , loading: false}
        case FAVORITDOCTOR_TYPE_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}