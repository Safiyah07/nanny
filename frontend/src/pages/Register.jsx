import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, password2 }),
      });

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
			toast.error('Error submitting form:', error)
      console.error('Error submitting form:', error);
    }
  };

	return (
		<>
			<div className='flex flex-col justify-center items-center h-screen bg-slate-300'>
				<div className='p-12 bg-slate-100 w-1/2 m-auto'>
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
								<button className='text-white m-auto w-full h-10   hover:scale-110'>Submit</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}
