import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { postsReducer } from './postsReducer';

export const reducer = combineReducers({
	posts: postsReducer,
	loading: loadingReducer,
});
