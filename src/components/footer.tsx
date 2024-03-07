"use client"

import React, { useEffect } from "react"
import Modalhook from "../hooks/modalhook"
import { Closebutton } from "../lib/icons/closebutton"
import { Hello } from "../lib/icons/hello"
import { Tooltip as ReactTooltip } from "react-tooltip"

export default function Footer() {
  const { isOpen, openModal, closeModal } = Modalhook()

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = "none"
    } else {
      document.body.style.pointerEvents = "auto"
    }
  }, [isOpen])

  function copyToClipboard() {
    navigator.clipboard.writeText("mierlo.paul@hotmail.com")
  }
  return (
    <>
      <div className="mt-32 ">
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="flex flex-row justify-between mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex ml-10">
                    <h2 className="contact-button font-bold tracking-tight text-zinc-800 sm:text-1xl dark:hover:text-slate-600">
                      <button
                        onClick={openModal}
                        className="hover:cursor-pointer hover:text-neutral-200 transition-all"
                      >
                        Contact me
                      </button>
                    </h2>
                  </div>
                  <div className="text-s text-neutral-400">
                    @Paul van Mierlo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-75 bg-gray-500 cursor-default"></div>
          <div className="fixed overflow-y-auto	w-screen z-10 inset-0 ">
            <div className="fixed overflow-y-auto w-screen z-10 inset-0 flex items-center justify-center">
              <div className="contact-modal relative bg-white text-left pt-5 pb-4 px-4 rounded-lg overflow-hidden pointer-events-auto sm:w-96">
                <div className="">
                  <div className="flex justify-end">
                    <button
                      onClick={closeModal}
                      className="cursor-pointer hover:bg-opacity-35 hover:bg-slate-300 transition-all w-auto"
                    >
                      <Closebutton />
                    </button>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Hello />
                  </div>
                  <div className="flex justify-center mt-4">
                    <h2>Hello visitor!</h2>
                  </div>
                  <div className="flex justify-center mt-3 ">
                    <p>Feel free to contact me</p>
                  </div>
                  <div className="flex justify-center mt-3 ">
                    <button
                      data-tooltip-id="my-tooltip-1"
                      onClick={copyToClipboard}
                      className="my-email font-semibold cursor-pointer"
                    >
                      paulmierlo@hotmail.com
                    </button>
                    <ReactTooltip
                      id="my-tooltip-1"
                      place="bottom"
                      content="Click to copy to clipboard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
