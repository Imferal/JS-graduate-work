import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Logo from '../_shared/Logo';
import Controls from './Controls';

export default function HeaderCenter (props) {
  // debugger;

  return (
    <Switch>
      <Route
        path="/auth/viewer"
        component={() => (
          <Controls state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Route path="/auth/" component={Logo} />
    </Switch>
  );
}
