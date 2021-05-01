import React from 'react';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
        <br />
        <BrowserRouter>
          <ul>
            <nav>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/todos">Todo list</NavLink></li>
            </nav>
          </ul>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
