import servicesImage from '../assets/services-image.jpg'
import servicesImage2 from '../assets/services-image2.jpg'
import servicesImage3 from '../assets/services-image3.jpg'

function Services() {
	return (
		<>
			<div
				className='pt-24 md:px-8'
				id='services'
			>
				<div className='text-center font-bold'>
					<h1 className='text-xl tracking-wider'>Services</h1>
					<p className='text-grey'>What we do</p>
				</div>
				<br />

				{/* <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:gap-12 sm:gap-10 lg:gap-16 lg:px-24 h-28'> */}
        <div className='flex md:flex-col sm:flex-col md:gap-12 sm:gap-10 lg:gap-16 lg:px-28'>
					<div className=''>
						<img
							src={servicesImage}
							alt='Service Img'
              className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={servicesImage2}
							alt='Second Service Img'
              className='lg:h-[15vw]'
						/>
					</div>

					<div className=''>
						<img
							src={servicesImage3}
							alt='Third Service Img'
              className='lg:h-[15vw]'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
