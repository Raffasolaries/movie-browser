export const SHOW_MOVIE = 'SHOW_MOVIE';
export const LOAD_MOVIE_LIST = 'LOAD_TODO_LIST';
export const RENDER_MOVIE_LIST = 'RENDER_TODO_LIST';

export function showMovie(title) {
  return {
    type: SHOW_MOVIE,
    MovieItem: {
      _id: new Date().getTime(),
      title
    }
  };
}

export function loadMovieList() {
  return {
    type: LOAD_MOVIE_LIST
  };
}
