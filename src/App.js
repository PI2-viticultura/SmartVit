import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Notification from './scenes/notification';
import Indicator from './scenes/indicator';
import Feedback from './scenes/feedback';
import Navbar from './components/Navbar';
import Support from './scenes/support';
import Pest from './scenes/pest';
import './App.css';
import { ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
          <Switch>
            <Route path='/support'>
              <Support />
            </Route>
            <Route path='/feedback'>
              <Feedback />
          </Route>
          <Route path='/pest'>
            <Pest />
          </Route>
          <Route path='/notifications'>
            <Notification />
          </Route>
          <Route path='/'>
            <Indicator />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;