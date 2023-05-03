/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import app from '../.firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updataUserProfile = (user, name, url) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name,
            photoURL: url
        });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);

            if(loggedUser !== null) {
                setName(loggedUser.displayName);
            }

            if(loggedUser !== null) {
                setPhotoUrl(loggedUser.photoURL);
            }
            
            setLoading(false);
        });

        return ()=> unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        name,
        photoUrl,
        createUser,
        updataUserProfile,
        setUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;