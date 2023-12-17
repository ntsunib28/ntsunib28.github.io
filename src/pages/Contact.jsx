import { socialLinks } from '../constants'
import Headline from '../components/Headline'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='min-w-full min-h-screen text-center lg:text-left p-8 lg:p-32 flex flex-col gap-8'>
      <Headline isOnce={true} text={"Get "} coloredText={"in touch"} from={"top"} type={"tween"}/>
      <div className='flex flex-col items-center lg:items-start'>
        {socialLinks.map((socialLink) => (
          <motion.div
          key={socialLink.name}
          variants={fadeIn("left", "tween", 0.1 * socialLink.timer, 1)}
          initial="hidden"
          animate="visible"
          className='flex flex-col items-center justify-center lg:items-start'
          >
            <a href={socialLink.link} className='h-14 w-14'>
              <img src={socialLink.iconUrl} alt={socialLink.name} className='w-4/5 h-4/5 object-contain'/>
            </a>
            <h5>{socialLink.name}</h5>
            <a href={socialLink.link}>
              <p className='text-[12px] font-semibold underline mb-4 lg:mb-8'>{socialLink.username}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Contact