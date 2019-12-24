import React from 'react';
import { Link } from 'react-router-dom';

const MainFooterComponent = () => {
  return (
    <div className={"footer-container"}>
      <ul>
          <li>
            <Link to="/list">Todo list</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
      </ul>
    </div>
  );
};

export default MainFooterComponent;