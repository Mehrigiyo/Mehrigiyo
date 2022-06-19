import { favoritDoctors} from "./api";
import { FAVORITEDOCTORS_TYPE_ERROR, FAVORITEDOCTORS_TYPE_LOADING, FAVORITEDOCTORS_TYPE_SUCCESS } from "./types";


export const getFavoritDoctors = () => async (dispatch) => {
  await dispatch({ type: FAVORITEDOCTORS_TYPE_LOADING });
  try {
    const { data } = await favoritDoctors();
    console.log("Bu DATA FAVORITE DOCTORS", data);
    await dispatch({ type: FAVORITEDOCTORS_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: FAVORITEDOCTORS_TYPE_ERROR, payload: error });
  }
};