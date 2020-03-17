import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_MOVIE_LIST, RENDER_MOVIE_LIST } from '../actions';

export function* fetchMovieList() {
  const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_MOVIE_LIST, movieList: data });
}

export function* loadMovieList() {
  yield takeEvery(LOAD_MOVIE_LIST, fetchMovieList);
}

export default function* rootSaga() {
  yield all([loadMovieList()]);
}
