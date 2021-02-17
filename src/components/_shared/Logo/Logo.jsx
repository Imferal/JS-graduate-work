import React from 'react';
import s from './Logo.module.scss';
import logo from './../../../assets/img/logo.png';

const Logo = props => {
  return <img className={s.logo} src={logo} alt="Логотип КотоФото" />;
};

export default Logo;
