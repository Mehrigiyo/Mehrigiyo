import {
  DELETE_TODO_SUCCESS,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
} from "./types";

const initialState = {
  data: [],
  loading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_SUCCESS:
      return {
        ...state,
        data: payload.sort((a, b) => (a.title < b.title ? -1 : 1)),
      };
    case POST_TODO_SUCCESS:
      return { ...state, data: [...state.data, payload] };
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
