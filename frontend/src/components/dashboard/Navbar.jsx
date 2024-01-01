import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	FaUser,
	FaGripVertical,
	FaUserCheck,
	FaCheckCircle,
	FaUserSlash,
	FaEyeSlash,
	FaCog,
	FaSignOutAlt,
	FaBars,
} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export const Navbar = () => {
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
		{
			id: 6,
			title: 'settings',
			icon: <FaCog />,
			link: 'settings',
		},
		{
			id: 7,
			title: 'log-out',
			icon: <FaSignOutAlt />,
			link: 'log-out',
		},
	]

	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	return (
		<>
			<div className='flex flex-row items-center justify-end absolute right-0 w-[100%] m-4 pb-2 '>
				<div className='lg:hidden'>
					<label
						tabIndex={0}
						className='cursor-pointer'
						onClick={menuDisplay}
					>
						<div className='p-2 border-2 border-gray-300 rounded-full sm:p-1 '>
							{showMenu ? (
								<FaBars
									color='grey'
									size='20px'
								/>
							) : (
								<FaXmark
									color='grey'
									size='20px'
								/>
							)}
						</div>
					</label>
					<ul
						tabIndex={0}
						onClick={menuDisplay}
						className={
							showMenu
								? 'hidden'
								: 'absolute right-0 mt-3 p-2 bg-base-100 w-[97vw] z-10'
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

				{/* Right Side Navigation Icon */}
				<div className='flex justify-between items-center'>
					<Link
						to='/dashboard'
						className='flex items-center p-4 lg:hidden'
					>
						<h1 className='text-grey text-xl sm:text-lg font-bold uppercase text-center'>
							Nanny
						</h1>
					</Link>
					{/* Notification Icon for md and lg */}
					<div className='flex'>
						<Link
							to='/profile'
							className='flex items-center border border-gray-300 p-2 mr-2 rounded-full max_md:hidden'
						>
							<FaUser
								color='grey'
								size={21}
							/>
						</Link>

						<Link
							to='/settings'
							className='flex items-center border border-gray-300 p-2 rounded-full max_md:hidden md:hidden sm:hidden'
						>
							<FaCog
								color='grey'
								size={21}
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
