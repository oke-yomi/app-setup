import React, { useEffect } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Login from "./screens/Login/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
	const user = null;

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				if (user) {
					// Logged in

					console.log(user);
				} else {
					// User is signed out
				}
			}
		);

		return unsubscribe;
	}, []);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route
							path="/"
							element={<HomeScreen />}
						/>
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
