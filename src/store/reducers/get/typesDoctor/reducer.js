import { TYPEDOCTORGET_ERROR, TYPEDOCTORGET_LOADING, TYPEDOCTORGET_SUCCESS } from "./types"

const initialState = {
    data: [],
    // access: false,
    // loading: false,
    // error: null,
}


export const getTypeDoctors = (state = initialState, { type, payload }) => {
    switch (type) {
        // case TYPEDOCTORGET_LOADING:
        //     return {...state, loading: true }
        case TYPEDOCTORGET_SUCCESS:
            return {...state, data: payload }
            // case TYPEDOCTORGET_ERROR:
            //     return {...state, loading: false, access: false, error: payload }
        default:
            return state
    }

}