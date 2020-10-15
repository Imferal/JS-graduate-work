import React from 'react';
import {useHistory} from 'react-router-dom';
import Description from '../_shared/Description';
import s from './Viewer.module.scss';

const Viewer = props => {
  // debugger;
  const history = useHistory ();

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
          <div className={s.viewer__cell}>
            <img
              className={s.viewer__photo}
              id={props.activePhoto.id}
              src={props.activePhoto.urls.regular}
              alt={props.activePhoto.alt_description}
            />
          </div>
          <span />
        </div>
      </div>
    );
  }
};

export default Viewer;
