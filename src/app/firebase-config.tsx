import { useState } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtIDenmQrganQnZpFVYRivCUHsS9THdi4",
  authDomain: "authentication-personalweb.firebaseapp.com",
  projectId: "authentication-personalweb",
  storageBucket: "authentication-personalweb.appspot.com",
  messagingSenderId: "916900439774",
  appId: "1:916900439774:web:3440c7b2ec12b28733044f",
  measurementId: "G-CBWSYX77VC",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const googleprovider = new GoogleAuthProvider()
const facebookprovider = new FacebookAuthProvider()
const twitterprovider = new TwitterAuthProvider()
const appleprovider = new OAuthProvider("apple.com")

googleprovider.setCustomParameters({ prompt: "select_account" })
twitterprovider.setCustomParameters({ prompt: "select_account" })
appleprovider.setCustomParameters({ prompt: "select_account" })

export const user = auth.currentUser

export const signInWithEmail = async () => {
  try {
    let result = await createUserWithEmailAndPassword(auth, email, password)

    console.log("result is:", result)
  } catch (error) {}
}

export const signInWithGoogle = async () => {
  try {
    let result = await signInWithPopup(auth, googleprovider)
    console.log("result is:", result)
  } catch (error) {
    console.log("Oh no!!", error)
  }
}

export const signInWithFacebook = async () => {
  try {
    let result = await signInWithPopup(auth, facebookprovider)
    console.log("result is:", result)
  } catch (error) {
    console.log("oh no", error)
  }
}

export const signInWithTwitter = async () => {
  try {
    let result = await signInWithPopup(auth, twitterprovider)
    console.log("result is:", result)
  } catch (error) {
    console.log("Oh no!!", error)
  }
}
export const signInWithApple = async () => {
  try {
    let result = await signInWithPopup(auth, appleprovider)
    console.log("result is:", result)
  } catch (error) {
    console.log("Oh no!!", error)
  }
}
export const signUserOut = () => {
  signOut(auth)
}
