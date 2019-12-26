import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './components/App';
import {rootReducer} from "./store/reducers";
import * as serviceWorker from './serviceWorker';

export const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
