import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingNav, SideNav } from "./layouts";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  Landing,
  Login,
  Signup,
  Dashboard,
  Quizzes,
  Flashcards,
  Friends,
} from "./pages";
import { Shapes } from "./components";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { setAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) setAuth(true)
  }, [])

  return (
    <>
      <Shapes />
      <Routes>
        <Route path="/" element={<LandingNav />}>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<SideNav />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/quizzes" element={<Quizzes />} />
            <Route path="/dashboard/flashcards" element={<Flashcards />} />
            <Route path="/dashboard/friends" element={<Friends />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
