import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingNav } from './layouts'
import { Landing, Login, Signup } from './pages'
import { Shapes } from './components'

export default function App() {
  return (
    <>
      <Shapes />
      <Routes>
        <Route path="/" element={<LandingNav />}>
          <Route index element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Route>
      </Routes>
    </>
  )
}

