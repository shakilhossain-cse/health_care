import React, { useEffect, useState } from "react";
import initializeFireBase from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useHistory } from "react-router";

const useFirebase = () => {
  initializeFireBase();
  const auth = getAuth();
  const [User, setUser] = useState({});
  const [Error, setError] = useState({});
  const history = useHistory();
  const googleProvider = new GoogleAuthProvider();
  // register useing  email and password
  const createAccountByEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUserName(name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // set user name
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const loginUsingEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login using google
  const loginUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  
  };
  // logout user
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user login");
      }
    });
  }, []);

  return {
    createAccountByEmail,
    loginUsingEmailPassword,
    logout,
    User,
    Error,
    loginUsingGoogle,
  };
};

export default useFirebase;
