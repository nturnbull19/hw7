const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBcL5gOwQ8TIUZWRNCvviitx662mqxXjEc",
    authDomain: "kiei-451-fdbc4.firebaseapp.com",
    projectId: "kiei-451-fdbc4",
    storageBucket: "kiei-451-fdbc4.appspot.com",
    messagingSenderId: "103011641662",
    appId: "1:103011641662:web:3a4c9df8a6c87f87d3646f"
} 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase