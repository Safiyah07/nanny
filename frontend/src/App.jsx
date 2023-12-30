import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
	useLocation,
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<Root />}
			>
				<Route
					index
					element={<Landing />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='/*'
					element={<NotFound />}
				/>
			</Route>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export const Root = () => {
	const location = useLocation()

	const showNavbar = !location.pathname.startsWith('/dashboard');

	return (
		<>
			<div className=''>
				{showNavbar && (
        <div className=''>
          <Navbar className='relative z-20' />
        </div>
      )}
				<Outlet />
			</div>
			<ToastContainer />
		</>
	)
}

export default App
