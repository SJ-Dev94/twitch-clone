import firebase from 'firebase';

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

