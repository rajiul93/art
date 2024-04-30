import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState({});
const [loading, setLoading] = useState(true)



const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
const logByGoogle =()=>{
   return signInWithPopup(auth, googleProvider)
}

const loginGitHub =()=>{
  return signInWithPopup(auth, githubProvider)
}
const createWithEmailPassword =(  email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginWithEmail = (email, password) => { 
    return signInWithEmailAndPassword(auth, email, password);
  };
const logOut =()=>{
   return signOut(auth)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      
        setUser(user);
        setLoading(false)
      });
      return () => {
        unSubscribe();
      };
  }, [auth]);
 
 
  const authInfo = { 
    logByGoogle,
    createWithEmailPassword,
    user,
    logOut,
    loading,
    loginWithEmail,
    loginGitHub
 };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = { 
  children: PropTypes.node,
}