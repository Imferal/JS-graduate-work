import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from '../Login/Login';
import GalleryContainer from '../Gallery/GalleryContainer';
import HeaderAuthorizedContainer
  from '../HeaderAuthorized/HeaderAuthorizedContainer';
import Api from '../Api/Api';
import Viewer from '../Viewer/Viewer';

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
      <Route exact path="/" render={() => <Login state={props.state} />} />
      <Route
        path="/auth/viewer/"
        render={() => <Viewer state={props.state} />}
      />
      <Route
        exact
        path="/auth"
        render={() => (
          <GalleryContainer state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Footer />
    </BrowserRouter>
  );
}
