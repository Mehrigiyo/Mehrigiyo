import { FAVORITEDOCTORS_TYPE_ERROR, FAVORITEDOCTORS_TYPE_LOADING, FAVORITEDOCTORS_TYPE_SUCCESS,
      FAVORITDOCTOR_TYPE_ERROR, FAVORITDOCTOR_TYPE_LOADING, FAVORITDOCTOR_TYPE_SUCCESS ,
      FAVORITEDOCTORDEL_TYPE_ERROR, FAVORITEDOCTORDEL_TYPE_LOADING, FAVORITEDOCTORDEL_TYPE_SUCCESS
    } from "./types"


const initialState = {
    favoriteDoc: [],
    loading: false,
    error: null,
}


export const favoritDoctors = (state = initialState, { type, payload }) => {
    switch (type) {
        // GET
        case FAVORITEDOCTORS_TYPE_LOADING:
            return {...state, loading: true }
        case FAVORITEDOCTORS_TYPE_SUCCESS:
            return {...state, favoriteDoc: payload , loading: false}
        case FAVORITEDOCTORS_TYPE_ERROR:
                return {...state, loading: false,  error: payload }


        // POST
        case FAVORITDOCTOR_TYPE_LOADING:
            return {...state, loading: payload }
        case FAVORITDOCTOR_TYPE_SUCCESS:
            return {...state,  loading: false}
        case FAVORITDOCTOR_TYPE_ERROR:
                return {...state, loading: false,  error: payload }

        // DELETE
        case FAVORITEDOCTORDEL_TYPE_LOADING:
            return {...state, loading: payload }
        case FAVORITEDOCTORDEL_TYPE_SUCCESS:
            return {...state, loading: false}
        case FAVORITEDOCTORDEL_TYPE_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}