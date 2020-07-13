import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const conf = {
	apiKey: "AIzaSyAoN6qGEgtgJ29SZjCHBqe30ZiGk2Sez78",
	authDomain: "tech-house-eb04c.firebaseapp.com",
	databaseURL: "https://tech-house-eb04c.firebaseio.com",
	projectId: "tech-house-eb04c",
	storageBucket: "tech-house-eb04c.appspot.com",
	messagingSenderId: "177021683707",
	appId: "1:177021683707:web:09b9fcccd2ffb1150a6d5e",
	measurementId: "G-MEMM5Q3LGV",
};

firebase.initializeApp(conf);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>
	firebase
		.auth()
		.signInWithPopup(googleProvider)
		.then((res) => console.log(res.user))
		.catch((err) => console.log(err));
