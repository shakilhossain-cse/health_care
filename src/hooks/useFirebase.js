import React, { useEffect } from "react";
import initializeFireBase from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const useFirebase = () => {
  initializeFireBase();
  const auth = getAuth();

  // register useing  email and password
  const createAccountByEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUserName(name);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // set user name
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const loginUsingEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // logout user
  const logoutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user login");
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return { createAccountByEmail, loginUsingEmailPassword, logoutUser };
};

export default useFirebase;
