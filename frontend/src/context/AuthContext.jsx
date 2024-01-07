import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const [loginData, setLoginData] = useState({
		name: '',
		email: '',
		token: '',
	});

	let registerResult
	let loginResult

	const [registerData, setRegisterData] = useState();

	const registerUser = async () => {
		const { name, email, password, password2 } = formData;

		try {
			const response = await fetch(`${backendURL}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password, password2 }),
			});
			const data = await response.json();
			setRegisterData(data);
			registerResult = data

			if (response.ok) {
				toast.success('Registration Successful');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const loginUser = async () => {
		const { email, password } = formData;

		try {
			const response = await fetch(`${backendURL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();
			loginResult = data

			if (!response.ok) {
				toast.error(data.message);
			} else {
				setLoginData(data);
				toast.success('Login Successful');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	// const logoutUser = () => {}

	// const protectedRoute = () => {}

	useEffect(() => {
		registerUser();
		loginUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				loginData,
				registerData,
				formData,
				setFormData,
				registerUser,
				loginUser,
				setLoginData,
				setRegisterData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.any,
};

export default AuthContext;
