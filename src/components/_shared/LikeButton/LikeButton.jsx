import React from 'react';
import {toJson} from 'unsplash-js';
import {unsplash} from '../../../api/api';
import {changeLikeStatusAC, unsetJsxAC} from '../../../redux/dataReducer';
import s from './LikeButton.module.scss';

const LikeButton = props => {
  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    if (isLiked) {
      unsplash.photos.unlikePhoto (id).then (toJson).then (json => {
        props.dispatch (changeLikeStatusAC (json));
        props.dispatch (unsetJsxAC ());
      });
    } else {
      unsplash.photos.likePhoto (id).then (toJson).then (json => {
        props.dispatch (changeLikeStatusAC (json));
        props.dispatch (unsetJsxAC ());
      });
    }
  };
  // debugger;
  return (
    <button
      className={
        s.likeButton +
          ' ' +
          (props.photo.liked_by_user ? '' : s.likeButton_dislike)
      }
      onClick={() => toggleLike (props.photo.id, props.photo.liked_by_user)}
    >
      {props.photo.likes}
    </button>
  );
};

export default LikeButton;

// `likeButton ` + props.photo.liked_by_user ? '' : s.likeButton_dislike
