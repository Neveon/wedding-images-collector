import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

import Home from './components/Home';
import UploadedImages from './components/UploadedImages';

import './App.css';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/images' component={UploadedImages} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
