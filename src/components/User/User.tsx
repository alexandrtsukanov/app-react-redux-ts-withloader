import React from 'react';

interface IPropsUser {
  name: string
}

const User: React.FunctionComponent<IPropsUser> = (props) => {
  return (
    <>
      {props.name}
    </>
  )
}

export default User;
