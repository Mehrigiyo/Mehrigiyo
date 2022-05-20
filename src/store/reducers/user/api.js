import axios from "axios";

export const getTodos = () =>
  axios.get(`https://jsonplaceholder.typicode.com/posts`);

export const postTodos = (data) =>
  axios.post(`https://jsonplaceholder.typicode.com/posts`,data,{
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  });

export const deleteTodo = (id) =>
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
