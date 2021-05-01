import React from 'react';

interface IPropsTodo {
  title: string
  id: number
}

const Todo: React.FunctionComponent<IPropsTodo> = (props) => {

  return (
    <>
      {props.id}: {props.title}
    </>
  )
}

export default Todo;
