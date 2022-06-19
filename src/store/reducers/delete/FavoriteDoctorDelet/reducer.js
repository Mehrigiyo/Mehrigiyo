import { FAVORITEDOCTORDEL_TYPE_ERROR, FAVORITEDOCTORDEL_TYPE_LOADING, FAVORITEDOCTORDEL_TYPE_SUCCESS } from "./types"


const initialState = {
    data: [],
    loading: false,
    error: null,
}


export const favoritDocDelete = (state = initialState, { type, payload }) => {
    switch (type) {
        case FAVORITEDOCTORDEL_TYPE_LOADING:
            return {...state, loading: true }
        case FAVORITEDOCTORDEL_TYPE_SUCCESS:
            return {...state, data: payload , loading: false}
        case FAVORITEDOCTORDEL_TYPE_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}