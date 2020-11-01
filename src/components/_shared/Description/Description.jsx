import React from 'react';
import s from './Description.module.scss';
import LikeButton from '../LikeButton/LikeButton';

const Description = props => {
  return (
    <div className={s.item__description}>
      <a href={props.userhtml} className={s.item__author}>
        {props.username}
      </a>
      <LikeButton photo={props.photo} dispatch={props.dispatch} />
      <p className={s.item__date}>
        {props.date}
      </p>
    </div>
  );
};

export default Description;
