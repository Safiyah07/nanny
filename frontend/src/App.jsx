import './index.css'
import PropTypes from 'prop-types'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './context/AuthContext'
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
						<LandingPageLayout>
							<Landing />
						</LandingPageLayout>
					}
				/>
				<Route
					path='/login'
					element={
						<LandingPageLayout>
							<Login />
						</LandingPageLayout>
					}
				/>
				<Route
					path='/register'
					element={
						<LandingPageLayout>
							<Register />
						</LandingPageLayout>
					}
				/>
				<Route
					path='/dashboard'
					element={
						<DashboardLayout>
							<DashboardIndex />
						</DashboardLayout>
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
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</>
	)
}

// Landing page navbar
const LandingPageLayout = ({ children }) => {
	return (
		<div>
			<Navbar className='relative z-20' />
			{children}
			<ToastContainer />
		</div>
	)
}

// Dashboard navbar and sidebar
const DashboardLayout = ({ children }) => {
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

LandingPageLayout.propTypes = {
	children: PropTypes.any,
}

DashboardLayout.propTypes = {
	children: PropTypes.any,
}

export default App
