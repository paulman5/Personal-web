import React from "react"
import About from "../components/about"
import Stack from "../components/stack"
import Project from "../components/project"
import Article from "../components/article"
import Footer from "../components/footer"

export default function page() {
  return (
    <>
      <About />
      <Stack />
      <Project />
      <Article />
      <Footer />
    </>
  )
}
