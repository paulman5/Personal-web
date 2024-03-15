"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Personalimage from "../public/images/profilepicture.jpg"
import Lightbutton from "../lib/icons/lightbutton"
import Darkbutton from "../lib/icons/darkbutton"
import { Profileicon } from "../lib/icons/socialicons"
import { Navdata } from "../lib/data/navdata"
import Pathhook from "../hooks/pathhook"
import { useRouter } from "next/navigation"
import Modalhook, { ModalHook } from "../hooks/modalhook"
import Signupmodal from "./modalcomponents/signupmodal"
import { UserAuth } from "../context/AuthContext"
import { sign } from "crypto"

export default function Header() {
  const { authUser, authUserProfile, signUserOut } = UserAuth()
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)
  const { pathname } = Pathhook()
  const router = useRouter()
  const { isOpen, openModal, closeModal }: ModalHook = Modalhook()

  const navDataMap = Navdata.map((item) => (
    <li key={item.id}>
      <button className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
        <a href={item.href}>{item.title}</a>
      </button>
    </li>
  ))

  useEffect(() => {
    if (authUser) {
      closeModal()
    }
  }, [authUser, closeModal])

  useEffect(() => {
    const navigationdiv = document.querySelector(".about-section")
    if (pathname != "/" && navigationdiv) {
      navigationdiv.classList.add("hidden")
    } else {
      navigationdiv?.classList.remove("hidden")
    }
  }, [pathname])

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    console.log(storedTheme)

    setTheme(storedTheme ?? "light")
  }, [])

  useEffect(() => {
    const secondLayer = document.querySelector(".second-layer")
    if (theme !== null) {
      localStorage.setItem("theme", theme)
      if (theme) {
        document.documentElement.classList.remove("light", "dark", "null")
        document.documentElement.classList.add(theme)
      }
      if (theme === "dark") {
        secondLayer?.classList.remove("second-layer-light")
        secondLayer?.classList.add("second-layer-dark")
      } else if (theme === "light") {
        secondLayer?.classList.remove("second-layer-dark")
        secondLayer?.classList.add("second-layer-light")
      }
    }
  }, [theme])

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                const secondLayer = document.querySelector(".second-layer");
                document.documentElement.classList.add(theme);
                if (theme === "dark") {
                  secondLayer?.classList.remove("second-layer-light");
                  secondLayer?.classList.add("second-layer-dark");
                } else if (theme === "light") {
                  secondLayer?.classList.remove("second-layer-dark");
                  secondLayer?.classList.add("second-layer-light");
                }
              })()
            `,
        }}
      />
      <header className="relative z-50 flex flex-none flex-col h-36">
        <div className="top-0 z-10 h-16">
          <div className="sm:px-8 w-full">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div
                      className="logo-section flex mt-20"
                      style={{ color: "white", cursor: "pointer" }}
                    >
                      <Link href="/" className="">
                        <Image
                          style={{ borderRadius: "9999px" }}
                          width={60}
                          height={60}
                          src={Personalimage}
                          alt="Profile"
                          priority
                        />
                      </Link>
                    </div>
                    <div className="about-section absolute flex text-lg left-1/2 transform -translate-x-1/2 gap-10 pt-5">
                      <ul className="flex flex-row gap-5">{navDataMap}</ul>
                    </div>
                    <div
                      className="absolute flex flow-row text-lg transform -translate-x-1/2 gap-8 pt-16"
                      style={{ left: "90%" }}
                    >
                      {!authUser ? (
                        <div className="flex bg-green-400 w-16 h-10 justify-center rounded-md text-base hover:bg-green-300 transition-all">
                          <button onClick={openModal}>Login</button>
                        </div>
                      ) : (
                        <>
                          <button className="flex flex-row justify-center text-center items-center w-28 h-8 hover:bg-slate-200 transition-all gap-3 rounded-3xl border-none">
                            <h2 className="font-medium">
                              {authUserProfile?.displayName}
                            </h2>
                            <Profileicon />
                          </button>
                          <div>
                            <button onClick={signUserOut}>Logout</button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="theme-section fixed h-10 w-12 rounded-full flex-end right-10 mt-5">
                      <button
                        onClick={() => {
                          const newTheme = theme == "dark" ? "light" : "dark"
                          setTheme(newTheme)
                        }}
                        className="h-10 w-12 rounded-full flex items-center justify-center"
                      >
                        {theme === "dark" ? <Darkbutton /> : <Lightbutton />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen && <Signupmodal closeModal={closeModal} />}
    </>
  )
}
