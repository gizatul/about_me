import { Container, Row } from 'react-bootstrap';
import SinglePost from './SinglePost';

export default function Postlist({ posts }) {
	return (
		<Container>
			<h1>Список постов</h1>
			{posts.map((post) => (
				<SinglePost post={post} key={post} />
			))}
		</Container>
	);
}
