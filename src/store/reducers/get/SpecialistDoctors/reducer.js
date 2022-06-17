import {SPECIALIST_DOCTORS_LOADING, SPECIALIST_DOCTORS_SUCCESS, SPECIALIST_DOCTORS_ERROR} from './types';
const initialState = {
    data: [],
    access: false,
    loading: true,
    error: null,}


    export const SpectalistDoctorDataReduser = (state = initialState, { type, payload }) => {
        switch (type) {
            case SPECIALIST_DOCTORS_LOADING:
                return { ...state, loading: true }
            case SPECIALIST_DOCTORS_SUCCESS:
                return { ...state, loading: false, access: true, data: payload }
            case SPECIALIST_DOCTORS_ERROR:
                return { ...state, loading: false, access: false, error: payload }
            default:
                return state
        }
    
    }