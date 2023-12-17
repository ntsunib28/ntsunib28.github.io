import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn, hover } from '../variants'

const Button = ({isOnce, text, link, from, type}) => {
  return (
    <motion.div
    variants={fadeIn(from, type, 0, 1)}
    initial="hidden"
    whileInView="visible"
    viewport={{once: isOnce}} 
    className='max-w-max flex font-semibold'>
        <Link to={link}>
            <motion.button 
            variants={hover(1.1, 0.5)}
            initial="normal"
            animate="normal"
            whileHover="hover"
            className='font-bold py-2 px-4 rounded-[50px]
            gradient-cyan-to-purple-r text-slate-100'>{text}</motion.button>
        </Link>
    </motion.div>
  )
}

export default Button