import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const dispatch = useDispatch()

	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	return (
		<>
			<div className='flex flex-col justify-center items-center h-screen bg-grey'>
				<div className='bg-white p-12 w-1/2 m-auto'>
					<section className='flex flex-col items-center text-2xl pb-8'>
						<h1 className='flex gap-4 pb-4'>
							<FaSignInAlt /> Welcome Back!
						</h1>
						<p className=''>Please log into your account </p>
					</section>

					<section className='form'>
						<form onSubmit={onSubmit}>
							<div className='form-group'>
								<input
									type='email'
									className='border-2 w-full'
									id='email'
									name='email'
									value={email}
									onChange={onChange}
									placeholder='Enter your email'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									id='password'
									name='password'
									value={password}
									onChange={onChange}
									placeholder='Enter password'
									required
								/>
							</div>
							<div className='form-group'>
								<button className='btn btn-block'>Submit</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}
