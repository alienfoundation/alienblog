import firebase from "firebase";

const fire = firebase.initializeApp(
    {
        apiKey: "AIzaSyDczCoDnvrVbcNhI60L3s30DE6fpkYDV7E",
        authDomain: "alienwrite-7c693.firebaseapp.com",
        databaseURL: "https://alienwrite-7c693.firebaseio.com",
        projectId: "alienwrite-7c693",
        storageBucket: "alienwrite-7c693.appspot.com",
        messagingSenderId: "972584413531"
    }
);

export default fire;