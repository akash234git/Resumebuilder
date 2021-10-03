import { firebase } from '@firebase/app';


var firebaseConfig= {
    apiKey: "AIzaSyBucEPlHT-ifBrpFg5p2SGa17P8s4Z7dK4",
    authDomain: "resume-builder-e30ef.firebaseapp.com",
    projectId: "resume-builder-e30ef",
    storageBucket: "resume-builder-e30ef.appspot.com",
    messagingSenderId: "671515805131",
    appId: "1:671515805131:web:8026c3b7229b38d9d1624e"
  };
  
  const fireDb=firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref(); 
  

  