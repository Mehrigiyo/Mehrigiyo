import { fovoritDoctorPost} from "./api";
import {  FAVORITDOCTOR_TYPE_ERROR,  FAVORITDOCTOR_TYPE_LOADING,  FAVORITDOCTOR_TYPE_SUCCESS } from "./types";


export const postFavoriteDoc = (id) => async (dispatch) => {
  await dispatch({ type:  FAVORITDOCTOR_TYPE_LOADING });
  try {
    const { data } = await fovoritDoctorPost(id);
    await dispatch({ type:  FAVORITDOCTOR_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type:  FAVORITDOCTOR_TYPE_ERROR, payload: error });
  }
};