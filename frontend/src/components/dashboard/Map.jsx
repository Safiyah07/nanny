import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
	return (
		<>
			<div className='relative w-[50vw] mb-12 mt-16'>
				<MapContainer
					center={[48.8566, 2.3522]}
					zoom={13}
					scrollWheelZoom={false}
					className='h-[80vh]'
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
			</div>
		</>
	)
}

export default Map
