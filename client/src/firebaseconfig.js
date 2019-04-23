import firebase from 'firebase';

export const fb = firebase;
var config = {
  apiKey: "AIzaSyAvY0feLJPPeUKaEB5nxl9AQnQ7nR-sItc",
  authDomain: "twitchclone-229520.firebaseapp.com",
  databaseURL: "https://twitchclone-229520.firebaseio.com",
  projectId: "twitchclone-229520",
  storageBucket: "twitchclone-229520.appspot.com",
  messagingSenderId: "732169580730"
};

firebase.initializeApp(config);

export const database = firebase.database();

export const storageService = firebase.storage();
export const storageRef = storageService.ref();


export const auth = firebase.auth();
export const signout = auth.signOut();

export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
}

export const doSignInWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
}

export const doSignOut = () => auth.signOut();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password => auth.currentUser.updatePassword(password);
