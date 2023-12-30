function Contact() {
	return (
		<>
			<div className='pt-20' id="contact">
				<div className='bg-services-image3 bg-fixed bg-no-repeat bg-center bg-cover h-[50vh] sm:h-[30vh] w-full'>
					<div className='pt-12 sm:pt-8 md:px-8'>
						<div className='text-off-white text-center pb-8 lg:text-xl md:text-lg sm:text-sm'>
							<h1 className=' tracking-wider'>Sign up for Nanny news</h1>
							<p>You will recieve notifications about nanny news</p>

							<div className='flex justify-center pt-16 sm:pt-8'>
								<input
									type='text'
									placeholder='E-mail'
									className='p-4 w-1/2'
								/>
								<button className='bg-grey text-off-white p-3 hover:scale-105 delay-75 duration-100'>
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-black text-white grid grid-cols-5 p-10 text-sm lg:gap-28  sm:grid-cols-1 sm:text-center md:gap-20'>
					<div className='col-span-2 lg:pt-7'>
						<h1>Nanny</h1>
						<br className='sm:hidden' />
						<p>
						Choose Nanny for a nanny placement experience that goes beyond expectations. Your family&apos;s well-being is our priority, and we look forward to assisting you in finding the perfect caregiver for your loved ones.
						</p>
					</div>

					<div className='flex flex-col pt-7'>
						<h1>Useful Links</h1>
						<br className='sm:hidden' />
						<a href='#home'>Sign Up as Nanny</a>
						<a href='#home'>Top</a>
						<a href='#services'>Services</a>
						<a href='#about'>About</a>
					</div>

					<div className='col-span-2 pt-7'>
						<h1>Contact</h1>
						<br className='sm:hidden' />
						<p>Address: Gwarinpa, Abuja, Nigeria</p>
						<p>
							<a href='tel:+234 234 567 8901'>Number: +234 234 567 8901</a>
						</p>
						<p>
							<a
								href='mailto:nanny@gmail.com'
								className='break-all'
							>
								Email: nanny@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
