import { Card, Button } from 'react-bootstrap';
import avatar from '../img/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/actions';
import Comment from './Comment';

export default function SinglePost(post) {
	const dispatch = useDispatch();
	const comments = useSelector((state) => {
		console.log(state);

		return state.comments.comments;
	});

	const handleToggleComments = (postId) => {
		dispatch(fetchComments(postId));
	};

	const { userId, title, body, id } = post.post;
	return (
		<Card className="mb-3">
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{body}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<img src={avatar} alt="Аватар автора" className="rounded-circle me-2" width={30} height={30} />
				<span>{userId}</span>
			</Card.Footer>
			<Button variant="light" onClick={() => handleToggleComments(id)}>
				Комментарии
			</Button>
			{comments.map((comment) => (
				<Comment comment={comment} key={comment.id} />
			))}
		</Card>
	);
}
