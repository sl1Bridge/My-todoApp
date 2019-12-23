import React from 'react';

import HeaderTodoComponent from "./header/HeaderTodoComponent";
import MainComponent from "./todos/MainComponent";
import MainFooterComponent from "./footer/MainFooterComponent";

import '../css/styles.css';


const App = () => {
  return (
    <div>
      <HeaderTodoComponent />
      <MainComponent />
      <MainFooterComponent />
    </div>
  );
};

export default App;
