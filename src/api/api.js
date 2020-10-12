import {unsplash} from '../components/Api/Api';
import {
  fetchDataRequestAC,
  fetchDataSuccessAC,
  unsetJsxAC,
} from '../redux/dataReducer';
import store from '../redux/store';

let state = store.getState ();
let dispatch = store.dispatch.bind (store);

// Загрузить больше
export const fetchMoreData = dataLength => {
  if (state.data.SERVERDATA_ISLOADED) {
    console.log ('More Cats is fetching...');
    dispatch (fetchDataRequestAC ());
    unsplash.search
      .photos ('cats', dataLength / 10 + 1, 10)
      .then (res => res.json ())
      .then (json => {
        console.log ('More Cats added!');
        dispatch (fetchDataSuccessAC (json));
        dispatch (unsetJsxAC ());
      });
  }
};
