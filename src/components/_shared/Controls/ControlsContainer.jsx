import {connect} from 'react-redux';
import {changeActivePhoto} from '../../../redux/dataReducer';
import Controls from './Controls';

const mapStateToProps = state => {
  return {
    results: state.data.results,
    activePhoto: state.data.ACTIVE_PHOTO,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSlide: side => {
      dispatch (changeActivePhoto (side));
    },
  };
};

const ControlsContainer = connect (mapStateToProps, mapDispatchToProps) (
  Controls
);

export default ControlsContainer;
