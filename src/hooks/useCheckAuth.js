import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FirebaseAuth } from "../firebase/config"
import {onAuthStateChanged} from "firebase/auth";
import { login, logout } from "../store/auth"

export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth);

    const dispatch = useDispatch ();
  
    useEffect(() => {
      onAuthStateChanged (FirebaseAuth, async(user) =>{
        if(!user) return dispatch(logout());
        const {uid, email, diplayName, photoURL} = user
        dispatch(login({uid, email, diplayName, photoURL}));
      })
    
      
    }, [])
    return {
        status
    }
}
