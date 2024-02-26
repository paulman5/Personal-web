import React from "react";
import Image from "next/image";
import "../styles/animations/animations.css";
import Personalimage from "../public/images/profilepicture.svg";
import Techstack from "@/lib/Icons/techstack";

export default function About() {
  return (
    <div className="sm:px-8 mt-9">
      <div
        className="logo-section flex justify-center"
        style={{ color: "white" }}
      >
        <Image src={Personalimage} alt="Profile" priority />
      </div>
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="flex justify-center">
          <h1>Hi, My name is Paul</h1>
        </div>
        <div className="flex justify-center mt-10 text-center">
          <p>
            {" "}
            I am a recent Strategic Management graduate and software engineer
            based in Rotterdam. My coding journey started back in 2021, when I
            decided I wanted to fulfill my dream of building digital products
            and services. Therefore, I took it upon myself to learn how to code
            and I have been invested in process ever since.
          </p>
        </div>
      </div>
      <div className="stack-section relative flex justify-center text-center center self-center top-20">
        <Techstack />
      </div>
    </div>
  );
}
