import axios from "axios";
import { Dispatch } from "react"
import { TodosAction, TypesTodos } from "../types/todos"

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTodosThunk = (page: number, limit: number) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({
        type: TypesTodos.FETCH_TODOS,
      });
      const response = await axios.get(todosUrl, {
        params: {_page: page, _limit: limit}
      });
      const result = await response.data;
      setTimeout(() => {
        dispatch({
          type: TypesTodos.GET_TODOS_SUCCESS,
          payload: result,
        })
      }, 500);
    } catch (e) {
      dispatch({
        type: TypesTodos.GET_TODOS_ERROR,
        payload: `Error occured: ${e}`
      });
    };
  };
};

export const setPageThunk = (page: number): TodosAction => {
  return {type: TypesTodos.GET_TODO_PAGE, payload: page}
}
