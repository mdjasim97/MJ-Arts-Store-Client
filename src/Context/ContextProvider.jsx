import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config.js'
export const AuthContext = createContext()

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const ProviderGoogle = new GoogleAuthProvider()


    const UserCreate = (email, password) => {
        // loading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UserSignIn = (email, password) => {
        // loading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignInWithGoogle = () => {
        return signInWithPopup(auth, ProviderGoogle)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Current User : ", currentUser)
            setUser(currentUser)
        })

        return () => unSubcribe()
    },[])


    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        UserCreate,
        UserSignIn,
        logOut,
        user,
        SignInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;