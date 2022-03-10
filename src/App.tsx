import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/500.css';

import Messages from './components/Messages';
import HeaderMenu from './components/HeaderMenu';
import Tabs from './components/Tabs';

import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{' '}
								<HeaderMenu />
								<Tabs />
							</>
						}
					></Route>
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
