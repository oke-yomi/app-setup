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
import {
	useDispatch,
	useSelector,
} from "react-redux";
import {
	login,
	logout,
	selectUser,
} from "./features/user/userSlice";
import Profile from "./screens/Profile/Profile";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				if (user) {
					// Logged in
					dispatch(
						login({
							uid: user.uid,
							email: user.email,
						})
					);

					// console.log(user);
				} else {
					// User is signed out
					dispatch(logout());
				}
			}
		);

		return unsubscribe;
	}, [dispatch]);

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
						<Route
							path="/profile"
							element={<Profile />}
						/>
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
