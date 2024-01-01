import { motion } from 'framer-motion'
import Main from '../components/landingPage/Main'
import About from '../components/landingPage/About'
import Services from '../components/landingPage/Services'
import Contact from '../components/landingPage/Contact'

function Landing() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Main />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<About />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<Services />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<Contact />
			</motion.div>
		</>
	)
}

export default Landing
