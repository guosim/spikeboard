//firebase config and instantiation
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCGEXiIJneVa4WsF_0fHTqaZQptt5lrNzQ",
    authDomain: "spikeboard-53a18.firebaseapp.com",
    databaseURL: "https://spikeboard-53a18.firebaseio.com",
    projectId: "spikeboard-53a18",
    storageBucket: "spikeboard-53a18.appspot.com",
    messagingSenderId: "990300300976"
};

if (!firebase.apps.length) { //not sure what this if does
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
	auth, 
};