import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import HeaderTodoComponent from "./header/HeaderTodoComponent";
import MainComponent from "./todos/MainComponent";
import MainFooterComponent from "./footer/MainFooterComponent";
import AboutMeComponent from "./AboutMeComponent";

import '../css/styles.css';


const App = () => {
  return (
    <Router>
      <div>
        <HeaderTodoComponent />
        <Switch>
          <Route exact path="/">
            <Redirect  to="/list"/>
          </Route>
          <Route path="/list" component={MainComponent}/>
          <Route path="/about" component={AboutMeComponent}/>
        </Switch>
        <MainFooterComponent />
      </div>
    </Router>
  );
};

export default App;
