import Viewer from './Viewer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    state: state,
    activePhoto: state.data.ACTIVE_PHOTO,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
  };
};

const ViewerContainer = connect (mapStateToProps, mapDispatchToProps) (Viewer);
export default ViewerContainer;
