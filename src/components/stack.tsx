import React from "react";
import { Stackbuttons } from "@/lib/Data/techstackdata";

export default function Stack() {
  const stackbuttons = Stackbuttons.map((item) => (
    <div className="relative h-24" key={item.id}>
      <div className="stack-button flex justify-center w-20 ml-5">
        {item.icon}
      </div>{" "}
      <div className="absolute float-left bottom-full left-1/2 transform -translate-x-1/2 hidden z-10">
        <p>{item.label}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          My Tech Stack
        </h1>
      </div>
      <div className="flex justify-center items-center mt-14">
        <div className="stack-section grid grid-cols-3 gap-3">
          {stackbuttons}
        </div>
      </div>
    </>
  );
}
