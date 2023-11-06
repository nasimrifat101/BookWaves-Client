/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user logged in", currentUser);

      const userEmail = currentUser?.email|| user?.email;
      const loggedUser = { email: userEmail };
      SetUser(currentUser);
      setLoading(false);
      // exist user token generation
      if (currentUser) {
       
        axios.post(`http://localhost:5000/jwt`,loggedUser, { withCredentials: true }).then((res) => {
          console.log('token response',res.data);
        });
      }
      else{
        axios.post('http://localhost:5000/logout',loggedUser, {withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    createAccount,
    updateUserProfile,
    user,
    loading,
    loginUser,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
