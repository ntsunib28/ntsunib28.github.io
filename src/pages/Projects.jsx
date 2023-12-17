import ProjectCard from '../components/ProjectCard'
import Headline from '../components/Headline'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Projects = () => {
  return (
    <section className='min-w-full min-h-screen flex flex-col lg:flex-wrap gap-y-8 p-8 lg:p-32 text-center lg:text-left'>
      <div className='flex flex-col px-8'>
        <Headline isOnce={true} text={"My "} coloredText={"Projects"} from={"left"} type={"tween"} />
        <motion.p
          variants={fadeIn("right", "tween", 0, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.7}}
          className='tracking-wide'>
            Here, are some of my works that I made. Feel free to explore. You click the card with a github icon it will open a new tab containing my repository for the respective project</motion.p>
      </div>
      <ProjectCard />
    </section>
  )
}

export default Projects