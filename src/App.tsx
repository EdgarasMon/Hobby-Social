import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Messages from './components/Messages';
import HeaderMenu from './components/HeaderMenu';
import Tabs from './components/Tabs';

import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';

function App() {
	return (
		<div className="App">
			<HeaderMenu />
			<Tabs />
			<Router>
				<Routes>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/messages" element={<Messages />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
				</Routes>{' '}
			</Router>
		</div>
	);
}

export default App;
