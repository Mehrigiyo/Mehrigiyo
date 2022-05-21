import {
  DELETE_TODO_SUCCESS,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
} from "./types";

const initialState = {
  data: [],
  
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case POST_TODO_SUCCESS:
      return { ...state, data: [payload, ...state.data] };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default userReducer;
