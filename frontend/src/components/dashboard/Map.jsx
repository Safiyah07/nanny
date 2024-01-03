import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FaClipboardCheck, FaSearchLocation } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Map() {
	const services = [
		{
			id: 1,
			header: 'check bookings',
			icon: <FaClipboardCheck />,
			link: 'bookings',
		},
		{
			id: 2,
			header: 'find nanny',
			icon: <FaSearchLocation />,
			link: 'find-nanny',
		},
	]

	return (
		<>
			<div className='flex justify-between mx-5 relative w-full mb-12 mt-16'>
				<section className='w-[50vw]'>
					<MapContainer
						center={[48.8566, 2.3522]}
						zoom={13}
						scrollWheelZoom={false}
						className='border rounded-lg h-[80vh]'
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[51.505, -0.09]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>
				</section>

				<section className='flex flex-col gap-5 w-[25vw] h-auto'>
					{services.map((item) => (
						<div
							key={item.id}
							className='border rounded-lg py-2 sm:w-full h-1/2 flex flex-col items-center justify-center cursor-pointer'
						>
							<Link to={`/${item.link}`} className='flex gap-2 items-center justify-center text-xl capitalize text-grey'>
								{item.icon}
								<p className='text-grey'>{item.header}</p>
							</Link>
						</div>
					))}
				</section>
			</div>
		</>
	)
}

export default Map
