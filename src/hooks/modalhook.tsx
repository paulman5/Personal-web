"use client"

import React, { useState } from "react"

export default function Modalhook() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal }
}
