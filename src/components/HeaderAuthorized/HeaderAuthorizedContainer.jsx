import React from 'react';

import Unsplash, {toJson} from 'unsplash-js';
import HeaderAuthorized from './HeaderAuthorized';

export default function HeaderAuthorizedContainer (props) {
  const logout = () => {
    alert ('Пока не реализовано');
  };

  const unsplash = new Unsplash ({
    accessKey: props.state.security.ACCESS_KEY,
    secret: props.state.security.SECRET,
    callbackUrl: 'http://localhost:3000/auth',
    bearerToken: props.state.security.TOKEN,
  });
  // debugger;
  const p = new Promise (function (resolve, reject) {
    // unsplash.auth.setBearerToken ('{BEARER_TOKEN}');
    unsplash.currentUser.profile ().then (toJson).then (json => {
      let result = json;
      resolve (result);
    });
  });

  p.then (
    result => {
      // props.store.dispatch (fetchPhotosSuccessAC (result));
      debugger;
    },
    error => {
      console.log ('Rejected: ' + error);
    }
  );

  return <HeaderAuthorized userLogin={props.state.userLogin} logout={logout} />;
}
