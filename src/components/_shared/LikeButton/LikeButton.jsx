import React from 'react';
<<<<<<< HEAD
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../api/api';
import { changeLikeStatus } from '../../../redux/dataReducer';
import s from './LikeButton.module.scss';
import { ReactComponent as HeartSvg } from './../../../assets/img/heart.svg';
import { ReactComponent as PawSvg } from './../../../assets/img/paw.svg';
=======
import {toJson} from 'unsplash-js';
import {unsplash} from '../../../api/api';
import {changeLikeStatusAC} from '../../../redux/dataReducer';
import s from './LikeButton.module.scss';
import {ReactComponent as HeartSvg} from './../../../assets/img/heart.svg';
import {ReactComponent as PawSvg} from './../../../assets/img/paw.svg';
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599

const LikeButton = props => {
  const likeAnimation = s.animation + ' ' + s.confetti + ' ' + s.liked;

  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    if (isLiked) {
<<<<<<< HEAD
      unsplash.photos.unlikePhoto(id).then(toJson).then(json => {
        props.dispatch(changeLikeStatus(json));
      });
    } else {
      unsplash.photos.likePhoto(id).then(toJson).then(json => {
        props.dispatch(changeLikeStatus(json));
=======
      unsplash.photos.unlikePhoto (id).then (toJson).then (json => {
        props.dispatch (changeLikeStatusAC (json));
      });
    } else {
      unsplash.photos.likePhoto (id).then (toJson).then (json => {
        props.dispatch (changeLikeStatusAC (json));
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
      });
    }
  };

  if (props.photo == null) {
    return <div />;
  } else {
    return (
      <button
<<<<<<< HEAD
        onClick={() => toggleLike(props.photo.id, props.photo.liked_by_user)}
=======
        onClick={() => toggleLike (props.photo.id, props.photo.liked_by_user)}
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
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
