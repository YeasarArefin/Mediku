import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initApp from '../firebase/firebase.init';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();

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
                    // sir reload na korle user er data show kore na, Sorry Kichu Mone Korben Na plz 😊

                }).catch((error) => {
                    console.log(error.message);
                });

            })
            .catch((error) => {
                console.log(error.message);
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