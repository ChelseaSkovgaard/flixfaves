import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA7Y2GbNSEtx8rmHoXpqNQTJvfd3u6X7oo",
    authDomain: "flixfavs.firebaseapp.com",
    databaseURL: "https://flixfavs.firebaseio.com",
    storageBucket: "flixfavs.appspot.com",
    messagingSenderId: "17301006494"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('favorites')
