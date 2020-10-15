import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Logo from '../_shared/Logo';
import ControlsContainer from './ControlsContainer';

export default function HeaderCenter (props) {
  // debugger;

  return (
    <Switch>
      <Route
        path="/auth/viewer"
        component={() => (
          <ControlsContainer state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Route path="/auth/" component={Logo} />
    </Switch>
  );
}
