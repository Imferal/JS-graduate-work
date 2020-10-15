import {connect} from 'react-redux';
import {
  fetchBearerTokenAC,
  loadCookieAC,
  setBearerTokenAC,
} from '../../redux/apiReducer';
import {
  fetchDataRequestAC,
  fetchDataSuccess,
  setActivePhotoAC,
  setJsxAC,
} from '../../redux/dataReducer';
import {fetchUserName, setUserNameAC} from '../../redux/userReducer';
import Authorization from './Authorization';

const mapStateToProps = state => {
  return {
    state: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBearerToken: bearerToken => {
      dispatch (setBearerTokenAC (bearerToken));
    },
    setJsx: jsx => {
      dispatch (setJsxAC (jsx));
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
    setActivePhoto: id => {
      dispatch (setActivePhotoAC (id));
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
    dispatch: dispatch,
  };
};

const AuthorizationContainer = connect (mapStateToProps, mapDispatchToProps) (
  Authorization
);

export default AuthorizationContainer;
