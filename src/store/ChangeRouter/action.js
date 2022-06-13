import { CHANGE_ROUTER } from "./type";

export const actionChangeRouter = (data) => (dispatch) => {
  dispatch({
    type: CHANGE_ROUTER,
    payload: data,
  });
};
