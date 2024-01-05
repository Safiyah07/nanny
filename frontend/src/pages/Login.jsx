import { useContext } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../context/AuthContext'

export default function Login() {
	const {formData, setFormData, loginUser} = useContext(AuthContext)

	const {email, password} = formData

	const navigate = useNavigate()

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = async (e) => {
		e.preventDefault()

		try {
			if(email && password) {
				await loginUser()
				navigate('/dashboard')
			}
			
		} catch (error) {
			console.log(error)
			toast.error(error)
		}

	}

	return (
		<>
		<div className='bg-about-image bg-no-repeat bg-top blur-sm bg-cover lg:h-[99vh] md:h-[98vh] sm:h-[95vh] w-full'></div>
			<div className='flex flex-col justify-center items-center absolute top-0 w-full h-screen'>
				<div className='px-12 py-20 glass-effect lg:w-[60%] w-[85%] m-auto'>
					<section className='flex flex-col items-center pb-8'>
						<h1 className='flex gap-4 lg:text-3xl text-2xl font-bold pb-4'>
							<FaSignInAlt /> Welcome Back!
						</h1>
						<p className='lg:text-2xl text-base'>
							Please log into your account{' '}
						</p>
					</section>

					<section className='form'>
						<form onSubmit={onSubmit}>
							<div className='form-group'>
								<input
									type='email'
									className='border-2 w-full h-10 p-2 mb-2'
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
									className='border-2 w-full h-10 p-2 mb-6'
									id='password'
									name='password'
									value={password}
									onChange={onChange}
									placeholder='Enter password'
									required
								/>
							</div>
							<div className='bg-black border-black border-2'>
								<button className='text-white m-auto w-full h-10   hover:scale-110'>
									Submit
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}
