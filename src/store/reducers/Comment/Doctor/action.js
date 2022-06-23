import { commentDoctor } from './api';

import {GET_COMMENT_DOCTOR_ERROR, GET_COMMENT_DOCTOR_SUCCESS , GET_COMMENT_DOCTOR_LOADING} from './types'


export const GetDataCommentByID = ()=> async (dispatch)=>{
    await dispatch({ type: GET_COMMENT_DOCTOR_LOADING });
    try{
        const {data}   = await commentDoctor(1)
        dispatch({type:GET_COMMENT_DOCTOR_SUCCESS, payload: data })
    }catch (error) {
        dispatch({ type: GET_COMMENT_DOCTOR_ERROR, payload: error });
    }
}
