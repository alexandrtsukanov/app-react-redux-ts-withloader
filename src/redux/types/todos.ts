import { ITodo } from '../../interfaces/todo';

export interface ITodosStore {
  todos: ITodo[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TypesTodos {
  FETCH_TODOS = 'FETCH_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  GET_TODOS_ERROR = 'GET_TODOS_ERROR',
  GET_TODO_PAGE = 'GET_TODO_PAGE',
}

interface IFetchTodos {
  type: TypesTodos.FETCH_TODOS
}

interface IGetTodosSuccess {
  type: TypesTodos.GET_TODOS_SUCCESS
  payload: ITodo[]
}

interface IGetTodosError {
  type: TypesTodos.GET_TODOS_ERROR
  payload: string
}

interface IGetTodoPage {
  type: TypesTodos.GET_TODO_PAGE
  payload: number
}

export type TodosAction = IFetchTodos | IGetTodosSuccess | IGetTodosError | IGetTodoPage
