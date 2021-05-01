import { act } from 'react-dom/test-utils';
import { ITodosStore, TodosAction, TypesTodos } from '../types/todos';

const initStore: ITodosStore = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (store: ITodosStore = initStore, action: TodosAction): ITodosStore => {
  switch (action.type) {
    case TypesTodos.FETCH_TODOS:
      return {...store, loading: true}
    case TypesTodos.GET_TODOS_SUCCESS:
      return {...store, loading: false, todos: action.payload}
    case TypesTodos.GET_TODOS_ERROR:
      return {...store, todos: [], loading: false, error: action.payload}
    case TypesTodos.GET_TODO_PAGE:
      return {...store, page: action.payload}
    default:
      return store
  }
}
