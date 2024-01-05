
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

// const useAuth = () => {
// 	const user = { loggedIn: false }
// 	return user && user.loggedIn
// }


function ProtectedRoute() {
  const [auth, authData] = useState({
    name: '',
    email: '',
  })
  
  const getAuthUser = async () => {
    let token 
  
    try {
      const response = await fetch('http://localhost:3010/api/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({user})
      })
  
      const data = await response.json()
  
      if(!response.ok) {
        toast.info("You're Authorised to access this page")
      }
    } catch (error) {
      console.log(error)
    }
  
  }
  // const isAuth = useAuth()
  let auth = {'token': false}

	return auth.token ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute
