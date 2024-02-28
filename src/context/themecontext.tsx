// import React, { useState, useContext, createContext } from "react";

// type ThemeContextType = {
//   theme: "light" | "dark" | null;
//   setTheme: React.Dispatch<React.SetStateAction<"light" | "dark" | null>>;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function Themeprovider({ children, value }: { children: React.ReactNode, value: ThemeContextType }) {
//   const [theme, setTheme] = useState<"light" | "dark" | null>(null);

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// }
