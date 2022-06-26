import { POST_LOGIN_LOADING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './types';
import { post } from './api'
import { setToken } from '../userme';

export const loginPost = (object) => async(dispatch) => {
    await dispatch({ type: POST_LOGIN_LOADING });
    console.log(object);
    try {
        const {data} = await post(object);
        //  if(data?.data?.access)
        console.log(data);
          setToken(data?.access)
        await dispatch({ type: POST_LOGIN_SUCCESS, payload: data });

    } catch (error) {
        console.log('login error', error);
        dispatch({ type: POST_LOGIN_ERROR, payload: error });
    }
}