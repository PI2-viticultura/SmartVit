import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Feedback from './scenes/feedback';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path='/feedback'>
            <Feedback />
          </Route>
         </Switch>
    </BrowserRouter>
  );
}

export default App;
