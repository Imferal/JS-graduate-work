import Unsplash from 'unsplash-js';
import {
  fetchDataRequestAC,
  fetchDataSuccess,
  unsetJsxAC,
} from '../redux/dataReducer';
import store from '../redux/store';

let dispatch = store.dispatch.bind (store);

export const unsplash = new Unsplash ({
  accessKey: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
  secret: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
  callbackUrl: `${window.location.origin}/auth`,
  // bearerToken: null,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
  'public',
  'write_likes',
]);

export const login = () => {
  window.location.assign (authenticationUrl);
};

// Загрузить больше фотографий
export const fetchMoreData = (dataLength, dataIsLoaded) => {
  if (dataIsLoaded) {
    console.log ('More Cats is fetching...');
    dispatch (fetchDataRequestAC ());
    unsplash.search
      .photos ('cats', dataLength / 10 + 1, 10)
      .then (res => res.json ())
      .then (json => {
        console.log ('More Cats added!');
        dispatch (fetchDataSuccess (json));
        dispatch (unsetJsxAC ());
      });
  }
};
