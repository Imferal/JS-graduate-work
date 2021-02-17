import { connect } from 'react-redux';
import { unsplash } from '../../api/api';
import { removeBearerToken } from '../../redux/apiReducer';
import Header from './Header';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    // username: localStorage.getItem('user'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      unsplash.auth.setBearerToken(null);
      dispatch(removeBearerToken());
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
