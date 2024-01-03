import './index.css'
import PropTypes from 'prop-types'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardIndex from './pages/dashboard'
import DashboardSidebar from './components/dashboard/Sidebar'
import DashboardNavbar from './components/dashboard/Navbar'
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
					element={
						<WithLandingPageNavbar>
							<Landing />
						</WithLandingPageNavbar>
					}
				/>
				<Route
					path='/login'
					element={
						<WithLandingPageNavbar>
							<Login />
						</WithLandingPageNavbar>
					}
				/>
				<Route
					path='/register'
					element={
						<WithLandingPageNavbar>
							<Register />
						</WithLandingPageNavbar>
					}
				/>
				<Route
					path='/dashboard'
					element={
						<WithDashboardNavbar>
							<DashboardIndex />
						</WithDashboardNavbar>
					}
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

// Landing page navbar
const WithLandingPageNavbar = ({ children }) => {
	return (
		<div>
			<Navbar className='relative z-20' />
			{children}
			<ToastContainer />
		</div>
	)
}

// Dashboard navbar and sidebar
const WithDashboardNavbar = ({ children }) => {
	return (
		<div className='flex'>
			<DashboardSidebar />
			<DashboardNavbar />
			{children}
			<ToastContainer />
		</div>
	)
}

export const Root = () => {
	return <Outlet />
}

WithLandingPageNavbar.propTypes = {
  children: PropTypes.any
}

WithDashboardNavbar.propTypes = {
  children: PropTypes.any
}

export default App
