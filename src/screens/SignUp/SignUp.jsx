import React, { useRef } from "react";
import { auth } from "../../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./SignUp.module.css";

const SignUp = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				console.log(user);
			})
			.catch((error) => {
				alert(error.code, error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				console.log(user);
			})
			.catch((error) => {
				alert(error.code, error.message);
			});
	};

	return (
		<div className={styles.signup}>
			<form>
				<h1>Sign In</h1>
				<input
					ref={emailRef}
					type="email"
					placeholder="Email"
				/>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
				/>

				<button type="submit" onClick={signIn}>
					Sign In
				</button>

				<h4>
					<span className={styles.signup__gray}>
						New to Netflix?{" "}
					</span>
					<span
						className={styles.signup__link}
						onClick={register}>
						{" "}
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignUp;
