import { useEffect, useState } from "react"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuthentication from "../Configaration/Config.init";
initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
            .then(result =>{
                const user = result.user;
            })
    }
    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});

            })
    }

    //Observe whether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              
            } 
          });

    },[])

    return{
        user,
        logOut,
        signInUsingGoogle,

    }
}

export default useFirebase;