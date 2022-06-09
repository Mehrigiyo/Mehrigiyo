import { productget} from "./api";
import { PRODUCT_TYPE_ERROR, PRODUCT_TYPE_LOADING, PRODUCT_TYPE_SUCCESS } from "./types";


export const getTypes = () => async (dispatch) => {
  await dispatch({ type: PRODUCT_TYPE_LOADING });
  try {
    const { data } = await productget();
    await dispatch({ type: PRODUCT_TYPE_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: PRODUCT_TYPE_ERROR, payload: error });
  }
};
