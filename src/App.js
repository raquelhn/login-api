import React, { useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {Container } from 'semantic-ui-react'
import Login from './components/Login';
import Content from './components/Content';



function App() {


  return (
    <div className="wrapper">
    <Container>
      <BrowserRouter>
             <Route exact path='/login-api' exact={true} component={Login}/>
             <Route path='/private' exact={true} component={Content}/>
      </BrowserRouter>
    </Container>
    </div>
  );
}
 
export default App;