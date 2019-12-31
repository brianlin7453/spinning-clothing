import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYzEY-6f59IzhoEj8VdPx_YL1y10uYwmg",
    authDomain: "spinning-db.firebaseapp.com",
    databaseURL: "https://spinning-db.firebaseio.com",
    projectId: "spinning-db",
    storageBucket: "spinning-db.appspot.com",
    messagingSenderId: "769761936573",
    appId: "1:769761936573:web:64258992ff3b30961823d4",
    measurementId: "G-J0DBLKVGRW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
