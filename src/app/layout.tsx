"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

// Define a type for the context value

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="second-layer w-full ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 stroke-neutral-700 z-10"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <Header />
            <div className="main-content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
