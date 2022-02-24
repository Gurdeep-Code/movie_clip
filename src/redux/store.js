import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesReducers from "./fetchMovies/moviesReducers"

const store = createStore(moviesReducers,applyMiddleware(thunk));

export default store;