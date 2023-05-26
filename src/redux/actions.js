import { REQUEST_COMMENTS, HIDE_LOADER, REQUEST_POSTS, SHOW_LOADER, SHOW_LOADER_COMMENTS, HIDE_LOADER_COMMENTS } from './types';

export function showLoader() {
	return {
		type: SHOW_LOADER,
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER,
	};
}

export function fetchPosts() {
	return { type: REQUEST_POSTS };
}

export function fetchComments(postId) {
	return { type: REQUEST_COMMENTS, payload: postId };
}

export function showLoaderComments() {
	return {
		type: SHOW_LOADER_COMMENTS,
	};
}

export function hideLoaderComments() {
	return {
		type: HIDE_LOADER_COMMENTS,
	};
}
