import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import UploadedImages from './components/UploadedImages';

import './App.css';

function App() {
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
