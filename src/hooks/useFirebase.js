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
  const [IsLoading, setIsLoading] = useState(true);
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
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login using google
  const loginUsingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  
  };
  // logout user
  const logout = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      }).finally(() => {
        setIsLoading(false)
      })
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true)
      if (user) {
        setUser(user);
        console.log("user login");
      }
      setIsLoading(false)
    });
  }, []);

  return {
    createAccountByEmail,
    loginUsingEmailPassword,
    logout,
    User,
    Error,
    loginUsingGoogle,
    setIsLoading,
    IsLoading,
  };
};

export default useFirebase;
