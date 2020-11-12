import React, { useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Notification from './scenes/notification';
import Indicator from './scenes/indicator';
import Feedback from './scenes/feedback';
import Navbar from './components/Navbar';
import Support from './scenes/support';
import Pest from './scenes/pest';
import Login from './scenes/login';
import Logout from "./scenes/logout";
import System from "./scenes/system";
import './App.css';
import { ThemeProvider } from '@chakra-ui/core';
import { isAuthenticated } from './services/auth';


const DefaultContainer = () => {
  return (
    <div className="container">
      <Route path='/support'>
        <Navbar />
        <Support />
      </Route>
      <Route path='/feedback'>
        <Navbar />
        <Feedback />
      </Route>
      <Route path='/pest'>
        <Navbar />
        <Pest />
      </Route>
      <Route path='/indicator'>
        <Navbar />
        <Indicator />
      </Route>
      <Route path='/notifications'>
        <Navbar />
        <Notification />
      </Route>
      <Route path="/system">
        <System />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
    </div>
  )
}

const LoginContainer = () => {
  return (
    <div className="container">
      <Route path="/" component={Login}/>
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/logout" component={Logout} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
          <Route component={DefaultContainer} />
          <Route component={LoginContainer} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
