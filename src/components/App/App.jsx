import React from 'react';
import s from './App.module.scss';

import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import {Route, BrowserRouter} from 'react-router-dom';

import MainContainer from '../Main/MainContainer';
import MainAuthorizedContainer from '../MainAuthorized/MainAuthorizedContainer';
import HeaderAuthorizedContainer
  from '../HeaderAuthorized/HeaderAuthorizedContainer';

export default function App (props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className={s.app__wrapper}>

        <Route
          exact
          path="/"
          render={() => (
            <Header state={props.state} dispatch={props.dispatch} />
          )}
        />
        <Route
          path="/auth"
          render={() => (
            <HeaderAuthorizedContainer
              state={props.state}
              dispatch={props.dispatch}
            />
          )}
        />

        {/* <Header state={props.state} dispatch={props.dispatch} /> */}
        <Route
          exact
          path="/"
          render={() => (
            <MainContainer state={props.state} dispatch={props.dispatch} />
          )}
        />
        <Route
          path="/auth"
          render={() => (
            <MainAuthorizedContainer
              state={props.state}
              dispatch={props.dispatch}
            />
          )}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
