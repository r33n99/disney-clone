import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcHOd4ZZtKdTUHpeWnzESOVG7M--6U21o",
  authDomain: "disney-plus-clone-29146.firebaseapp.com",
  databaseURL: "https://disney-plus-clone-29146-default-rtdb.firebaseio.com",
  projectId: "disney-plus-clone-29146",
  storageBucket: "disney-plus-clone-29146.appspot.com",
  messagingSenderId: "684206459875",
  appId: "1:684206459875:web:f6a818052dadc49d4faed6",
  measurementId: "G-C881XLQXDH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
