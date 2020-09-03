import React from 'react';
import s from './Footer.module.scss';

export default function Footer () {
  return (
    <footer className={s.footer__wrapper}>
      <div className={s.footer__body}>
        <p className={s.footer__paragraph}>Владимир Смирнов, 2020</p>
      </div>
    </footer>
  );
}
