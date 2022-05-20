import { GET_TODO_SUCCESS, DELETE_TODO_SUCCESS } from "./types";
import { deleteTodo, getTodos, postTodos } from "./api";

export const getTodoData = () => async (dispatch) => {
  try {
    const { data } = await getTodos();
    dispatch({ type: GET_TODO_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postTodoData = (data) => async (dispatch) => {
  try {
    await postTodos(data);
    dispatch({ type: GET_TODO_SUCCESS, payload: data });
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
