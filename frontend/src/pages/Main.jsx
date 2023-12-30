import { Link } from 'react-router-dom'

function Main() {
	return (
		<>
			<div>
				<div
					id='home'
					className='bg-hero-image bg-no-repeat bg-top blur-sm bg-cover lg:h-[99vh] md:h-[98vh] sm:h-[95vh] w-full'
				></div>
				<div className='absolute top-1/3 w-full flex items-center justify-center h-auto md:justify-center sm:justify-center'>
					<div className='glass-effect z-0 lg:w-[40%] md:w-[87.5%] md:m-auto sm:w-[89%] sm:m-auto px-8 py-6 capitalize flex flex-col justify-center items-center text-off-white text-center tracking-wider'>
						<h1 className='font-extrabold lg:text-4xl md:text-3xl sm:text-2xl'>
							Creating a caring space for your kids.
						</h1>
						<br />
						<Link
							to='/register'
							className='w-1/3 p-3 duration-100 delay-75 bg-grey hover:scale-105'
						>
							Register Now
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
