import aboutImage from '../assets/nanny1.webp'

function About() {
	return (
		<div>
			<div
				className='pt-24 md:px-8'
				id='about'
			>
				<div className='text-center font-bold'>
					<h1 className='text-xl tracking-wider'>About Nanny</h1>
					<p className='text-grey'>Why Trust Us?</p>
				</div>
				<br />

				<div className='flex gap-10 md:flex-wrap sm:flex-wrap'>
					<div className='lg:w-2/3 lg:ml-[6.2rem] md:text-center sm:text-center'>
					<p>
							We believe in creating lasting
							relationships between families and nannies. Discover the joy
							of a well-matched nanny with Nanny. Your family&apos;s happiness starts here.
						</p>
						<br />
						<p>
							At Nanny, we understand that finding the right caregiver for your children is a crucial decision. Our mission is to make the process of hiring a nanny seamless, stress-free, and tailored to your family&apos;s unique needs.</p>
							<br />
							<p> With years of experience in the childcare industry, we take pride in connecting families with highly qualified and caring nannies who share our commitment to providing a nurturing and safe environment for your little ones.
						</p>
						
					</div>

					<div className=''>
						<img
							src={aboutImage}
							alt='About Img'
							className='lg:h-[50vh] sm:w-full lg:mr-[31rem]'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
