import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Database/init-firebase';
import {
  createUserWithEmailAndPassword, //* this will create: email, password,
  signInWithEmailAndPassword, //* this is to signIn with
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
})


// This is the variable that will be used in the comp register
export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, user => {
//       setCurrentUser(user ? user : null)
//     })
//     return () => {
//       unsubscribe()
//     }
//   }, [])

//   useEffect(() => {
//     console.log('The user is', currentUser)
//   }, [currentUser])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password, username) {
    return createUserWithEmailAndPassword(auth, email, password, username)
  }

//   function forgotPassword(email) {
//     return sendPasswordResetEmail(auth, email, {
//       url: `http://localhost:3000/login`,
//     })
//   }

//   function resetPassword(oobCode, newPassword) {
//     return confirmPasswordReset(auth, oobCode, newPassword)
//   }

//   function logout() {
//     return signOut(auth)
//   }

//   function signInWithGoogle() {
//     const provider = new GoogleAuthProvider()
//     return signInWithPopup(auth, provider)
//   }

  const value = {
    currentUser,
    // signInWithGoogle,
    login,
    register, //import the value
    // logout,
    // forgotPassword,
    // resetPassword,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}