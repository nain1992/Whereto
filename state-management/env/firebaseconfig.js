import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtWRd4iS3JyJD4_mDirFKNwujAcYIFiVg",
  authDomain: "whereto-fb9e2.firebaseapp.com",
  projectId: "whereto-fb9e2",
  storageBucket: "whereto-fb9e2.appspot.com",
  messagingSenderId: "827502633470",
  appId: "1:827502633470:web:14d987170c36f0041ba0af",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
