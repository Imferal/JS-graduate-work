<<<<<<< HEAD
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
=======
import {connect} from 'react-redux';
import {unsplash} from '../../api/api';
import {removeBearerTokenAC} from '../../redux/apiReducer';
import Header from './Header';

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

const HeaderContainer = connect (mapStateToProps, mapDispatchToProps) (Header);

export default HeaderContainer;
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
