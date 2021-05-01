import { IUser } from '../../interfaces/user';

export interface IUsersStore {
  users: IUser[]
  loading: boolean
  error: null | string
}

export enum TypesUsers {
  FETCH_USERS = 'FETCH_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_ERROR = 'GET_USERS_ERROR'
}

interface IFetchUsers {
  type: TypesUsers.FETCH_USERS
}

interface IGetUsersSuccess {
  type: TypesUsers.GET_USERS_SUCCESS
  payload: IUser[]
}

interface IGetUsersError {
  type: TypesUsers.GET_USERS_ERROR
  payload: string
}

export type UserAction = IFetchUsers | IGetUsersSuccess | IGetUsersError
