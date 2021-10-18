import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initApp from '../firebase/firebase.init';

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleLogin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const user = result.user;
                setUser(user);
            });


    };

    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });

    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

        });

    }, []);

    return {
        googleLogin,
        user,
        logOut
    };

};

export default useFirebase;

