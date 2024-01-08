import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProtectedRoute() {
	const [auth, authData] = useState({
		user: '',
		name: '',
		email: '',
	});

	const { user } = auth;

	useEffect(() => {
		const getAuthUser = async () => {
			const getToken = localStorage.getItem('loggedIn_user');
			const tokenToString = JSON.parse(getToken);

			console.log(tokenToString.token);
			const token = tokenToString.token;

			try {
				const response = await fetch('http://localhost:3010/api/users/me', {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ user }),
				});

				const data = await response.json();
				console.log(data);

				if (!response.ok) {
					toast.info("You're Authorised to access this page");
				}
			} catch (error) {
				console.log(error);
			}
		};

		getAuthUser();
	}, []);

	return auth.token ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;
