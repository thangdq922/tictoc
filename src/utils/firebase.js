import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBa5WxEBkM1mwmayO5dY0zUGqkEpqUMuX8",
  authDomain: "tictoc-e6ecf.firebaseapp.com",
  projectId: "tictoc-e6ecf",
  storageBucket: "tictoc-e6ecf.appspot.com",
  messagingSenderId: "869986956047",
  appId: "1:869986956047:web:36fb5f355b094c7c33447a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)