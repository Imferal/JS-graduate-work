import React from 'react';
import Footer from '../Footer/Footer';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from '../Login/Login';
import GalleryContainer from '../Gallery/GalleryContainer';
import HeaderContainer from '../Header/HeaderContainer';
import ViewerContainer from '../Viewer/ViewerContainer';
import AuthorizationContainer from '../Authorization/AuthorizationContainer';

export default function App (props) {
  return (
    <Router>
      <AuthorizationContainer />
      <HeaderContainer state={props.state} dispatch={props.dispatch} />
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
