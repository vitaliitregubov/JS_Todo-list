import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBOtGG8soK8Dx62MNae59XOiKio2Gn5YdM",
  authDomain: "musicapp-b7eed.firebaseapp.com",
  projectId: "musicapp-b7eed",
  storageBucket: "musicapp-b7eed.appspot.com",
  messagingSenderId: "57709080509",
  appId: "1:57709080509:web:dfed2540c4d2935b642cd4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users');

export { auth, db, usersCollection }