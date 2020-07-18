import React from 'react';
import './App.css';
import {Store} from "redux";
import {Provider} from "react-redux";
import Home from "./components/Home";

const App = ({store}: {store: Store<State>}) => (
    <Provider store={store}>
      <Home/>
    </Provider>
)

export default App;
