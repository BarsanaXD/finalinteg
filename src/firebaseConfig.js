import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBInAJAzZewnS-CfO09jPp_puPCd68GVJ8",
  authDomain: "capstone2-9e98b.firebaseapp.com",
  databaseURL: "https://capstone2-9e98b-default-rtdb.firebaseio.com",
  projectId: "capstone2-9e98b",
  storageBucket: "capstone2-9e98b.appspot.com",
  messagingSenderId: "1060189432399",
  appId: "1:1060189432399:web:7f7792d60d43cee1ab983a",
  measurementId: "G-Q460281CME"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }