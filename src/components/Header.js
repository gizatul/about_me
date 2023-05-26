import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Card } from 'react-bootstrap';
import avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';

export default function Header() {
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	const closeOffcanvas = () => {
		setShowOffcanvas(false);
	};

	const toggleOffcanvas = () => {
		setShowOffcanvas((prevState) => !prevState);
	};

	const handleLinkClick = () => {
		closeOffcanvas();
	};

	return (
		<Navbar bg="light" expand="false" className="mb-3">
			<Container>
				<Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" onClick={toggleOffcanvas} />
				<Navbar.Brand as={Link} to="/">
					ПОСТЫ
				</Navbar.Brand>
				<Navbar.Offcanvas
					id="offcanvasNavbar-expand-false"
					show={showOffcanvas}
					onHide={closeOffcanvas}
					aria-labelledby="offcanvasNavbarLabel-expand-false"
					placement="start"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="offcanvasNavbarLabel-expand-false">Профиль</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<img src={avatar} alt="My avatar" />
							<Card.Title>Айдар</Card.Title>
							<Card.Text>gizat-aidar@yandex.ru</Card.Text>
							<Nav.Link as={Link} to="/" onClick={handleLinkClick}>
								Список постов
							</Nav.Link>
							<Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
								Обо мне
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
