import Unsplash from 'unsplash-js';
<<<<<<< HEAD
import { fetchDataRequest, fetchDataSuccess } from '../redux/dataReducer';
import store from '../redux/store';

let dispatch = store.dispatch.bind(store);

export const unsplash = new Unsplash({
  accessKey: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
  secret: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
  callbackUrl: `http://www.frontenddeveloper.ru/cats/auth`,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
=======
import {fetchDataRequestAC, fetchDataSuccess} from '../redux/dataReducer';
import store from '../redux/store';

let dispatch = store.dispatch.bind (store);

export const unsplash = new Unsplash ({
  accessKey: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
  secret: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
  callbackUrl: `${window.location.origin}/auth`,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
  'public',
  'write_likes',
]);

export const login = () => {
<<<<<<< HEAD
  window.location.assign(authenticationUrl);
=======
  window.location.assign (authenticationUrl);
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
};

// Загрузить больше фотографий
export const fetchMoreData = (dataLength, dataIsLoaded) => {
  if (dataIsLoaded) {
<<<<<<< HEAD
    dispatch(fetchDataRequest());
    unsplash.search
      .photos('cats', dataLength / 10 + 1, 10)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json));
=======
    console.log ('More Cats is fetching...');
    dispatch (fetchDataRequestAC ());
    unsplash.search
      .photos ('cats', dataLength / 10 + 1, 10)
      .then (res => res.json ())
      .then (json => {
        console.log ('More Cats added!');
        dispatch (fetchDataSuccess (json));
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
      });
  }
};
