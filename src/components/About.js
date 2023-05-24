import React from 'react';
import { Container, Row, Col, Image, Card, Alert } from 'react-bootstrap';
import avatar from '../img/avatar.png';

export default function AboutPage() {
	return (
		<Container className="mt-10">
			<h1 className="mb-3">Обо мне</h1>
			<Row className="mt-10">
				<Col md={4} className="mb-4">
					<Image src={avatar} alt="Мой аватар" roundedCircle fluid />
				</Col>
				<Col md={8}>
					<Card>
						<Card.Body>
							<Card.Title>Айдар</Card.Title>
							<Card.Text>
								Привет! Меня зовут Айдар и я являюсь Frontend-разработчиком. Я увлечен созданием веб-приложений с использованием современных технологий. Я
								стремлюсь к постоянному самообразованию и развитию своих навыков. <br /> Мое портфолио включает 9 проектов, выполненных с применением React,
								Redux, HTML, CSS, JavaScript, Git, кроссбраузерная и адаптивная верстка
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Card.Text>
								<strong>Портфолио:</strong> <Alert.Link href="https://github.com/gizatul">https://github.com/gizatul</Alert.Link>
							</Card.Text>
							<Card.Text>
								<strong>Email:</strong> gizat-aidar@yandex.ru
							</Card.Text>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
