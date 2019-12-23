import React from 'react';

import HeaderTodoComponent from "./header/HeaderTodoComponent";
import MainComponent from "./todos/MainComponent";

import '../css/styles.css';
import MainFooterComponent from "./footer/MainFooterComponent";

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
