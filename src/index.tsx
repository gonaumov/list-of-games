import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {initialState} from "./initialState";
import {reducer} from "./reducers";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore, compose } from "redux";

const store = createStore(
    reducer, initialState,
    compose(
        devToolsEnhancer({}))
)

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
