import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw0b8wFJEyV5MZeVqYz3Wt7sweFl5nfKo",
    authDomain: "reactchat-e9bc6.firebaseapp.com",
    projectId: "reactchat-e9bc6",
    storageBucket: "reactchat-e9bc6.appspot.com",
    messagingSenderId: "703434267229",
    appId: "1:703434267229:web:6175fccd9602d91a65cbb4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

export default app