import { GET_USERME_LOADING, GET_USERME_SUCCESS, GET_USERME_ERROR } from './types';
import {get } from './api';
import { setCurrentUser } from '../../userme';

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