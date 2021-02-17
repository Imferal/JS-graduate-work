import React from 'react';
import s from './Footer.module.scss';

export default function Footer () {
  return (
    <footer className={s.footer__wrapper}>
      <div className={s.footer__body}>
        <p className={s.footer__paragraph}>Владимир Смирнов, 2020</p>
        <a
          href="http://www.frontenddeveloper.ru/"
          className={s.footer__link + ' ' + s.footer__paragraph}
        >
          Вернуться на основной сайт
        </a>
      </div>
    </footer>
  );
}
