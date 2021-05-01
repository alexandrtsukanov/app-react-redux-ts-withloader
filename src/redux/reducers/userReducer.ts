import { IUsersStore } from '../types/users';
import { TypesUsers } from '../types/users';
import { UserAction } from '../types/users';

const initStore: IUsersStore = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (store: IUsersStore = initStore, action: UserAction): IUsersStore => {
  switch (action.type) {
    case TypesUsers.FETCH_USERS:
      return {...store, loading: true}
    case TypesUsers.GET_USERS_SUCCESS:
      return {...store, loading: false, users: action.payload}
    case TypesUsers.GET_USERS_ERROR:
      return {...store, users: [], loading: false, error: action.payload}
    default:
      return store
  }
}
