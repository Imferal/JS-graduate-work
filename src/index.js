import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './components/App/App';
import './index.scss';
import {Provider} from 'react-redux';

let rerender = state => {
  ReactDOM.render (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById ('root')
  );
};

// Rerender page at first time
rerender (store.getState);

// Отдаём наш rerender в state
store.subscribe (() => {
  let state = store.getState ();
  rerender (state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register ();
