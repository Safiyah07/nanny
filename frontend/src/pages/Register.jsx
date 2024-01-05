import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import AuthContext from '../context/AuthContext';

export default function Register() {
	const {formData, setFormData, registerUser} = useContext(AuthContext)

	const { name, email, password, password2 } = formData

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
			
			await registerUser()
			navigate('/dashboard')
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<>
			<div className='bg-about-image bg-no-repeat bg-top blur-sm bg-cover lg:h-[99vh] md:h-[98vh] sm:h-[95vh] w-full'></div>
			<div className='flex flex-col justify-center items-center absolute top-0 w-full h-screen mx-auto'>
				<div className='p-12 glass-effect lg:w-[60%] w-[85%] m-auto'>
					<section className='flex flex-col items-center pb-8'>
						<h1 className='flex gap-4 text-3xl font-bold pb-4'>
							<FaUser /> Register
						</h1>
						<p className='text-2xl'>Please create your account </p>
					</section>

					<section className='form'>
						<form onSubmit={onSubmit}>
							<div className='form-group'>
								<input
									type='text'
									className='border-2 w-full h-10 p-2 mb-2'
									id='name'
									name='name'
									value={name}
									onChange={onChange}
									placeholder='Enter your name'
									required
								/>
							</div>
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
									className='border-2 w-full h-10 p-2 mb-2'
									id='password'
									name='password'
									value={password}
									onChange={onChange}
									placeholder='Enter password'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									className='border-2 w-full h-10 p-2 mb-6'
									id='password2'
									name='password2'
									value={password2}
									onChange={onChange}
									placeholder='Confirm password'
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
