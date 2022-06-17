import {SPECIALIST_DOCTORS_LOADING, SPECIALIST_DOCTORS_SUCCESS, SPECIALIST_DOCTORS_ERROR} from './types';


import {SPECIALIST_DOCTORS_GET_DATA} from './api'


export const SpscialistDoctorsGetData =  () => async (dispatch) => {
    await dispatch({ type: SPECIALIST_DOCTORS_LOADING });
    console.log('ishladi action');
    try {
        const { data } = await SPECIALIST_DOCTORS_GET_DATA();
        
        console.log(data);
        await dispatch({ type: SPECIALIST_DOCTORS_SUCCESS, payload: data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: SPECIALIST_DOCTORS_ERROR, payload: error });
    }
}