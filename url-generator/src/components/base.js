import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAo5FUZJhE0-6FA4PRQnKB4ltJa_66xJ80",
    authDomain: "bb-generateurl.firebaseapp.com",
    databaseURL: "https://bb-generateurl.firebaseio.com",
    projectId: "bb-generateurl",
    storageBucket: "bb-generateurl.appspot.com",
    messagingSenderId: "469194838859"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base }
