import {
  DELETE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  POST_TODO_ERROR,
  POST_TODO_LOADING,
  POST_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
} from "./types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // get
    case GET_TODO_LOADING:
      return { ...state, loading: true };
    case GET_TODO_SUCCESS:
      return { ...state, loading: false, data: payload };
    case GET_TODO_ERROR:
      return { ...state, loading: false, error: payload };
    // post
    case POST_TODO_LOADING:
      return { ...state, loading: true };
    case POST_TODO_SUCCESS:
      return { ...state, loading: false, data: [payload, ...state.data] };
    case POST_TODO_ERROR:
      return { ...state, loading: false, error: payload };
    // update
    case UPDATE_TODO_LOADING:
      return {...state, loading: true};
    case UPDATE_TODO_SUCCESS:
      return {...state, loading: false,data: state.data.map((item) =>item.id === payload.id ? payload : item),};
    case UPDATE_TODO_ERROR:
      return {...state,  loading:false,error:payload};
    // delete
    case DELETE_TODO_LOADING:
      return {...state, loading: true};
    case DELETE_TODO_SUCCESS:
      return {...state, loading:false, data: state.data.filter((item) => item.id !== payload),};
    case DELETE_TODO_ERROR:
      return {...state, loading : false ,error : payload,};
    default:
      return state;
  }
};

export default userReducer;
