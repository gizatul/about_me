import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';

export const reducer = combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	loading: loadingReducer,
});
