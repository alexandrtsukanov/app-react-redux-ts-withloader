import { Dispatch } from 'react';
import { TypesUsers } from '../types/users';
import { UserAction } from '../types/users';
import { IUser } from '../../interfaces/user';

const usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

export const getUsersThunk = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch ({
        type: TypesUsers.FETCH_USERS,
      });
      const response = await fetch(usersUrl);
      const initResult = await response.json();
      const result = initResult.map((el: any): IUser => {
        return {id: el.id, name: el.name, username: el.username}
      });
      setTimeout(() => {
        dispatch ({
          type: TypesUsers.GET_USERS_SUCCESS,
          payload: result,
        });
      }, 1000);
    } catch (e) {
      dispatch ({
        type: TypesUsers.GET_USERS_ERROR,
        payload: `Error occured: ${e}`,
      });
    };
  };
};
