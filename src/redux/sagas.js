import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { FETCH_POSTS, REQUEST_POSTS } from './types';
import axios from 'axios';
import { showLoader, hideLoader } from './actions';

function* sagaWorker() {
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

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker);
}

async function fetchPosts() {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15');
	return await response.data;
}
