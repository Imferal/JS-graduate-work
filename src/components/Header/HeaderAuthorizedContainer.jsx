import {connect} from 'react-redux';
import {unsplash} from '../../api/api';
import {removeBearerTokenAC} from '../../redux/apiReducer';
import HeaderAuthorized from './HeaderAuthorized';

const mapStateToProps = state => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      unsplash.auth.setBearerToken (null);
      dispatch (removeBearerTokenAC ());
    },
  };
};

const HeaderAuthorizedContainer = connect (
  mapStateToProps,
  mapDispatchToProps
) (HeaderAuthorized);

export default HeaderAuthorizedContainer;
