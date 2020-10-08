import React from 'react';
import s from './Viewer.module.scss';
import preloader from './../../assets/img/preloader.gif';
import Viewer from './Viewer';
import {loadActivePhotoAC} from '../../redux/dataReducer';
// import {Link} from 'react-router-dom';

const ViewerContainer = props => {
  console.log (props.state.data.ACTIVE_PHOTO);
  debugger;
  if (props.state.data.ACTIVE_PHOTO === null) {
    alert ('КУКУ!');
    props.dispatch (loadActivePhotoAC ());
  } else if (props.state.data.results.length > 0) {
    console.log ('OK. Photo is loading...');
    console.log ('Active Photo: ' + props.state.data.ACTIVE_PHOTO);
    return (
      <Viewer
        dispatch={props.dispatch}
        img={props.state.data.ACTIVE_PHOTO}
        state={props.state}
      />
    );
  } else {
    return (
      <div className={s.viewer__wrapper}>
        <img
          className={s.viewer__isLoading}
          src={preloader}
          alt="Загружается..."
        />
      </div>
    );
  }
};

export default ViewerContainer;
