import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, ListGroup, Button, Spinner } from 'react-bootstrap';

const API_DELAY = 500; // Artificial delay for the loader

const App = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Simulating API fetch
		setTimeout(() => {
			const fetchData = async () => {
				try {
					const response = await fetch('api/posts');
					const data = await response.json();
					setPosts(data);
					setIsLoading(false);
				} catch (error) {
					console.error('Error fetching posts:', error);
				}
			};
			fetchData();
		}, API_DELAY);
	}, []);

	const toggleComments = (postId) => {
		setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? { ...post, showComments: !post.showComments } : post)));
	};

	const handleMenuToggle = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<Navbar bg="light" expand="sm">
				<Navbar.Toggle onClick={handleMenuToggle} />
				<Navbar.Collapse className={showMenu ? 'show' : ''}>
					<Nav className="me-auto">
						<Nav.Link href="/">List of posts</Nav.Link>
						<Nav.Link href="/about">About me</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Container className="mt-4">
				{isLoading ? (
					<Spinner animation="border" />
				) : (
					posts.map((post) => (
						<div key={post.id} className="mb-4">
							<h3>{post.title}</h3>
							<p>{post.text}</p>
							<div>
								<img
									src="avatar.jpg" // Replace with your avatar image URL
									alt="Avatar"
									className="avatar"
									onClick={() => (window.location.href = `/users/${post.authorId}`)}
								/>
								<Button variant="primary" onClick={() => toggleComments(post.id)}>
									{post.showComments ? 'Hide Comments' : 'Show Comments'}
								</Button>
							</div>
							{post.showComments && (
								<ListGroup className="mt-3">
									{post.comments.map((comment) => (
										<ListGroup.Item key={comment.id}>
											<strong>{comment.email}</strong>
											<p>{comment.text}</p>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</div>
					))
				)}
			</Container>
		</div>
	);
};

export default App;
