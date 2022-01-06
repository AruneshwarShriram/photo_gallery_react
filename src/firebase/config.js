//import * as firebase from "firebase/app";
// Import the functions you need from the SDKs you need
//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

import { initializeApp } from "firebase/app";

import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBy2Ki38pH0qEun8yrBYuYujDVvgW2N3ko",
    authDomain: "image-gallery-5b52a.firebaseapp.com",
    projectId: "image-gallery-5b52a",
    storageBucket: "image-gallery-5b52a.appspot.com",
    messagingSenderId: "178404678808",
    appId: "1:178404678808:web:3b2c708b4abc94bb5944ed",
    measurementId: "G-9JDDGV11FG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ProjectStorage= firebase.storage();
const ProjectFirestore= firebase.firestore();
const timeStamp=firebase.firestore.FieldValue.serverTimestamp;


export {ProjectStorage,ProjectFirestore,timeStamp}
