import { useLocation, Link } from 'react-router-dom'
import {
	TbLayout2,
	TbPhoneCheck,
	TbSettings,
} from 'react-icons/tb'
import { VscLayoutMenubar } from 'react-icons/vsc'
import { IoIosPeople } from 'react-icons/io'
import { IoPersonCircleSharp } from 'react-icons/io5'

export const DashboardSidebar = () => {
	const navbarItems = [
		{
			id: 1,
			title: 'employed nannies',
			icon: <TbLayout2 />,
			link: '',
		},
		{
			id: 2,
			title: 'completed servies',
			icon: <VscLayoutMenubar />,
			link: 'menu',
		},
		{
			id: 3,
			title: 'cancelled services',
			icon: <TbPhoneCheck />,
			link: 'orders',
		},
		{
			id: 4,
			title: 'report nanny',
			icon: <IoIosPeople />,
			link: 'staff',
		},
	]

	const navbarItemsBottom = [
		{
			id: 1,
			title: 'settings',
			icon: <TbSettings />,
		},
		{
			id: 2,
			title: 'log-out',
			icon: <IoPersonCircleSharp />,
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
			<div className='w-fit h-screen flex text-black bg-violet-shade shadow-[1px_1px_3px_0px_grey] overflow-y-auto z-10'>
				<div className='relative flex flex-col justify-between w-fit h-full sm:hidden md:hidden'>
					<div>
						<Link
							to='/dasboard'
							className='flex items-center p-4'
						>
							<h1 className='text-xl font-bold text-center uppercase'>Nanny</h1>
						</Link>

						<ul className='p-4 rounded-box'>
							<span className='pb-1 text-sm text-slate-400'>Main Menu</span>

							{navbarItems.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<Link
										to={`/${Item.link}`}
										className={`${
											pathMatchRoute(`/${Item.link}`) &&
											'text-white bg-light-purple'
										} flex items-center mb-1 py-2 px-4 w-full rounded-lg hover:bg-light-purple hover:text-white`}
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
											pathMatchRoute(`/${Item.title}`) &&
											'text-white bg-light-purple'
										} flex items-center mb-1 py-2 px-4 w-full rounded-lg hover:bg-light-purple hover:text-white`}
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
