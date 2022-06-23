import {NEWS_LOADING, NEWS_SUCCESS, NEWS_ERROR} from './types';
import {newsGet} from './api'


export const NewsGetData =  () => async (dispatch) => {
    await dispatch({ type: NEWS_LOADING });
    try {
        const { data } = await newsGet();
        
        await dispatch({ type: NEWS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: NEWS_ERROR, payload: error });
    }
}
