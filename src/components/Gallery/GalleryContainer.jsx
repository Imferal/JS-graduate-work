import Gallery from './Gallery';
import {fetchMoreData} from '../../api/api';
import {connect} from 'react-redux';
import {setActivePhoto} from '../../redux/dataReducer';

const mapStateToProps = state => {
  return {
    dataLength: state.data.results.length,
    dataIsFetching: state.data.SERVERDATA_ISFETCHING,
    dataIsLoaded: state.data.SERVERDATA_ISLOADED,
    results: state.data.results,
    activePhoto: state.data.ACTIVE_PHOTO,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    fetchMoreData: fetchMoreData,
    setActivePhoto: id => {
      dispatch (setActivePhoto (id));
    },
  };
};

const GalleryContainer = connect (mapStateToProps, mapDispatchToProps) (
  Gallery
);

export default GalleryContainer;
