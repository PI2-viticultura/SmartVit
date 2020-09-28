import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Support from './scenes/support';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/support'>
          <Support />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
