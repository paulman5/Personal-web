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
      <header
        className="sticky top-0 z-50 flex pt-3justify-between h-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
      >
        <div className="mr-20 ml-20">
          <div className="about-section absolute flex text-lg left-1/2 transform -translate-x-1/2 gap-10 pt-5">
            <button>About</button>
            <button>Projects</button>
            <button>Articles</button>
          </div>
          <div className="theme-section absolute h-12 w-16 rounded-full flex-end right-10 mt-5">
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
      </header>
    </>
  );
}
