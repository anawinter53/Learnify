import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const { auth, setAuth } = useAuth();
    const [ loading, setLoading ] = useState(true)
    const location = useLocation()

    useEffect(() => {
      if (localStorage.getItem("token")) setAuth(true)
      setLoading(false)
    }, [])

    if (!loading) {
      return auth ? <Outlet />  : <Navigate to={'/login'} state={{from: location}} replace />
    }
}