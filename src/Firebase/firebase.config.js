// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNd2gl7rt6En9ZOr3DhQXPqDjAnZIRBxI",
  authDomain: "vehipeak.firebaseapp.com",
  projectId: "vehipeak",
  storageBucket: "vehipeak.appspot.com",
  messagingSenderId: "576961502416",
  appId: "1:576961502416:web:6d288e7c109f11edbd52d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth