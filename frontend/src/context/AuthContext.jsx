import PropTypes from 'prop-types'
import { useState, createContext } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const backendURL = import.meta.env.VITE_BACKEND_URL

export const AuthProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const registerUser = async () => {
		const { name, email, password, password2 } = formData

		const response = await fetch(`${backendURL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password, password2 }),
		})
		const data = await response.json()

		if (response.ok) {
			toast.success('Registration Successful')
		}

		toast.error(data.message)
	}

	const loginUser = async () => {
		const { email, password } = formData

		const response = await fetch(`${backendURL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		})

		const data = await response.json()
		console.log(data)

		if (response.ok) {
			toast.success('Login Successful')
		} else {
			toast.error(data.message)
		}
	}

	// const logoutUser = () => {}

	// const protectedRoute = () => {}

	return (
		<AuthContext.Provider
			value={{ formData, setFormData, registerUser, loginUser }}
		>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.any,
}

export default AuthContext
