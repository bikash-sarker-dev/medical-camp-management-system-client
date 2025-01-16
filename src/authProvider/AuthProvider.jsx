import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../contextApi";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const newAccountCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const accountLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (userInfo) => {
    console.log(userInfo);
    setLoading(true);
    return updateProfile(auth.currenUser, userInfo);
  };

  const accountLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const shareInfo = {
    name: "shrabon",
    user,
    loading,
    newAccountCreate,
    accountLogOut,
    accountLogin,
    profileUpdate,
  };

  console.log(user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={shareInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
