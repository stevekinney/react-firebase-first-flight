import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBmOcQx1f6_UTnqbPjWffMe2RMlq3ClEbw',
  authDomain: 'first-flight-2c57b.firebaseapp.com',
  databaseURL: 'https://first-flight-2c57b.firebaseio.com',
  storageBucket: 'first-flight-2c57b.appspot.com',
  messagingSenderId: '270361986787'
};

firebase.initializeApp(config);

export default firebase;
