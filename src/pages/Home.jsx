import React from 'react'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Headline from '../components/Headline'
import Button from '../components/Button'


const Home = () => {
  return (
    <section className='px-8 lg:px-40 py-4 lg:py-0 flex flex-col items-center gap-y-44 flex-1 text-center lg:text-justify'>
      {/* banner */}
      <Banner />

      {/* skills */}
      <section className='flex flex-col items-center gap-y-4'>
        <Headline text={"My "} coloredText={"Skills"} from={"top"} type={"spring"}/>
        <Skills />
        <Button isOnce={false} text={"More About Me"} link={"/about"} from={"bottom"} type={"spring"}/>
      </section>
      
      {/* project */}
      <section className='flex flex-col items-center gap-y-4 mb-8'>
        <Headline isOnce={true} text={"Recent "} coloredText={"Projects"} from={"right"} type={"spring"}/>
        <motion.p
        variants={fadeIn("left", "spring", 0, 1)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}} 
        className=''>
            Here, are some of my works that I made. For more projects click the button below.
        </motion.p>
        <ProjectCard num={6} />
        <Button isOnce={true} text={"More>>"} link={"/projects"} from={"bottom"} type={"spring"}/>
      </section>

    </section>
  )
}

export default Home