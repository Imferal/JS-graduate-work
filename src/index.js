import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import Unsplash, {toJson} from 'unsplash-js';
import {fetchPhotosRequestAC, fetchPhotosSuccessAC} from './redux/reducer';

import './index.scss';

import App from './components/App/App';

const unsplash = new Unsplash ({
  accessKey: store.getState ().security.ACCESS_KEY,
});

store.dispatch (fetchPhotosRequestAC ());

const p = new Promise (function (resolve, reject) {
  unsplash.search.photos ('cats', 1).then (toJson).then (json => {
    let result = json;
    resolve (result);
  });
});

p.then (
  result => {
    store.dispatch (fetchPhotosSuccessAC (result));
  },
  error => {
    alert ('Rejected: ' + error);
  }
);

let rerender = state => {
  ReactDOM.render (
    <React.StrictMode>
      <App state={store.getState ()} dispatch={store.dispatch.bind (store)} />
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

//
//
//
//
//
//

//
//
//
//
//
//
//

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister ();
