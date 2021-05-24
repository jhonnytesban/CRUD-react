import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2xcbqosUb-LvdP8y6MaJ3FzjQHsIQAZw",
  authDomain: "crud-list-17916.firebaseapp.com",
  projectId: "crud-list-17916",
  storageBucket: "crud-list-17916.appspot.com",
  messagingSenderId: "921338534127",
  appId: "1:921338534127:web:a8b02efb234206240ea31a",
  measurementId: "G-7JFQ9S2RJN"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = fire.auth()

export { auth } 