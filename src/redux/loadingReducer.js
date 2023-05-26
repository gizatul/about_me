import { HIDE_LOADER, HIDE_LOADER_COMMENTS, SHOW_LOADER, SHOW_LOADER_COMMENTS } from './types';

const initialState = {
	loading: false,
	loadingComments: false,
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true };
		case HIDE_LOADER:
			return { ...state, loading: false };
		case SHOW_LOADER_COMMENTS:
			return { ...state, loadingComments: true };
		case HIDE_LOADER_COMMENTS:
			return { ...state, loadingComments: false };
		default:
			return state;
	}
};
