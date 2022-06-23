import { productget, DoctorByID} from "./api";

import { GET_TOPDOCTOR_LOADING, GET_TOPDOCTOR_SUCCESS, GET_TOPDOCTOR_ERROR ,
  GET_DOCTORBYID_LOADING, GET_DOCTORBYID_SUCCESS ,  GET_DOCTORBYID_ERROR} from "./types";

// GET specialist Doctors
export const actionGetDoctors = () => async (dispatch) => {
  await dispatch({ type: GET_TOPDOCTOR_LOADING });
  try {
    const { data } = await productget();
    await dispatch({ type: GET_TOPDOCTOR_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: GET_TOPDOCTOR_ERROR, payload: error });
  }
};

// GET spesialist Dostor  GET By Id
export const actionDoctorByID = (id) => async (dispatch) => {
  await dispatch({ type:GET_DOCTORBYID_LOADING });
  try {
    const { data } = await DoctorByID(id);
    await dispatch({ type:GET_DOCTORBYID_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type:GET_DOCTORBYID_ERROR, payload: error });
  }
};