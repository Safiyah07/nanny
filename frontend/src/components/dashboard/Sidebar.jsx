import { useLocation, Link } from 'react-router-dom'
import {
	FaGripVertical,
	FaUserCheck,
	FaCheckCircle,
	FaUserSlash,
	FaEyeSlash,
	FaCog,
	FaSignOutAlt,
} from 'react-icons/fa'

export const DashboardSidebar = () => {
	const navbarItems = [
		{
			id: 1,
			title: 'dashboard',
			icon: <FaGripVertical />,
			link: 'dashboard',
		},
		{
			id: 2,
			title: 'employed nannies',
			icon: <FaUserCheck />,
			link: 'employed-nannies',
		},
		{
			id: 3,
			title: 'completed services',
			icon: <FaCheckCircle />,
			link: 'completed-services',
		},
		{
			id: 4,
			title: 'cancelled services',
			icon: <FaUserSlash />,
			link: 'cancelled-services',
		},
		{
			id: 5,
			title: 'report nanny',
			icon: <FaEyeSlash />,
			link: 'report-nanny',
		},
	]

	const navbarItemsBottom = [
		{
			id: 1,
			title: 'settings',
			icon: <FaCog />,
		},
		{
			id: 2,
			title: 'log-out',
			icon: <FaSignOutAlt />,
		},
	]

	const location = useLocation()

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true
		}
	}

	return (
		<>
			{/* Sidebar for larger screens */}
			<div className='w-max flex rounded-lg border my-2 mx-4'>
				<div className='relative flex flex-col justify-between w-max h-[96vh] sm:hidden md:hidden'>
					<div>
						<Link
							to='/dashboard'
							className='flex items-center p-4'
						>
							<h1 className='text-grey text-xl font-bold text-center uppercase'>
								Nanny
							</h1>
						</Link>

						<ul className='p-4 rounded-box'>
							{navbarItems.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<Link
										to={`/${Item.link}`}
										className={`${
											pathMatchRoute(`/${Item.link}`) && 'text-white bg-grey'
										} flex items-center mb-1 py-2 px-4 w-full rounded-md text-grey hover:bg-grey hover:text-white`}
									>
										<span className='mr-2'>{Item.icon}</span>
										{Item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<ul className='p-4 rounded-box'>
							{navbarItemsBottom.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<Link
										to={`/${Item.title}`}
										className={`${
											pathMatchRoute(`/${Item.title}`) && 'text-white bg-grey'
										} flex items-center mb-1 py-2 px-4 w-full rounded-md text-grey hover:bg-grey hover:text-white`}
									>
										<span className='mr-2'>{Item.icon}</span>
										{Item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardSidebar
