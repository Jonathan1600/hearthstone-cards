import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store"
import thunk from "redux-thunk"
import { inject } from '@vercel/analytics';

const store = createStore(reducer, applyMiddleware(thunk));
inject()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
