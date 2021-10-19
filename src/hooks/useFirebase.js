import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initApp from '../firebase/firebase.init';

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {

        return signInWithPopup(auth, googleProvider);

    };

    const registerWithEmailPassword = (email, password, name, img) => {

        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {

                const user = result.user;
                setUser(user);
                console.log(user);

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: img
                }).then(() => {
                    // Profile updated!
                    console.log('name added');
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    const loginWithEmailPassword = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch(error => {
                console.log(error.message);
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

    }, [(auth)]);

    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });

    };

    return {
        googleLogin,
        user,
        logOut,
        registerWithEmailPassword,
        loginWithEmailPassword,
    };

};

export default useFirebase;

