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
        <div>
          <Header />
          <div className="main-content">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
