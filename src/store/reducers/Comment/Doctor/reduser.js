import { GET_COMMENT_DOCTOR_ERROR, GET_COMMENT_DOCTOR_LOADING, GET_COMMENT_DOCTOR_SUCCESS } from "./types"

const initialState = {
    data: [],
    loading: true,
    error: null,
}


export const DataCommentByID = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COMMENT_DOCTOR_SUCCESS:
            return { ...state, loading: true }
        case GET_COMMENT_DOCTOR_LOADING:
            return { ...state, loading: false,  data: payload }
        case GET_COMMENT_DOCTOR_ERROR:
            return { ...state, loading: false,  error: payload }
        default:
            return state
    }

}
