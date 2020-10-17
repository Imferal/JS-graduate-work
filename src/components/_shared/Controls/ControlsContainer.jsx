import {connect} from 'react-redux';
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSlide: side => {
      dispatch (changeActivePhotoAC (side));
    },
  };
};

const ControlsContainer = connect (mapStateToProps, mapDispatchToProps) (
  Controls
);

export default ControlsContainer;
