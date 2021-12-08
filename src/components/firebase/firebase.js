import firebase  from 'firebase';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBucEPlHT-ifBrpFg5p2SGa17P8s4Z7dK4",
  authDomain: "resume-builder-e30ef.firebaseapp.com",
  projectId: "resume-builder-e30ef",
  storageBucket: "resume-builder-e30ef.appspot.com",
  messagingSenderId: "671515805131",
  appId: "1:671515805131:web:8026c3b7229b38d9d1624e"
};

if(!firebaseConfig.apiKey) throw new  Error("Missing firebase credential:apiKey");
if(!firebaseConfig.authDomain) throw new  Error("Missing firebase credential:authDomain");
if(!firebaseConfig.projectId) throw new  Error("Missing firebase credential:projectId");
if(!firebaseConfig.storageBucket) throw new  Error("Missing firebase credential:storageBucket");
if(!firebaseConfig.messagingSenderId) throw new  Error("Missing firebase credential:messagingSenderId");
if(!firebaseConfig.appId) throw new  Error("Missing firebase credential:appId");




 firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export {db,firebase};