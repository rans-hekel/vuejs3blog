import firebase from 'firebase/app';
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAl2S8ZKp1t5tJEDhFkxw06biKokKr5yjw",
    authDomain: "vueblog-e6290.firebaseapp.com",
    projectId: "vueblog-e6290",
    storageBucket: "vueblog-e6290.appspot.com",
    messagingSenderId: "160263494089",
    appId: "1:160263494089:web:24e7379e13b4d78e0e7018"
  };

  firebase.initializeApp(firebaseConfig);
  export const projectFirestore = firebase.firestore();