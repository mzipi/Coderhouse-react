import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvtVJWkYTdc3LivnrRXfTUqZAhsY1WwCI",
  authDomain: "coder-react-e783c.firebaseapp.com",
  projectId: "coder-react-e783c",
  storageBucket: "coder-react-e783c.appspot.com",
  messagingSenderId: "309225365628",
  appId: "1:309225365628:web:6e2614e55285fbb52129f9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);