import {
    GET_USERME_LOADING, GET_USERME_SUCCESS, GET_USERME_ERROR,
    PUT_USER_ME_LOADING, PUT_USER_ME_SUCCESS, PUT_USER_ME_ERROR } from './types';

import {get, userMePut } from './api';
import { setCurrentUser } from '../../../reducers/userme';

// User Me GET 
export const userGet = () => async(dispatch) => {
    await dispatch({ type: GET_USERME_LOADING });
    try {
        const { data } = await get();
        console.log(data, "bu userme get");
        setCurrentUser(data.data)
        await dispatch({ type: GET_USERME_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_USERME_ERROR, payload: error });
    }
}

// User me PUT

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