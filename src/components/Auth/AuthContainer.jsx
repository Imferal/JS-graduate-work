import { connect } from 'react-redux';
import {
  fetchBearerToken,
  setBearerToken,
} from '../../redux/apiReducer';
import { fetchDataRequest, fetchDataSuccess, restoreActivePhoto, restorePhotosData } from '../../redux/dataReducer';
import { fetchUserName, restoreUserName, setUserName } from '../../redux/userReducer';
import Auth from './Auth';

const mapStateToProps = state => {
  return {
    tokenIsFetching: state.api.BEARER_TOKEN_ISFETCHING,
    tokenIsLoaded: state.api.BEARER_TOKEN_ISLOADED,
    dataIsFetching: state.data.SERVERDATA_ISFETCHING,
    dataIsLoaded: state.data.SERVERDATA_ISLOADED,
    dataIsRestored: state.data.SERVERDATA_ISRESTORED,
    activePhoto: state.data.ACTIVE_PHOTO,
    activePhotoIsRestored: state.data.ACTIVE_PHOTO_ISRESTORED,
    userNameIsRestored: state.user.USERNAME_ISRESTORED,
    userNameIsFetching: state.user.USERNAME_ISFETCHING,
    userNameIsLoaded: state.user.USERNAME_ISLOADED,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBearerToken: bearerToken => {
      dispatch(setBearerToken(bearerToken));
    },
    fetchUserName: () => {
      dispatch(fetchUserName());
    },
    setUserName: json => {
      dispatch(setUserName(json));
    },
    fetchDataRequest: () => {
      dispatch(fetchDataRequest());
    },
    fetchDataSuccess: json => {
      dispatch(fetchDataSuccess(json));
    },
    fetchBearerToken: () => {
      dispatch(fetchBearerToken());
    },
    restoreActivePhoto: () => {
      dispatch(restoreActivePhoto());
    },
    restorePhotosData: () => {
      dispatch(restorePhotosData());
    },
    restoreUserName: () => {
      dispatch(restoreUserName());
    }
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
