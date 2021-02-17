import Viewer from './Viewer';
import { connect } from 'react-redux';
import { restoreActivePhoto } from '../../redux/dataReducer';

const mapStateToProps = state => {
  return {
    activePhoto: state.data.ACTIVE_PHOTO,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restoreActivePhoto: () => {
      dispatch(restoreActivePhoto());
    },
    dispatch: dispatch,
  };
};

const ViewerContainer = connect(mapStateToProps, mapDispatchToProps)(Viewer);
export default ViewerContainer;
