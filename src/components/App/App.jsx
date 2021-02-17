import React from 'react';
import Footer from '../Footer/Footer';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from '../Login/Login';
import GalleryContainer from '../Gallery/GalleryContainer';
import HeaderContainer from '../Header/HeaderContainer';
import ViewerContainer from '../Viewer/ViewerContainer';
import AuthContainer from '../Auth/AuthContainer';

export default function App (props) {
  return (
    <Router basename="/cats">
      <AuthContainer />
      <HeaderContainer />
      <Route exact path="/" component={Login} />
      <Route path="/auth/viewer/" component={ViewerContainer} />
      <Route exact path="/auth" component={GalleryContainer} />
      <Footer />
    </Router>
  );
}
