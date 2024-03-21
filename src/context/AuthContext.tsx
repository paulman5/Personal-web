// import {
//   useContext,
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react"
// import GoogleProvider from "next-auth/providers/google"

// interface AuthContextType {
//   authUser: boolean
//   authUserProfile: null
//   // signInWithEmail: () => void
//   signInWithGoogle: () => void
//   signInWithFacebook: () => void
//   signInWithTwitter: () => void
//   signInWithApple: () => void
//   signUserOut: () => void
// }

// const AuthContext = createContext<AuthContextType>({
//   authUser: false,
//   authUserProfile: null,
//   // signInWithEmail: () => {},
//   signInWithGoogle: () => {},
//   signInWithFacebook: () => {},
//   signInWithTwitter: () => {},
//   signInWithApple: () => {},
//   signUserOut: () => {},
// })

// export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
//   const [authUser, setAuthUser] = useState(false)
//   const [token, setToken] = useState("")

//   return <AuthContext.Provider value={empty}>{children}</AuthContext.Provider>
// }
// export const UserAuth = () => {
//   return useContext(AuthContext)
// }
