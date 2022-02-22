import React from 'react';
import HeaderMenu from './components/HeaderMenu';
import Tabs from './components/Tabs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
	return (
		<div className="App">
			<HeaderMenu />
			<Tabs />
			<Router>
				<Routes>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>{' '}
			</Router>
		</div>
	);
}

export default App;
