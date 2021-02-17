import Gallery from './Gallery';
import {fetchMoreData} from '../../api/api';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {setActivePhoto} from '../../redux/dataReducer';
=======
import {setActivePhotoAC} from '../../redux/dataReducer';
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599

const mapStateToProps = state => {
  return {
    dataLength: state.data.results.length,
    dataIsFetching: state.data.SERVERDATA_ISFETCHING,
    dataIsLoaded: state.data.SERVERDATA_ISLOADED,
    results: state.data.results,
<<<<<<< HEAD
    activePhoto: state.data.ACTIVE_PHOTO,
=======
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    fetchMoreData: fetchMoreData,
    setActivePhoto: id => {
<<<<<<< HEAD
      dispatch (setActivePhoto (id));
=======
      dispatch (setActivePhotoAC (id));
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
    },
  };
};

const GalleryContainer = connect (mapStateToProps, mapDispatchToProps) (
  Gallery
);

export default GalleryContainer;
