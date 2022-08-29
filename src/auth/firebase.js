import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut  
} from 'firebase/auth';
import { 
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    update as firebaseUpdate,
    onValue as firebaseRead
} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDY6QoGx7qFlvF-ENY8QIOwonYDXM6GMB8",
    projectId: "radioapp-a2d1f",
    authDomain: "radioapp-a2d1f.firebaseapp.com",
    databaseURL: "https://radioapp-a2d1f-default-rtdb.firebaseio.com",
    storageBucket: "radioapp-a2d1f.appspot.com",
    appId: "1:1062471900976:android:e12c26d0db5efc82c272f5",
    messagingSenderId:"1062471900976"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseUpdate,
    firebaseRead
}