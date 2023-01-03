import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import styles from "./Login.module.css";

const Login = () => {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className={styles.login}>
			<div className={styles.login__background}>
				<img
					className={styles.login__logo}
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>

				<button
					onClick={() => setSignIn(true)}
					className={styles.login__button}>
					Sign In
				</button>
				<div className={styles.login__gradient} />
			</div>

			{/* login body */}
			<div className={styles.login__body}>
				{signIn ? (
					<SignUp />
				) : (
					<>
						<h1>
							Unlimited films, TV programmes and more.
						</h1>
						<h2>
							Watch anywhere. Cancel at anytime.
						</h2>
						<h3>
							Ready to watch? Enter your email to
							create or restart your membership
						</h3>

						<div className={styles.login__input}>
							<form>
								<input
									type="email"
									placeholder="Email Address"
								/>
								<button
									onClick={() => setSignIn(true)}
									className={
										styles.login__getStarted
									}>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
