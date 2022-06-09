import { REGESTRATION_ERROR, REGESTRATION_LOADING, REGESTRATION_SUCCESS } from "./types";
import { post } from './api'

export const regestrationPost = (object) => async (dispatch) => {
    await dispatch({ type: REGESTRATION_LOADING });
    try {
        const { data } = await post(object);
        await dispatch({ type: REGESTRATION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: REGESTRATION_ERROR, payload: error });
    }
}

