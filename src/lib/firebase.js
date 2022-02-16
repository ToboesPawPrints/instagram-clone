import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//here we will call seed file but only once

const configh = {
apiKey: "AIzaSyBDXBfu09B6H1Ye24OLMikzNnF0yf6KNus",
authDomain: "instagram-clone-8937a.firebaseapp.com",
projectId: "instagram-clone-8937a",
storageBucket: "instagram-clone-8937a.appspot.com",
messagingSenderId: "839764449249",
appId: "1:839764449249:web:e0eec3ba4aad56215724a0"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(Firebase)

export { firebase, FieldValue };