import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/jokes" component={Jokes} />

    </div>
  );
}

export default App;
