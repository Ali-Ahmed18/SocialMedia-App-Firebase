
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getFirestore , doc, setDoc, getDoc,collection, addDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, query, orderBy} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import { getStorage ,ref, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAM1xAFxhzDZdOZUrKwkbXSIa9PqUgEd0A",
    authDomain: "social-app-73c84.firebaseapp.com",
    projectId: "social-app-73c84",
    storageBucket: "social-app-73c84.appspot.com",
    messagingSenderId: "610773497500",
    appId: "1:610773497500:web:c1151fed19b11d09621f59"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  export { app ,auth, createUserWithEmailAndPassword, db ,doc , setDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut, getDoc, collection, addDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, query, orderBy, storage, ref, uploadBytesResumable, getDownloadURL} 
