import React, { Fragment } from 'react';

import { Switch, Route, Router } from 'react-router-dom';


import './App.css';

import Home from './pages/home';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/Natours' component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
