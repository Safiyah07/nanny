import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound';

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
	return (
		<>
			<div className=''>
				<Navbar className='relative z-20' />
				<Outlet />
			</div>
		</>
	)
}

export default App
