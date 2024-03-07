import React from "react"
import { Roadmap } from "../lib/icons f/roadmap"

export default function Project() {
  return (
    <>
      <div className="sm:px-8 mt-9" id="scroll-2">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                  My Projects
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {" "}
                  For my first real-world project I am building legal SaaS
                  solution in which I have learned a lot about frontend and
                  backend engineering. Additionally, this application leverages
                  external APIs to enhance efficiency of the software
                  architecture. Due to the use of external APIs user experience
                  is enhanced through combining rich feature sets of our own
                  implementations and already existing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 ">
        <Roadmap />
      </div>
    </>
  )
}
