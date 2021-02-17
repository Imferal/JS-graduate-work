import React from 'react';
import {Link} from 'react-router-dom';
import s from './Controls.module.scss';

export default function Controls (props) {
  /* Проверяем, есть ли загруженные данные, и если есть,
     то является ли активное фото первым или последним
     Если фотография первая - отключаем кнопку "назад",
     если последняя - "вперёд" */
  let isPhotoFirst;
  let isPhotoLast;
  let lastPhoto = props.results.length - 1;

  // Если информация о выбранной фотографии не сохранилась - возвращаемся в галерею
  if (props.activePhoto === null) {
    window.location.href = '/cats/auth';
  }

  if (props.results[0]) {
    isPhotoFirst = props.results[0].id === props.activePhoto.id;
  }

  if (props.results && lastPhoto > 0) {
    isPhotoLast = props.results[lastPhoto].id === props.activePhoto.id;
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
        <button className={s.controls__button}>
          В галерею
        </button>
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
