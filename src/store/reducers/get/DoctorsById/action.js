import { DoctorByID} from "./api";
import {DOCTORBYID_ERROR,DOCTORBYID_LOADING,DOCTORBYID_SUCCESS } from "./types";


export const actionDoctorByID = (id) => async (dispatch) => {
  await dispatch({ type:DOCTORBYID_LOADING });
  try {
    const { data } = await DoctorByID(id);
    console.log(data,"doctorData");
    await dispatch({ type:DOCTORBYID_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type:DOCTORBYID_ERROR, payload: error });
  }
};