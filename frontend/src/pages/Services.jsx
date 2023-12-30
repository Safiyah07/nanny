import nannyImg1 from '../assets/nanny-hero.jpg'
import nannyImg2 from '../assets/nanny2.jpeg'
import nannyImg3 from '../assets/nanny3.jpeg'

function Services() {
	return (
		<>
			<div
				className='pt-24 md:px-8'
				id='services'
			>
				<div className='text-center font-bold mb-6'>
					<h1 className='text-xl tracking-wider'>Services</h1>
					<p className='text-grey'>What we offer</p>
				</div>
				<br />
				<div className='flex gap-12 flex-col'>
					<div className='flex items-center md:flex-col-reverse sm:flex-col-reverse md:gap-12 sm:gap-10 lg:gap-16 lg:px-28'>
						<div className='md:px-4 sm:px-4'>
							<img
								src={nannyImg1}
								alt='Service Img'
								className='lg:h-[20vw]'
							/>
						</div>
						<div className='lg:w-1/2 md:text-center sm:text-center md:px-4 sm:px-4'>
							<h1 className='text-3xl font-extrabold'>
								Flexible Nanny Arrangements
							</h1>
							<br />
							<br />
							<p>
								Whether you&apos;re looking for a live-in or live-out nanny,
								part-time or full-time assistance, we&apos;ve got you covered.
								Our agency offers flexible nanny arrangements to accommodate the
								unique schedules and preferences of your family.
							</p>
						</div>
					</div>
					<div className='flex items-center md:flex-col sm:flex-col md:gap-12 sm:gap-10 lg:gap-16 lg:px-28'>
						<div className='lg:w-1/2 md:text-center sm:text-center md:px-4 sm:px-4'>
							<h1 className='text-3xl font-extrabold'>
								Specialized Nanny Skills
							</h1>
							<br />
							<br />
							<p>
								If your family has specific needs, such as language proficiency,
								special needs care, or early childhood education qualifications,
								we have nannies with a range of specialized skills. Let us find
								the caregiver who possesses the expertise your family requires.
							</p>
						</div>
						<div className='md:px-4 sm:px-4'>
							<img
								src={nannyImg2}
								alt='Service Img'
								className='lg:h-[20vw]'
							/>
						</div>
					</div>
					<div className='flex items-center md:flex-col-reverse sm:flex-col-reverse md:gap-12 sm:gap-10 lg:gap-16 lg:px-28'>
						<div className='md:px-4 sm:px-4'>
							<img
								src={nannyImg3}
								alt='Service Img'
								className='lg:h-[20vw]'
							/>
						</div>
						<div className='lg:w-1/2 md:text-center sm:text-center md:px-4 sm:px-4'>
							<h1 className='text-3xl font-extrabold'>
								Transparent fee structure
							</h1>
							<br />
							<br />
							<p>
								We believe in transparency. Our fee structure is clear and
								straightforward, allowing you to make informed decisions about
								the services that best suit your family&apos;s needs. Explore
								our different packages and payment options.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
