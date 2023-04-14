import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingNav } from './layouts'
import { Landing } from './pages'

export default function App() {
  return (
    <>
      <LandingNav />
      <Landing />
    </>
  )
}

