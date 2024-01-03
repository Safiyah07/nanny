import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
	const user = { loggedIn: false }
	return user && user.loggedIn
}

function ProtectedRoute() {
  useEffect(() => {
    console.log('Hey')
  }, [])


  const isAuth = useAuth()

	return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute
