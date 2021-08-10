// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAF9iKT3USUzjJHQUneiH2ntEo1AWPoQZw",
    authDomain: "oddajrzeczy-79c26.firebaseapp.com",
    projectId: "oddajrzeczy-79c26",
    storageBucket: "oddajrzeczy-79c26.appspot.com",
    messagingSenderId: "653176783076",
    appId: "1:653176783076:web:d0575fc4fe924344666cf1",
    measurementId: "G-9MCJBZXWZB"
};

const app  = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;