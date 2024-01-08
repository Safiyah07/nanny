import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
		email: '',
		name: '',
		password: '',
		token: '',
		id: '',
	});

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

			if (password != password2) {
				toast.error('Passwords must match');
				return false;
			}

			if (data.message) {
				toast.error(data.message);
				return false;
			} else if (response.ok) {
				localStorage.setItem('registered_user', JSON.stringify(data));
				toast.success('Registration Successful');
				return true;
			} else {
				return false;
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

			if (data.message) {
				toast.error(data.message);
				return false;
			} else if (response.ok) {
				localStorage.setItem('loggedIn_user', JSON.stringify(data));
				toast.success('Login Successful');
				setLoginData(data);
				return true;
			} else {
				return false;
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	// const logoutUser = () => {}

	// const protectedRoute = () => {}

	useEffect(() => {
		loginUser, registerUser;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				toast,
				loginData,
				formData,
				setFormData,
				registerUser,
				loginUser,
				setLoginData,
			}}
		>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.any,
};

export default AuthContext;
