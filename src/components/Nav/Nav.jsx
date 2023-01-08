import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
	const [show, handleShow] = useState(false);
	const navigate = useNavigate();

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener(
			"scroll",
			transitionNavbar
		);

		return () =>
			window.removeEventListener(
				"scroll",
				transitionNavbar
			);
	}, []);

	return (
		<div
			className={`${styles.nav} ${
				show && styles.nav__black
			}`}>
			<div className={styles.nav__contents}>
				<img
					onClick={() => navigate("/")}
					className={styles.nav__logo}
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="logo"
				/>

				<img
					onClick={() => navigate("/profile")}
					className={styles.nav__avatar}
					src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Nav;
