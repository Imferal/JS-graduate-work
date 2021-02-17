<<<<<<< HEAD
import { connect } from 'react-redux';
import {
  fetchBearerToken,
  setBearerToken,
} from '../../redux/apiReducer';
import { fetchDataRequest, fetchDataSuccess, restoreActivePhoto, restorePhotosData } from '../../redux/dataReducer';
import { fetchUserName, restoreUserName, setUserName } from '../../redux/userReducer';
=======
import {connect} from 'react-redux';
import {
  fetchBearerTokenAC,
  loadCookieAC,
  setBearerTokenAC,
} from '../../redux/apiReducer';
import {fetchDataRequestAC, fetchDataSuccess} from '../../redux/dataReducer';
import {fetchUserName, setUserNameAC} from '../../redux/userReducer';
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
import Auth from './Auth';

const mapStateToProps = state => {
  return {
    tokenIsFetching: state.api.BEARER_TOKEN_ISFETCHING,
    tokenIsLoaded: state.api.BEARER_TOKEN_ISLOADED,
    dataIsFetching: state.data.SERVERDATA_ISFETCHING,
    dataIsLoaded: state.data.SERVERDATA_ISLOADED,
<<<<<<< HEAD
    dataIsRestored: state.data.SERVERDATA_ISRESTORED,
    activePhoto: state.data.ACTIVE_PHOTO,
    activePhotoIsRestored: state.data.ACTIVE_PHOTO_ISRESTORED,
    userNameIsRestored: state.user.USERNAME_ISRESTORED,
    userNameIsFetching: state.user.USERNAME_ISFETCHING,
    userNameIsLoaded: state.user.USERNAME_ISLOADED,
=======
    cookieIsLoaded: state.api.COOKIE_ISLOADED,
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBearerToken: bearerToken => {
<<<<<<< HEAD
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
=======
      dispatch (setBearerTokenAC (bearerToken));
    },
    loadCookie: () => {
      dispatch (loadCookieAC ());
    },
    fetchUserName: () => {
      dispatch (fetchUserName ());
    },
    setUserName: json => {
      dispatch (setUserNameAC (json));
    },
    fetchDataRequest: () => {
      dispatch (fetchDataRequestAC ());
    },
    fetchDataSuccess: json => {
      dispatch (fetchDataSuccess (json));
    },
    fetchBearerToken: () => {
      dispatch (fetchBearerTokenAC ());
    },
  };
};

const AuthContainer = connect (mapStateToProps, mapDispatchToProps) (Auth);
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599

export default AuthContainer;
