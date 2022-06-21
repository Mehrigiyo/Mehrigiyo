import { productget} from "./api";
import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./types";


export const getTypes = () => async (dispatch) => {
  await dispatch({ type: PRODUCT_LOADING });
  try {
    const { data } = await productget();
    await dispatch({ type: PRODUCT_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR, payload: error });
  }
};