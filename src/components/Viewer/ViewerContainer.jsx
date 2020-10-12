import React from 'react';
import Viewer from './Viewer';
import {useHistory} from 'react-router-dom';

const ViewerContainer = props => {
  const history = useHistory ();

  if (props.state.data.ACTIVE_PHOTO === null) {
    history.push ('/auth');
    return <div />;
  } else {
    return (
      <Viewer
        dispatch={props.dispatch}
        img={props.state.data.ACTIVE_PHOTO}
        state={props.state}
      />
    );
  }
};

export default ViewerContainer;
