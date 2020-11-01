import React from 'react';
import {useHistory} from 'react-router-dom';
import Description from '../_shared/Description/Description';
import s from './Viewer.module.scss';

const Viewer = props => {
  const history = useHistory ();
  // debugger;
  if (props.activePhoto === null) {
    history.push ('/auth');
    return <div />;
  } else {
    return (
      <div className={s.viewer__wrapper}>
        <div className={s.viewer__container}>
          <div className={s.viewer__description}>
            <Description
              userhtml={props.activePhoto.user.links.html}
              username={props.activePhoto.user.username}
              photo={props.activePhoto}
              dispatch={props.dispatch}
              date={props.activePhoto.created_at
                .slice (0, 10)
                .replace (/-/g, '.')}
            />
          </div>
          <img
            className={s.viewer__photo}
            id={props.activePhoto.id}
            src={props.activePhoto.urls.regular}
            alt={props.activePhoto.alt_description}
            onClick={() => window.open (props.activePhoto.urls.full)}
          />
          <span />
        </div>
      </div>
    );
  }
};

export default Viewer;
