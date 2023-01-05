// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAsXNRxDxqQhepJw6rFDf5rlAJc7ZZppHU",
	authDomain: "movie-build-21ddb.firebaseapp.com",
	projectId: "movie-build-21ddb",
	storageBucket: "movie-build-21ddb.appspot.com",
	messagingSenderId: "514460481139",
	appId: "1:514460481139:web:3b0800fd318942bb0f5c06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
