import { Container, Accordion, Button } from 'react-bootstrap';
import SinglePost from './SinglePost';
import { fetchPosts } from '../redux/actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from './Spinner';
import SearchPanel from './SearchPanel';

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.posts);
	const loading = useSelector((state) => state.loading.loading);
	const [searchText, setSearchText] = useState('');
	const [sortByTitle, setSortByTitle] = useState(false);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const handleSearch = (event) => {
		setSearchText(event.target.value);
	};

	const sortPostsByTitle = () => {
		setSortByTitle(!sortByTitle);
	};

	return (
		<div style={{ overflowY: 'auto', height: '100vh' }}>
			<Container>
				<Accordion flush>
					<h1>Список постов</h1>
					<SearchPanel searchText={searchText} onSearch={handleSearch} onClear={() => setSearchText('')} />
					<Button className="mb-3" variant="secondary" size="sm" onClick={sortPostsByTitle}>
						{sortByTitle ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
					</Button>
					{loading ? (
						<LoadingSpinner />
					) : (
						<>
							{posts.length ? (
								posts
									.filter((post) => post.title.includes(searchText))
									.sort((a, b) => (sortByTitle ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
									.map((post) => <SinglePost post={post} key={post.id} />)
							) : (
								<p>Постов пока нет</p>
							)}
						</>
					)}
				</Accordion>
			</Container>
		</div>
	);
};

export default PostList;
