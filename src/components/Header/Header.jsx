import React from 'react';
import s from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Logo from '../_shared/Logo/Logo';
import {login} from '../../api/api';
import ControlsContainer from '../_shared/Controls/ControlsContainer';

export default function Header (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>

        <Switch>
          <Route
            path="/auth/"
            component={() => (
              <div className={s.header__loggedIn + ' ' + s.header__left}>
                Мяу, {props.username ? props.username : ''}!
              </div>
            )}
          />

          <Route
            path="/"
            component={() => (
              <div className={s.header__left}>
                <Logo />
              </div>
            )}
          />
        </Switch>

        <div className={s.header__center}>
          <Switch>
            <Route
              path="/auth/viewer"
              component={() => (
                <ControlsContainer
                  state={props.state}
                  dispatch={props.dispatch}
                />
              )}
            />

            <Route path="/auth/" component={Logo} />
          </Switch>
        </div>

        <Switch>

          <Route
            path="/auth/"
            component={() => (
              <div className={s.header__loginContainer + ' ' + s.header__right}>
                <Link onClick={props.logout} to={'/'}>
                  <button className={s.header__loginButton}>
                    Выйти
                  </button>
                </Link>
              </div>
            )}
          />

          <Route
            path="/"
            component={() => (
              <div className={s.header__loginContainer + ' ' + s.header__right}>
                <button className={s.header__loginButton} onClick={login}>
                  Войти
                </button>
              </div>
            )}
          />

        </Switch>
      </div>
    </header>
  );
}
