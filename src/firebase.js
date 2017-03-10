import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDvEL5fYQnP8TZbcvhYbAaXZoYuZQs1YfI',
  authDomain: 'first-flight-with-friend-44a52.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-44a52.firebaseio.com',
  storageBucket: 'first-flight-with-friend-44a52.appspot.com',
  messagingSenderId: '528941465420'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
