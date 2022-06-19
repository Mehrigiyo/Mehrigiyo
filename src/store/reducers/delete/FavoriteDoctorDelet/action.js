
import { postfavoritDoctorDel } from "./api";
import { FAVORITEDOCTORDEL_TYPE_ERROR, FAVORITEDOCTORDEL_TYPE_LOADING, FAVORITEDOCTORDEL_TYPE_SUCCESS } from "./types";


export const favoritDoctorDel = (id) => async (dispatch) => {
  await dispatch({ type: FAVORITEDOCTORDEL_TYPE_LOADING });
  try {
    const { data } = await postfavoritDoctorDel(id);
    await dispatch({ type: FAVORITEDOCTORDEL_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: FAVORITEDOCTORDEL_TYPE_ERROR, payload: error });
  }
};