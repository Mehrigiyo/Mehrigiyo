import { userMePut } from './api';
import { PUT_USER_ME_LOADING, PUT_USER_ME_SUCCESS, PUT_USER_ME_ERROR } from './types';




export const putUser = (object) => async(dispatch) => {
    await dispatch({ type: PUT_USER_ME_LOADING });
    try {
        const { data } = await userMePut(object);
        console.log(data, "bu put data");
        // setToken(data.access)
        await dispatch({ type: PUT_USER_ME_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PUT_USER_ME_ERROR, payload: error });
    }
}