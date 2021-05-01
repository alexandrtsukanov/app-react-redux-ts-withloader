import React, { useEffect } from 'react';
import { useSelectorTyped } from '../../hooks/useSelectorT';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/actionCreator/users';
import User from '../User/User';

const Users: React.FunctionComponent = () => {

  const { users, loading, error } = useSelectorTyped(store => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  if (loading) {
    return (
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
  }

  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  return (
    <>
      {Boolean(users.length) && users.map(el => (
        <div key={el.id}>
          <User 
            name={el.name}
          />
        </div>
      ))}
    </>
  )
}

export default Users
