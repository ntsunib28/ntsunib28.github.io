import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Headline = ({isOnce, text, coloredText, from, type}) => {
  return (
    <motion.h1
    variants={fadeIn(from, type, 0, 1)}
    initial="hidden"
    whileInView="visible"
    viewport={{once: isOnce}}
    className='text-[24px] lg:text-[42px]'>
        {text}<span className='bg-gradient-to-r from-custom-gradient-0% to-custom-gradient-100% bg-clip-text text-transparent'>{coloredText}</span>
    </motion.h1>
  )
}

export default Headline