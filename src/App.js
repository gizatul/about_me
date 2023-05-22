import Header from './components/Header';
import Postlist from './Postlist';
import About from './About';
import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Postlist />} />
				<Route path="/about" element={<About />} />
				<Route path="/user" element={<User />} />
			</Routes>
		</Router>
	);
}

export default App;
