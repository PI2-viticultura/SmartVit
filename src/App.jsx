import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Feedback from './scenes/feedback';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/feedback'>
          <Feedback />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
