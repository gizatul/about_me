import { Col, Card } from 'react-bootstrap';
import avatar from './img/avatar.png';

// const CommentsList = ({ comments }) => {
// 	return (
// 		<ul>
// 			{comments.map((comment, index) => (
// 				<li key={index}>
// 					<strong>{comment.title}</strong>: {comment.text}
// 				</li>
// 			))}
// 		</ul>
// 	);
// };

export default function SinglePost({ post }) {
	return (
		<Card className="mb-3">
			<Card.Body>
				<Card.Title>Title {post}</Card.Title>
				<Card.Text>Texttext</Card.Text>
			</Card.Body>
			<Card.Footer>
				<img src={avatar} alt="Аватар автора" className="rounded-circle me-2" width={30} height={30} />
				<span>{post}</span>
			</Card.Footer>
			{/* <CommentsList comments={post.comments} /> */}
		</Card>
	);
}
