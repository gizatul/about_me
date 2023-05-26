import { ListGroup } from 'react-bootstrap';

export default function Comment(props) {
	const { comment } = props;
	const { email, body } = comment;

	return (
		<ListGroup.Item>
			<h6>{email}</h6>
			<p>{body}</p>
		</ListGroup.Item>
	);
}
