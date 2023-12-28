import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'

function Navbar() {
	const menuItem = [
		{
			id: 1,
			title: 'home',
		},
		{
			id: 2,
			title: 'about',
		},
		{
			id: 3,
			title: 'services',
		},
		{
			id: 4,
			title: 'contact',
		},
	]

	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	// navbar background on scroll
	const [navbarBg, setNavbarBg] = useState(false)

	useEffect(() => {
		const changeBg = () => {
			if (window.scrollY >= 95) {
				setNavbarBg(true)
			} else {
				setNavbarBg(false)
			}
		}

		window.addEventListener('scroll', changeBg)

		return () => window.removeEventListener('scroll', changeBg)
	}, [])

	return (
		<>
			<div className='fixed top-0 left-0 right-0 z-10'>
				<div
					className={
						navbarBg ? 'bg-white text-grey' : 'bg-transparent text-off-white'
					}
				>
					<div
						className={
							showMenu
								? 'flex justify-between items-center py-4 tracking-wider'
								: `
									${
										navbarBg === true
											? 'bg-inherit'
											: 'bg-off-white text-grey border-b-gray-200 transition-all ease-in-out'
									} flex justify-between items-center py-4 tracking-wider`
						}
					>
						<h1 className='lg:text-3xl md:text-2xl sm:text-2xl font-bold lg:ml-[4rem] md:ml-10 sm:ml-4 cursor-pointer'>
							<a href='#main'>Nanny</a>
						</h1>

						<div className=''>
							<ul className='flex gap-10 text-lg capitalize lg:mr-[4rem] md:hidden sm:hidden'>
								{menuItem.map((menu) => (
									<li
										key={menu.id}
										className='duration-100 delay-75 hover:text-grey hover:font-semibold'
									>
										<a href={`#${menu.title}`}>{menu.title}</a>
									</li>
								))}
								<li className='duration-100 delay-75 hover:text-grey hover:font-semibold'>
									<Link to='/login'>login</Link>
								</li>
								<li className='duration-100 delay-75 hover:text-grey hover:font-semibold'>
									<Link to='/register'>register</Link>
								</li>
							</ul>

							<div
								className='cursor-pointer md:mr-10 sm:mr-4 lg:hidden'
								onClick={menuDisplay}
							>
								{showMenu ? <IoMenu size={30} /> : <IoClose size={30} />}
							</div>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<ul
							onClick={menuDisplay}
							className={
								showMenu
									? 'hidden'
									: `
										${
											navbarBg === true
												? 'bg-inherit'
												: 'bg-off-white text-grey border-b-gray-200'
										} lg:hidden`
							}
						>
							{menuItem.map((menu) => (
								<a
									key={menu.id}
									href={`#${menu.title}`}
								>
									<li className='py-4 capitalize border md:px-10 sm:px-4 border-b-gray-100 border-t-gray-100'>
										{menu.title}
									</li>
								</a>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Navbar
