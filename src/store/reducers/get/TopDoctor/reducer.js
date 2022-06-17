import { TOPDOCTOR_ERROR,  TOPDOCTOR_LOADING, TOPDOCTOR_SUCCESS, } from "./types"

const initialState = {
    doctorsData: [],
    loading: false,
    error: null,
}

export const getDoctors = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOPDOCTOR_LOADING:
            return {...state, loading: true }
        case TOPDOCTOR_SUCCESS:
            return {...state, doctorsData: payload , loading: false}
        case TOPDOCTOR_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}