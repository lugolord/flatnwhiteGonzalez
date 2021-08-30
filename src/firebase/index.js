import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBhry3ZNcAwyVTOxup97erIc1_fWO7m4rQ",
    authDomain: "fnwdatabase.firebaseapp.com",
    projectId: "fnwdatabase",
    storageBucket: "fnwdatabase.appspot.com",
    messagingSenderId: "523437980000",
    appId: "1:523437980000:web:d9d9738aa7d96a4e1b8605"
});

export const getFirebase = () => app;

export const getFirestore = () => app.firestore();