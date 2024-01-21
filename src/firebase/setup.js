import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDCIdRC0TjfYA3AlYI7gWLAReNgs3Qp80Y",
  authDomain: "whatsapp-clone-e5850.firebaseapp.com",
  projectId: "whatsapp-clone-e5850",
  storageBucket: "whatsapp-clone-e5850.appspot.com",
  messagingSenderId: "900373071660",
  appId: "1:900373071660:web:c5862482cc497d02a40e89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)