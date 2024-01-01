import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsBarChartLine, BsCalendar2Date } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import {
	IoPersonCircleSharp,
	IoNotificationsOutline,
	IoClose,
} from 'react-icons/io5'
import {
	TbLayout2,
	TbPhoneCheck,
	TbTruckDelivery,
	TbMessageCircle2,
	// TbSearch,
	TbSettings,
} from 'react-icons/tb'
import { VscLayoutMenubar } from 'react-icons/vsc'

export const Navbar = () => {
	const navbarItems = [
		{
			id: 1,
			title: 'dashboard',
			icon: <TbLayout2 />,
			link: '',
		},
		{
			id: 2,
			title: 'menu',
			icon: <VscLayoutMenubar />,
			link: 'menu',
		},
		{
			id: 3,
			title: 'orders',
			icon: <TbPhoneCheck />,
			link: 'orders',
		},
		{
			id: 4,
			title: 'staff',
			icon: <IoIosPeople />,
			link: 'staff',
		},
		{
			id: 5,
			title: 'delivery',
			icon: <TbTruckDelivery />,
			link: 'delivery',
		},
		{
			id: 6,
			title: 'analytics',
			icon: <BsBarChartLine />,
			link: 'analytics',
		},
		{
			id: 7,
			title: 'messenger',
			icon: <TbMessageCircle2 />,
			link: 'messenger',
		},
		{
			id: 8,
			title: 'calender',
			icon: <BsCalendar2Date />,
			link: 'calender',
		},
		{
			id: 9,
			title: 'notifications',
			icon: <IoNotificationsOutline />,
			link: 'notifications',
		},
		{
			id: 10,
			title: 'settings',
			icon: <TbSettings />,
			link: 'settings',
		},
		{
			id: 11,
			title: 'log-out',
			icon: <IoPersonCircleSharp />,
			link: 'log-out',
		},
	]

	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	return (
		<>
			<div className='flex flex-row items-center justify-between w-[100%] pb-2'>
				<div className='lg:hidden'>
					<label
						tabIndex={0}
						className='cursor-pointer'
						onClick={menuDisplay}
					>
						<div className='p-2 border-2 border-violet-200 rounded-xl sm:p-1 '>
							{showMenu ? (
								<BiMenuAltLeft size='20px' />
							) : (
								<IoClose size='20px' />
							)}
						</div>
					</label>
					<ul
						tabIndex={0}
						onClick={menuDisplay}
						className={
							showMenu
								? 'hidden'
								: 'absolute mt-3 p-2 bg-base-100 rounded-box w-[97vw] z-10'
						}
					>
						{navbarItems.map((Item) => (
							<li
								key={Item.id}
								className='capitalize'
							>
								<Link
									to={`/${Item.link}`}
									className='flex items-center px-2 py-[10px] rounded hover:bg-light-purple hover:text-white'
								>
									<span className='mr-2'>{Item.icon}</span>
									{Item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='flex items-center max_md:hidden'>
					<FaUser />
					<div className='flex-1 text-lg'>
						{''}
						Hello,
						<span className='text-light-purple'> Princess</span>! Welcome Back
					</div>
				</div>
				<Link
					to='/'
					className='flex items-center p-4 lg:hidden'
				>
					<h1 className={'text-xl sm:text-lg font-bold uppercase text-center'}>
						Nanny
					</h1>
				</Link>

				{/* Right Side Navigation Icon */}
				<div className='flex items-center'>
					{/* Notification Icon for md and lg */}
					<div className='flex'>
						<div className='p-2 border-2 rounded-xl border-violet-200 max_md:mr-2 sm:hidden'>
							<Link to='/settings'>
								<IoNotificationsOutline size='20px' />
							</Link>
						</div>

						<div className='w-10 h-10 overflow-hidden border-2 lg:hidden sm:h-8 sm:w-8 lg:mr-3 rounded-xl border-violet-200'>
							<FaUser />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
