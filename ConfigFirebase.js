import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyCFal3UQxMml6EMTFZJmYOAqadva-kB8VU",
    authDomain: "reg3-85c1f.firebaseapp.com",
    projectId: "reg3-85c1f",
    storageBucket: "reg3-85c1f.appspot.com",
    messagingSenderId: "1050662392214",
    appId: "1:1050662392214:web:c0986720662eaf26f34db7",
    measurementId: "G-X8SW57XSQM"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;

