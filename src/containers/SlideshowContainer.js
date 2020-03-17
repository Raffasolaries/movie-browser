import { connect } from 'react-redux';
import MovieSlideshow from '../components/MovieSlideshow';

const mapStateToProps = state => {
  return {
    movieList: state.movieList
  };
};

const MovieListContainer = connect(mapStateToProps)(MovieSlideshow);

export default MovieListContainer;
