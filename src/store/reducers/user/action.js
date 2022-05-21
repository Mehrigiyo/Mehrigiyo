import {
  GET_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
} from "./types";
import { deleteTodo, getTodos, postTodos, updateTodo } from "./api";

export const getTodoData = () => async (dispatch) => {
  try {
    const { data } = await getTodos();
    dispatch({ type: GET_TODO_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postTodoData = (object) => async (dispatch) => {
  try {
    const { data } = await postTodos(object);
    dispatch({ type: POST_TODO_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoById = (id, object) => async (dispatch) => {
  try {
    const { data } = await updateTodo(id, object);
    await dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoById = (id) => async (dispatch) => {
  try {
    await deleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  } catch (error) {
    console.log(error);
  }
};
