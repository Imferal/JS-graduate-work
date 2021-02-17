import {connect} from 'react-redux';
<<<<<<< HEAD
import {changeActivePhoto} from '../../../redux/dataReducer';
import Controls from './Controls';

const mapStateToProps = state => {
  return {
    results: state.data.results,
    activePhoto: state.data.ACTIVE_PHOTO,
=======
import Cookies from 'universal-cookie';
import {changeActivePhotoAC} from '../../../redux/dataReducer';
import Controls from './Controls';

const cookies = new Cookies ();

const mapStateToProps = state => {
  return {
    results: state.data.results,
    activePhotoId: state.data.ACTIVE_PHOTO === null
      ? cookies.get ('activePhotoId')
      : state.data.ACTIVE_PHOTO.id,
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSlide: side => {
<<<<<<< HEAD
      dispatch (changeActivePhoto (side));
=======
      dispatch (changeActivePhotoAC (side));
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
    },
  };
};

const ControlsContainer = connect (mapStateToProps, mapDispatchToProps) (
  Controls
);

export default ControlsContainer;
