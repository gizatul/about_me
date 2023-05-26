import { Card, Button, Accordion } from 'react-bootstrap';
import avatar from '../img/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/actions';
import Comment from './Comment';
import { useState } from 'react';
import LoadingSpinner from './Spinner';

export default function SinglePost(props) {
	const { post } = props;
	const { userId, title, body, id } = post;

	const [isOpen, setIsOpen] = useState(false);
	const loadingComments = useSelector((state) => state.loading.loadingComments);
	console.log(loadingComments);

	const dispatch = useDispatch();
	const comments = useSelector((state) => {
		return state.comments.comments;
	});

	const handleToggleComments = () => {
		setIsOpen((prev) => !prev);
		if (!isOpen) {
			dispatch(fetchComments(id));
		}
	};

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
			{/* <Button variant="light" onClick={handleToggleComments}>
				Комментарии
			</Button>
			{isOpen && comments.map((item) => item.postId === id && <Comment comment={item} key={item.id} />)} */}
			<Accordion.Item eventKey={id}>
				<Accordion.Header onClick={handleToggleComments}>Комментарии</Accordion.Header>
				<Accordion.Body>
					{loadingComments ? (
						<LoadingSpinner />
					) : (
						<>
							{comments.map((item) => (
								<Comment comment={item} key={item.id} />
							))}
						</>
					)}
				</Accordion.Body>
			</Accordion.Item>
		</Card>
	);
}
