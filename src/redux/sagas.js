import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { FETCH_COMMENTS, FETCH_POSTS, REQUEST_COMMENTS, REQUEST_POSTS } from './types';
import axios from 'axios';
import { showLoader, hideLoader, showLoaderComments, hideLoaderComments } from './actions';

function* sagaWorkerPosts() {
	try {
		yield put(showLoader());
		const payload = yield call(fetchPosts);
		yield put({ type: FETCH_POSTS, payload });
		yield delay(500);
		yield put(hideLoader());
	} catch (error) {
		console.error('Error fetching posts:', error);
	}
}

async function fetchPosts() {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
	return await response.data;
}

function* sagaWorkerComments(action) {
	try {
		yield put(showLoaderComments());
		const payload = yield call(fetchComments, action.payload);
		yield put({ type: FETCH_COMMENTS, payload });
		yield delay(500);
		yield put(hideLoaderComments());
	} catch (error) {
		console.error('Error fetching comments:', error);
	}
}

async function fetchComments(postId) {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
	return await response.data;
}

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorkerPosts);
	yield takeEvery(REQUEST_COMMENTS, sagaWorkerComments);
}
