"use client";

import React, { useState, useEffect } from "react";
import Personalimage from "../public/images/profilepicture.svg";
import Logo from "../lib/Icons/logo";
import Lightbutton from "../lib/Icons/lightbutton";
import Darkbutton from "../lib/Icons/darkbutton";
import { useRouter } from "next/navigation";

export default function Header({}) {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log(storedTheme);
    setTheme(storedTheme ?? "light");
  }, []);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
      if (theme) {
        document.documentElement.classList.remove("light", "dark", "null");
        document.documentElement.classList.add(theme);
      }
    }
  }, [theme]);

  const handleNavigation = (event: any) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              })()
            `,
        }}
      />
      <div
        className="sticky top-0 z-50 flex pt-5 pl-52 justify-between"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
      >
        <div className="logo-section " style={{ color: "white" }}>
          <button onClick={handleNavigation}>
            <img src={Personalimage} alt="Profile"/>
          </button>
        </div>
        <div className="about-section flex text-lg absolute left-1/2 transform -translate-x-1/2 pt-5 gap-10">
          <button>About</button>
          <button>Projects</button>
          <button>Articles</button>
        </div>
        <div className="theme-section h-12 w-16 rounded-full mr-20">
          <button
            onClick={() => {
              const newTheme = theme == "dark" ? "light" : "dark";
              setTheme(newTheme);
            }}
            className="h-12 w-16 rounded-full flex items-center justify-center"
          >
            {theme === "dark" ? <Darkbutton /> : <Lightbutton />}
          </button>
        </div>
      </div>
    </>
  );
}
