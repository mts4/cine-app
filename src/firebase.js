import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC9RukSnMQ7F5fuuuOrzVJB1xBbRvmx_X8",
    authDomain: "suscritos-cinema-mov.firebaseapp.com",
    databaseURL: "https://suscritos-cinema-mov.firebaseio.com",
    projectId: "suscritos-cinema-mov",
    storageBucket: "suscritos-cinema-mov.appspot.com",
    messagingSenderId: "14908416605",
    appId: "1:14908416605:web:d3830d465af53bd33863b4"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export {firebase}