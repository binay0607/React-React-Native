import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMt6lTesTXK4MQzvcIiyyHNd9QMY2wMMk",
  authDomain: "whatsapp-49cb7.firebaseapp.com",
  projectId: "whatsapp-49cb7",
  storageBucket: "whatsapp-49cb7.appspot.com",
  messagingSenderId: "459640663556",
  appId: "1:459640663556:web:55c8cb8c6621b52a3e0f51"
};


export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db = getFirestore()