
import { Navigate, Outlet } from 'react-router-dom'

// const useAuth = () => {
// 	const user = { loggedIn: false }
// 	return user && user.loggedIn
// }

function ProtectedRoute() {
  // const isAuth = useAuth()
  let auth = {'token': false}

	return auth.token ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute
