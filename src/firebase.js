import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCzyb9zoLV5PfmfsezaXJz_ia2yBDe4CMc",
    authDomain: "facebook-clone-83d8b.firebaseapp.com",
    databaseURL: "https://facebook-clone-83d8b.firebaseio.com",
    projectId: "facebook-clone-83d8b",
    storageBucket: "facebook-clone-83d8b.appspot.com",
    messagingSenderId: "681450444789",
    appId: "1:681450444789:web:207f4e0ab085c10ad432bc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db