import { Navbar } from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'

export default function Dashboard() {
	return (
		<>
			<div className='w-fit flex'>
				<Sidebar />
				<div>
					<Navbar />
				</div>
			</div>
		</>
	)
}
