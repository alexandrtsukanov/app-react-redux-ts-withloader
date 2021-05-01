import React, { useEffect } from 'react';
import { useSelectorTyped } from '../../hooks/useSelectorT';
import { useDispatch } from 'react-redux';
import Todo from '../Todo/Todo';
import { getTodosThunk, setPageThunk } from '../../redux/actionCreator/todos';

const Todos: React.FunctionComponent = () => {

  const { todos, loading, error, page, limit } = useSelectorTyped(store => store.todos);
  const dispatch = useDispatch();
  const pages: number[] = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(getTodosThunk(page, limit));
  }, [page])

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
      {Boolean(todos.length) && todos.map(el => (
        <div key={el.id}>
          <Todo 
            title={el.title}
            id={el.id}
          />
        </div>
      ))}
      <div style={{display: 'flex'}}>
        {pages.map(el => (
          <div onClick={() => dispatch(setPageThunk(el))} style={{border: el === page ? '2px solid green' : '1px solid black'}} className="page">{el}</div>
        ))}
      </div>
    </>
  )
}

export default Todos;
