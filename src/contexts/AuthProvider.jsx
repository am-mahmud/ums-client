import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    // const forgetPassword = (email) => {
    //     setLoading(true)
    //     return sendPasswordResetEmail(auth, email)
    // }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                const loggedUser = { email: currentUser.email }

                fetch('http://localhost:3000/getToken', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log('after getting token', data.token)
                        localStorage.setItem('token', data.token);
                    })
            }
            else {
                localStorage.removeItem('token')
            }
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        createUser,
        user,
        loading,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;