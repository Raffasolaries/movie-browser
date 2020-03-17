// import { ADD_TODO } from '../actions';
import { RENDER_MOVIE_LIST } from '../actions';

const initialState = {
  movieList: []
};

export default function movieApp(state = initialState, action) {
  switch (action.type) {
    /* case ADD_TODO:
            let newToDoList = [
                ...state.toDoList,
                {
                    ...action.toDoItem
                }
            ];
            return {
                ...state,
                toDoList: newToDoList
            }; */
    case RENDER_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList
      };
    default:
      return state;
  }
}
