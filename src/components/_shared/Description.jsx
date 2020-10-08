import React from 'react';
import s from './Description.module.scss';
import LikeButton from './LikeButton';

const Description = props => {
  return (
    <div className={s.item__description}>
      <a href={props.userhtml}>
        {props.username}
      </a>
      <LikeButton photo={props.photo} dispatch={props.dispatch} />
      <p>
        {props.date}
      </p>
    </div>
  );
};

export default Description;
