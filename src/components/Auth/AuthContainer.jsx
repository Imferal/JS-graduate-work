import {connect} from 'react-redux';
import {
  fetchBearerTokenAC,
  loadCookieAC,
  setBearerTokenAC,
} from '../../redux/apiReducer';
import {fetchDataRequestAC, fetchDataSuccess} from '../../redux/dataReducer';
import {fetchUserName, setUserNameAC} from '../../redux/userReducer';
import Auth from './Auth';

const mapStateToProps = state => {
  return {
    tokenIsFetching: state.api.BEARER_TOKEN_ISFETCHING,
    tokenIsLoaded: state.api.BEARER_TOKEN_ISLOADED,
    dataIsFetching: state.data.SERVERDATA_ISFETCHING,
    dataIsLoaded: state.data.SERVERDATA_ISLOADED,
    cookieIsLoaded: state.api.COOKIE_ISLOADED,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBearerToken: bearerToken => {
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

export default AuthContainer;
