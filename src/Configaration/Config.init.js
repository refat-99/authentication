import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";


const initializeAuthentication = () =>{
    // Initialize Firebase
     initializeApp(firebaseConfig);

}

export default initializeAuthentication;


