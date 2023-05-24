import Header from './components/Header';
import PostList from './components/PostList';
import About from './components/About';
import User from './components/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/about" element={<About />} />
				<Route path="/user" element={<User />} />
			</Routes>
		</Router>
	);
}

export default App;
