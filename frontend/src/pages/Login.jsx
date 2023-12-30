import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = async (e) => {
		e.preventDefault()

		try {
      const response = await fetch('http://localhost:3010/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
			toast.error('Error submitting form:', error)
      console.error('Error submitting form:', error);
    }
	}

	return (
		<>
			<div className='flex flex-col justify-center items-center h-screen bg-slate-300'>
				<div className='p-12 bg-slate-100 w-1/2 m-auto'>
					<section className='flex flex-col items-center pb-8'>
						<h1 className='flex gap-4 text-3xl font-bold pb-4'>
							<FaSignInAlt /> Welcome Back!
						</h1>
						<p className='text-2xl'>Please log into your account </p>
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
								<button className='text-white m-auto w-full h-10   hover:scale-110'>Submit</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}
