import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
  User,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth"
import { auth } from "../app/firebase-config"

interface AuthContextType {
  authUser: boolean
  authUserProfile: User | null
  signInWithEmail: () => void
  signInWithGoogle: () => void
  signInWithFacebook: () => void
  signInWithTwitter: () => void
  signInWithApple: () => void
  signUserOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  authUser: false,
  authUserProfile: null,
  signInWithEmail: () => {},
  signInWithGoogle: () => {},
  signInWithFacebook: () => {},
  signInWithTwitter: () => {},
  signInWithApple: () => {},
  signUserOut: () => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const currentUser: User | null = auth.currentUser
  const [authUser, setAuthUser] = useState(
    false || window.localStorage.getItem("authUser") === "true"
  )
  const [authUserProfile, setAuthUserProfile] = useState<User | null>(null)

  const googleprovider = new GoogleAuthProvider()
  const facebookprovider = new FacebookAuthProvider()
  const twitterprovider = new TwitterAuthProvider()
  const appleprovider = new OAuthProvider("apple.com")

  googleprovider.setCustomParameters({ prompt: "select_account" })
  twitterprovider.setCustomParameters({ prompt: "select_account" })
  appleprovider.setCustomParameters({ prompt: "select_account" })

  const signInWithEmail = async () => {
    try {
      let result = await createUserWithEmailAndPassword(auth, email, password)

      console.log("result is:", result)
    } catch (error) {}
  }

  const signInWithGoogle = async () => {
    try {
      let result = await signInWithPopup(auth, googleprovider)
      setPersistence(auth, inMemoryPersistence)
      setAuthUser(true)
      console.log("result is:", result)
    } catch (error) {
      console.log("Oh no!!", error)
    }
  }

  const signInWithFacebook = async () => {
    try {
      let result = await signInWithPopup(auth, facebookprovider)
      setAuthUser(true)
      console.log("result is:", result)
    } catch (error) {
      console.log("oh no", error)
    }
  }

  const signInWithTwitter = async () => {
    try {
      let result = await signInWithPopup(auth, twitterprovider)
      setAuthUser(true)
      console.log("result is:", result)
    } catch (error) {
      console.log("Oh no!!", error)
    }
  }
  const signInWithApple = async () => {
    try {
      let result = await signInWithPopup(auth, appleprovider)
      setAuthUser(true)
      console.log("result is:", result)
    } catch (error) {
      console.log("Oh no!!", error)
    }
  }
  const signUserOut = () => {
    signOut(auth)
    setAuthUser(false)
    localStorage.removeItem("user")
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const storedUser = localStorage.getItem("user")
      if (currentUser) {
        setAuthUserProfile(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
        window.localStorage.setItem("authUser", "true")
      } else if (storedUser) {
        const parsedUser = storedUser ? JSON.parse(storedUser) : null
        setAuthUser(true)
        setAuthUserProfile(parsedUser)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authUser,
        authUserProfile,
        signInWithEmail,
        signInWithGoogle,
        signInWithFacebook,
        signInWithTwitter,
        signInWithApple,
        signUserOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export const UserAuth = () => {
  return useContext(AuthContext)
}
