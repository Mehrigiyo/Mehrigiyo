import { TYPEDOCTORGET_ERROR, TYPEDOCTORGET_LOADING, TYPEDOCTORGET_SUCCESS } from "./types";

export const getTypes = (data) => (dispatch) => {
    dispatch({
        type: TYPEDOCTORGET_SUCCESS,
        payload: data
    })

}