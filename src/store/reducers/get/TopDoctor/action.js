import { productget} from "./api";
import { TOPDOCTOR_ERROR, TOPDOCTOR_LOADING, TOPDOCTOR_SUCCESS } from "./types";


export const actionGetDoctors = () => async (dispatch) => {
  await dispatch({ type: TOPDOCTOR_LOADING });
  try {
    const { data } = await productget();
    console.log(data,"doctorsData");
    await dispatch({ type: TOPDOCTOR_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: TOPDOCTOR_ERROR, payload: error });
  }
};