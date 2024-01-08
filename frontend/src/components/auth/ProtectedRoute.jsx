import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const backendURL = import.meta.env.VITE_BACKEND_URL;

	const getToken = localStorage.getItem('loggedIn_user');

  console.log(getToken)

	const tokenToString = JSON.parse(getToken);
  console.log(tokenToString)

	const token = tokenToString.token;

	const [auth, setAuth] = useState({
		email: '',
		id: '',
		name: '',
		token: `${token}`,
	});

	useEffect(() => {
		const getAuthUser = async () => {
			try {
				const response = await fetch(`${backendURL}/me`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await response.json();
				console.log(data);

				if (response.ok) {
					setAuth((prevState) => {
						console.log(prevState);
						// console.log(data);
						return data; // Update the state with the new data
					});
				}
			} catch (error) {
				console.log(error);
			}
		};

		getAuthUser();
	}, [backendURL, token]);

	// useEffect(() => {
	// 	// Log the updated auth state
	// 	console.log(auth);
	// 	console.log(auth.token);
	// }, [auth]);

	return auth.token ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;
