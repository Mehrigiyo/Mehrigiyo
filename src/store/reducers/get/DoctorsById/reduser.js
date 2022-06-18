import { DOCTORBYID_ERROR,  DOCTORBYID_LOADING, DOCTORBYID_SUCCESS, } from "./types"

const initialState = {
    doctorData: [],
    loading: false,
    error: null,
}

export const getDoctorByID = (state = initialState, { type, payload }) => {
    switch (type) {
        case DOCTORBYID_LOADING:
            return {...state, loading: true }
        case DOCTORBYID_SUCCESS:
            return {...state, doctorsData: payload , loading: false}
        case DOCTORBYID_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}