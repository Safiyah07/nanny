import { Navbar } from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'
import Dashboard from './Dashboard'

export default function Index() {
	return (
		<>
			<div className='flex'>
				<Sidebar />
				<div>
					<Navbar />
					<div className='relative top-0'>
						<Dashboard />
					</div>
				</div>
			</div>
		</>
	)
}
