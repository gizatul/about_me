import { Container } from 'react-bootstrap';
import SinglePost from './SinglePost';
import { fetchPosts } from '../redux/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from './Spinner';

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.posts);
	const loading = useSelector((state) => state.loading.loading);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	console.log('render PostList');

	return (
		<Container>
			<h1>Список постов</h1>
			{loading ? <LoadingSpinner /> : <>{posts.length ? posts.map((post) => <SinglePost post={post} key={post.id} />) : <p>Постов пока нет</p>}</>}
		</Container>
	);
};

export default PostList;
