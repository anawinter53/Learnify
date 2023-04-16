import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingNav, SideNav } from './layouts'
import { Landing, Login, Signup, Dashboard, Quizzes, Flashcards, Friends } from './pages'
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
        <Route path='/dashboard' element={<SideNav />}>
          <Route index element={<Dashboard />}/>
          <Route path="/dashboard/quizzes" element={<Quizzes />}/>
          <Route path="/dashboard/flashcards" element={<Flashcards />}/>
          <Route path="/dashboard/friends" element={<Friends />}/>
        </Route>
      </Routes>
    </>
  )
}

