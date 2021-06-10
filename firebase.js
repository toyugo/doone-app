import * as firebase from 'firebase'
import 'firebase/firestore';
//import firestore from '@react-native-firebase/firestore';
//const firebase = require('firebase/app').default
const firebaseConfig = {
    apiKey: "AIzaSyC6FokVDMlx5SvCpEV_LzJggY9X-33W-lA",
    authDomain: "doone-a22f2.firebaseapp.com",
    projectId: "doone-a22f2",
    storageBucket: "doone-a22f2.appspot.com",
    messagingSenderId: "986816749525",
    appId: "1:986816749525:web:fd1589648d5e026c38275c"
  };
let app;
let checkApp;
checkApp = firebase.apps.length
if (checkApp === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
//console.log(firebase.initializeApp(firebaseConfig));
//console.log(FirebaseApp.getApps(context).isEmpty())
