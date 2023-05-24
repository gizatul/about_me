import { ListGroup } from 'react-bootstrap';

export default function Comment(comment) {
	const { id, email, body } = comment.comment;

	console.log(comment);

	<ListGroup.Item key={id}>
		<h5>{email}</h5>
		<p>{body}</p>
	</ListGroup.Item>;
}
