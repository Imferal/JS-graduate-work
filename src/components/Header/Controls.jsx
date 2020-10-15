import React from 'react';
import {Link} from 'react-router-dom';
// import {changeActivePhotoAC, setActivePhotoAC} from '../../redux/dataReducer';
import s from './Controls.module.scss';

export default function Controls (props) {
  // Если фотография первая - отключаем кнопку "назад"
  let isPhotoFirst;
  let isPhotoLast;

  if (props.results[0]) {
    isPhotoFirst = props.results[0].id === props.activePhotoId;
  }
  return (
    <div className={s.controls}>
      <button
        onClick={() => props.changeSlide ('left')}
        disabled={isPhotoFirst ? 'disabled' : ''}
        className={s.controls__button}
      >
        Назад
      </button>
      <Link to={`/auth/`}>
        <button className={s.controls__button}>В галерею</button>
      </Link>
      <button
        onClick={() => props.changeSlide ('right')}
        disabled={isPhotoLast ? 'disabled' : ''}
        className={s.controls__button}
      >
        Вперёд
      </button>
    </div>
  );
}
