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
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
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
    user,
    loading,
    newAccountCreate,
    accountLogOut,
    accountLogin,
    profileUpdate,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currenUser) => {
      setUser(currenUser);
      if (currenUser) {
        let userInfo = { email: currenUser.email };
        const res = await axiosPublic.post("/jwt-login", userInfo);
        if (res.data.token) {
          localStorage.setItem("access-token", res.data.token);
          setLoading(false);
        }
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
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
