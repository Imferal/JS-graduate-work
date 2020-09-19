import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Route, BrowserRouter} from 'react-router-dom';
import Main from '../Main/Main';
import MainAuthorizedContainer from '../MainAuthorized/MainAuthorizedContainer';
import HeaderAuthorizedContainer
  from '../HeaderAuthorized/HeaderAuthorizedContainer';
import Api from '../Api/Api';

export default function App (props) {
  return (
    <BrowserRouter>
      <Api state={props.state} dispatch={props.dispatch} />
      <Route
        exact
        path="/"
        render={() => <Header state={props.state} dispatch={props.dispatch} />}
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
      <Route exact path="/" render={() => <Main state={props.state} />} />
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
    </BrowserRouter>
  );
}
