import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDAFHmZDvf5-IHf7JyveAFRbTvxUFq6o6A',
  authDomain: 'crwn-3e701.firebaseapp.com',
  databaseURL: 'https://crwn-3e701.firebaseio.com',
  projectId: 'crwn-3e701',
  storageBucket: 'crwn-3e701.appspot.com',
  messagingSenderId: '694712890700',
  appId: '1:694712890700:web:866cd6e2b2956211934be9',
  measurementId: 'G-RR6260H7Q5'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
