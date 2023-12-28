import aboutImage from '../assets/about-image.jpg'

function About() {
	return (
		<div>
			<div
				className='pt-24 md:px-8'
				id='about'
			>
				<div className='text-center font-bold'>
					<h1 className='text-xl tracking-wider'>About company</h1>
					<p className='text-grey'>Some History</p>
				</div>
				<br />

				<div className='flex gap-10 md:flex-wrap sm:flex-wrap'>
					<div className='lg:w-2/3 lg:ml-[6.2rem] md:text-center sm:text-center'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
							saepe eveniet atque aperiam minus aliquam ipsam omnis excepturi
							dolore autem magnam unde qui nobis, nam ullam quaerat. Voluptate,
							error voluptatum.
						</p>
						<br />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
							saepe eveniet atque aperiam minus aliquam ipsam omnis excepturi
							dolore autem magnam unde qui nobis, nam ullam quaerat. Voluptate,
							error voluptatum.
						</p>
						<br />
						<a href='#news'>
							<button className='bg-grey text-off-white uppercase w-1/3 p-3 hover:scale-105 delay-75 duration-100'>
								More
							</button>
						</a>
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
