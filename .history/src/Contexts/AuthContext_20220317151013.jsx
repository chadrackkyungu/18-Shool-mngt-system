import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Database/init-firebase';
import {
  createUserWithEmailAndPassword, //* this will create: email, password,
  signInWithEmailAndPassword, //* this is to signIn with
  onAuthStateChanged, //* this check any change of signed in and signed out
  signOut, //* signout
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
})


// This is the variable that will be used in the comp register
export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)


  // * this useEffect is updating the [currentUser] state each time the user login & logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])



  function register(email, password, username) {
    return createUserWithEmailAndPassword(auth, email, password, username)
  }


  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  function logout() {
    return signOut(auth)
  }

  // !signIn with Google Auth
    function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }


  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }


  const value = {
    currentUser,
    register, //import the value
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}