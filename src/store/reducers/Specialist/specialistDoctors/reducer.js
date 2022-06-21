import { GET_TOPDOCTOR_LOADING,  GET_TOPDOCTOR_SUCCESS, GET_TOPDOCTOR_ERROR, 
    GET_DOCTORBYID_LOADING, GET_DOCTORBYID_SUCCESS, GET_DOCTORBYID_ERROR
} from "./types"

const initialState = {
    doctorsData: [],
    loading: false,
    error: null,
}
// getDoctors
export const dataDoctorsReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        // Get Doctor specialist Doctors
        case GET_TOPDOCTOR_LOADING:
            return {...state, loading: true }
        case GET_TOPDOCTOR_SUCCESS:
            return {...state, doctorsData: payload , loading: false}
        case GET_TOPDOCTOR_ERROR:
                return {...state, loading: false,  error: payload }

        // Get Doctor By ID bo'yicha
        case GET_DOCTORBYID_LOADING:
            return {...state, loading: true }
        case GET_DOCTORBYID_SUCCESS:
            return {...state, doctorsData: payload , loading: false}
        case GET_DOCTORBYID_ERROR:
                return {...state, loading: false,  error: payload }
        default:
            return state
    }

}