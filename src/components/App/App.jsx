import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from '../Login/Login';
import GalleryContainer from '../Gallery/GalleryContainer';
import HeaderAuthorizedContainer
  from '../HeaderAuthorized/HeaderAuthorizedContainer';
import Api from '../Api/Api';
import ViewerContainer from '../Viewer/ViewerContainer';

export default function App (props) {
  return (
    <Router>
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
        render={() => (
          <ViewerContainer state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Route
        exact
        path="/auth"
        render={() => (
          <GalleryContainer state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Footer />
    </Router>
  );
}
