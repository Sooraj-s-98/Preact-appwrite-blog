import './style';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login'
import { signal } from "@preact/signals";
import { Router } from 'preact-router';

export default function App() {
	const user = signal(0);
	return (
		<div>
			<Router>
				<Blog path='/' />
				<Signup path='signup' />
				<Login path='/login' />
			</Router>
		</div>
	);
}
