import React from 'react';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../api/api';
import { changeLikeStatus } from '../../../redux/dataReducer';
import s from './LikeButton.module.scss';
import { ReactComponent as HeartSvg } from './../../../assets/img/heart.svg';
import { ReactComponent as PawSvg } from './../../../assets/img/paw.svg';

const LikeButton = props => {
  const likeAnimation = s.animation + ' ' + s.confetti + ' ' + s.liked;

  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    if (isLiked) {
      unsplash.photos.unlikePhoto(id).then(toJson).then(json => {
        props.dispatch(changeLikeStatus(json));
      });
    } else {
      unsplash.photos.likePhoto(id).then(toJson).then(json => {
        props.dispatch(changeLikeStatus(json));
      });
    }
  };

  if (props.photo == null) {
    return <div />;
  } else {
    return (
      <button
        onClick={() => toggleLike(props.photo.id, props.photo.liked_by_user)}
        className={
          s.paw__button + ' ' + (props.photo.liked_by_user ? likeAnimation : '')
        }
      >
        <div className={s.text}>
          <HeartSvg />
        </div>
        <span>{props.photo.likes}</span>
        <div className={s.paws}>
          <PawSvg className={s.paw} />
          <div className={s.paw__effect}>
            <div />
          </div>
        </div>
      </button>
    );
  }
};

export default LikeButton;
