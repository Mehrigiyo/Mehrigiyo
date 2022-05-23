import {
  GET_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_ERROR,
  POST_TODO_LOADING,
  POST_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_ERROR,
} from "./types";
import { deleteById, getAll, post, updateById } from "./api";

export const getAllPosts = () => async (dispatch) => {
  await dispatch({ type: GET_TODO_LOADING });
  try {
    const { data } = await getAll();
    await dispatch({ type: GET_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TODO_ERROR, payload: error });
  }
};

export const postPosts = (object) => async (dispatch) => {
  await dispatch({ type: POST_TODO_LOADING });
  try {
    const { data } = await post(object);
    await dispatch({ type: POST_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_TODO_ERROR, payload: error });
  }
};

export const updatePostsById = (id, object) => async (dispatch) => {
  await dispatch({ type: UPDATE_TODO_LOADING });
  try {
    const { data } = await updateById(id, object);
    await dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_TODO_ERROR, payload: error });
  }
};

export const deletePostsById = (id) => async (dispatch) => {
  await dispatch({ type: DELETE_TODO_LOADING });
  try {
    await deleteById(id);
    await dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_TODO_ERROR, payload: error });
  }
};
