import { favoritDoctors, fovoritDoctorPost, postfavoritDoctorDel} from "./api";

import { FAVORITEDOCTORS_TYPE_ERROR, FAVORITEDOCTORS_TYPE_LOADING, FAVORITEDOCTORS_TYPE_SUCCESS,
  FAVORITDOCTOR_TYPE_ERROR, FAVORITDOCTOR_TYPE_LOADING, FAVORITDOCTOR_TYPE_SUCCESS ,
  FAVORITEDOCTORDEL_TYPE_ERROR, FAVORITEDOCTORDEL_TYPE_LOADING, FAVORITEDOCTORDEL_TYPE_SUCCESS
} from "./types"


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


export const postFavoriteDoc = (id) => async (dispatch) => {
  console.log('postFavoriteDoc ' +    id);
  await dispatch({ type:  FAVORITDOCTOR_TYPE_LOADING , payload: id});
  try {
    const { data } = await fovoritDoctorPost(id);
    await dispatch({ type:  FAVORITDOCTOR_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type:  FAVORITDOCTOR_TYPE_ERROR, payload: error });
  }
};


export const favoritDoctorDel = (id) => async (dispatch) => {
  await dispatch({ type: FAVORITEDOCTORDEL_TYPE_LOADING, payload: id });
  try {
    const { data } = await postfavoritDoctorDel(id);
    await dispatch({ type: FAVORITEDOCTORDEL_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: FAVORITEDOCTORDEL_TYPE_ERROR, payload: error });
  }
};