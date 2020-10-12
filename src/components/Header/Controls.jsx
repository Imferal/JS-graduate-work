import React from 'react';
import {Link} from 'react-router-dom';
import {changeActivePhotoAC, setActivePhotoAC} from '../../redux/dataReducer';
import s from './Controls.module.scss';

export default function Controls (props) {
  // Если данных нет (после рефреша), то возвращаем пустой див
  if (props.state.data.results[0] === undefined) {
    return <div />;
  }

  // Проверяем, является ли фотография первой в массиве
  let isPhotoFirst =
    props.state.data.results[0].id === props.state.data.ACTIVE_PHOTO.id;

  const changeSlide = side => {
    props.dispatch (changeActivePhotoAC (side));
    props.dispatch (setActivePhotoAC (props.state.data.ACTIVE_PHOTO.id));
  };

  // Если фотография первая - отключаем кнопку "назад"
  return (
    <div className={s.controls}>
      <button
        onClick={() => changeSlide ('left')}
        disabled={isPhotoFirst ? 'disabled' : ''}
      >
        Назад
      </button>
      <Link to={`/auth/`}><button>В галерею</button></Link>
      <button onClick={() => changeSlide ('right')}>
        Вперёд
      </button>
    </div>
  );
}
