import { POST_LOGIN_LOADING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './types';
import { post } from './api'

export const loginPost = (object) => async(dispatch) => {
    await dispatch({ type: POST_LOGIN_LOADING });
    try {
        const { data } = await post(object);
        console.log(data, "bu login data");
        await dispatch({ type: POST_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: POST_LOGIN_ERROR, payload: error });
    }
}