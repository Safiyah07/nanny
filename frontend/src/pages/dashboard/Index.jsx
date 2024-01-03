import { Navbar } from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'
import Dashboard from './Dashboard'

export default function Index() {
	return (
		<>
			<div className='flex'>
			<Sidebar />
			<Navbar />
			<Dashboard />
				<div className=''>
					<div className=''></div>
				</div>
			</div>
		</>
	)
}
