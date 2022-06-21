import { REGESTRATION_LOADING, REGESTRATION_ERROR, REGESTRATION_SUCCESS } from "./types"

const initialState = {
    data: {},
    access: false,
    loading: false,
    error: null,
}


export const regestrationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGESTRATION_LOADING:
            return { ...state, loading: true }
        case REGESTRATION_SUCCESS:
            return { ...state, loading: false, access: true, data: payload }
        case REGESTRATION_ERROR:
            return { ...state, loading: false, access: false, error: payload }
        default:
            return state
    }

}
