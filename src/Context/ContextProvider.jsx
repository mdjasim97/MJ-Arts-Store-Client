import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config.js'
export const AuthContext = createContext()

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const ProviderGoogle = new GoogleAuthProvider()
    const [loader, setLoader] = useState(false)


    const UserCreate = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UserSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, ProviderGoogle)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Current User : ", currentUser)
            setUser(currentUser)
            setLoader(false)
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
        userEmail,
        loader,
        SignInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;