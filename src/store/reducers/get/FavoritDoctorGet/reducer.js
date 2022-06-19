import { FAVORITEDOCTORS_TYPE_ERROR, FAVORITEDOCTORS_TYPE_LOADING, FAVORITEDOCTORS_TYPE_SUCCESS } from "./types"


const initialState = {
    favoriteDoc: [],
    loading: false,
    error: null,
}


export const favoritDoctors = (state = initialState, { type, payload }) => {
    switch (type) {
        case FAVORITEDOCTORS_TYPE_LOADING:
            return {...state, loading: true }
        case FAVORITEDOCTORS_TYPE_SUCCESS:
            return {...state, favoriteDoc: payload , loading: false}
        case FAVORITEDOCTORS_TYPE_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}