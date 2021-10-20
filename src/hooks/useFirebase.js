import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import initApp from '../firebase/firebase.init';
import Swal from 'sweetalert2';

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
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

                    window.location.reload();
                    // sir reload na kore user er data show koraite partesi na, Sorry Kichu Mone Korben Na plz 😊

                }).catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                });


            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });

        Swal.fire({
            title: 'Account Created',
            icon: 'success',
            confirmButtonText: 'Cool'
        });

    };

    const loginWithEmailPassword = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                window.location.reload();
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            });

    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

    }, [(auth)]);

    const logOut = () => {

        setIsLoading(true);

        signOut(auth).then(() => {

            setUser({});
            Swal.fire({
                title: 'Successfully Logout',
                icon: 'success',
                confirmButtonText: 'Cool'
            });

        }).catch((error) => {

            setError(error.message);

        }).finally(() => {

            setIsLoading(false);
        });

    };

    return {
        googleLogin,
        user,
        logOut,
        registerWithEmailPassword,
        loginWithEmailPassword,
        setIsLoading,
        isLoading,
        error
    };

};

export default useFirebase;