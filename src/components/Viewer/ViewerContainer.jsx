import Viewer from './Viewer';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { restoreActivePhoto } from '../../redux/dataReducer';

const mapStateToProps = state => {
  return {
=======
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    state: state,
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
    activePhoto: state.data.ACTIVE_PHOTO,
  };
};

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    restoreActivePhoto: () => {
      dispatch(restoreActivePhoto());
    },
=======
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
    dispatch: dispatch,
  };
};

<<<<<<< HEAD
const ViewerContainer = connect(mapStateToProps, mapDispatchToProps)(Viewer);
=======
const ViewerContainer = connect (mapStateToProps, mapDispatchToProps) (Viewer);
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
export default ViewerContainer;
