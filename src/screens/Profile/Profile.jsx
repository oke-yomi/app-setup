import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { selectUser } from "../../features/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./Profile.module.css";

const Profile = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
        navigate("/")
				console.log(`Signed out from ${user.email}`);
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
			});
	};

	return (
		<div className={styles.profile}>
			<Nav />
			<div className={styles.profile__body}>
				<h1>Edit Profile</h1>

				<div className={styles.profile__info}>
					<img
						src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
						alt=""
					/>

					{/* profile details */}
					<div className={styles.profile__details}>
						<h2>{user.email}</h2>

            <div className={styles.profile__plans}>
              <h3>Plans</h3>
							<button
								onClick={handleSignOut}
								className={styles.profile__signout}>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
