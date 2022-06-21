
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
    await dispatch({ type: FAVORITEDOCTORDEL_TYPE_LOADING });
    try {
      const { data } = await postfavoritDoctorDel(id);
      await dispatch({ type: FAVORITEDOCTORDEL_TYPE_SUCCESS, payload: data?.data });
    } catch (error) {
      dispatch({ type: FAVORITEDOCTORDEL_TYPE_ERROR, payload: error });
    }
  };