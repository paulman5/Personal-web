import React from "react";
import "../styles/animations/animations.css";
import { Socialdata } from "@/lib/Data/socialdata";

const socialitems = Socialdata.map((item) => (
  <a
    key={item.id}
    href={item.href}
    className="group -m-1 p-1 pointer-events-auto cursor-pointer"
  >
    <svg className="socialicons h-6 w-6">{item.icon}</svg>
  </a>
));

export default function About() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Software engineer, Blockchain learner.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {" "}
                I am a recent Strategic Management graduate and software
                engineer based in Rotterdam. My coding journey started back in
                2021, when I decided I wanted to fulfill my dream of building
                digital products and services. Therefore, I took it upon myself
                to learn how to code and I have been invested in process ever
                since.
              </p>
              <div className="mt-6 flex gap-6">{socialitems}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
