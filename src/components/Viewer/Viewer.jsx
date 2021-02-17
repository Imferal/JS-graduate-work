import React from 'react';
<<<<<<< HEAD
=======
import {useHistory} from 'react-router-dom';
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
import Description from '../_shared/Description/Description';
import s from './Viewer.module.scss';

const Viewer = props => {
<<<<<<< HEAD
  // Восстанавливаем стейт
  // if (props.activePhoto === null) {
  //   props.restoreActivePhoto();
  // }

  return (
    <main className={s.viewer__wrapper}>
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
    </main>
  );
  // }
=======
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
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
};

export default Viewer;
