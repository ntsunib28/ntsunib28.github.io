import Image from '../assets/foto-diri.png'
import { educations } from "../constants"
import { motion } from 'framer-motion'
import { fadeIn, smallToBig } from "../variants";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Skills from '../components/Skills';
import Headline from '../components/Headline';

const About = () => {
  return (
    <section className='min-w-full min-h-screen flex flex-col gap-y-20 p-8 lg:p-32 text-center lg:text-left'>
      <div className='flex flex-col items-center lg:flex-row'>
        <div className='max-w-[70%] flex flex-col gap-3'>
          <Headline text={"Hello, I'm "} coloredText={"NT"} from={"left"} type={"tween"}/>

          <motion.p 
          variants={fadeIn("right", "tween", 0, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false}} 
          className='lg:max-w-[80%] tracking-wide'>
            A 5th semester university student in Indonesia majoring in computer science and studying interactive multimedia as its streaming course.
            Who have a passion in web development especially in the front end side of things. Creating beautiful designs is a must.
          </motion.p>
          <div className='flex flex-col gap-3'>
            <Headline text={"Skills"} from={"top"} type={"tween"}/>
            <Skills />
            
          </div>
        </div>

        <motion.div
        variants={smallToBig}
        initial="small"
        whileInView="big"
        viewport={{once: false}} 
        className='hidden lg:flex flex-1 lg:max-w-[400px] mx-auto'>
            <img className='lg:' src={Image} alt="My Profile Image" />
        </motion.div>
      {/* skills */}
      </div>


      <div className='mb-20'>
        <VerticalTimeline>
          {educations.map((education) => (
            <VerticalTimelineElement
            contentStyle={{ background: '#0e0016'}}
            contentArrowStyle={{ borderRight: '7px solid #0e0016'}}
            date={education.date}
            iconStyle={{background: education.iconBg}}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img className="w-[80%]" src={education.iconUrl} />
              </div>
            }>
              <div className="">
                <h3 className='text-[14px] lg:text-[32px]'>{education.name}</h3>
                <p className='leading-4 tracking-wide'>{education.description}</p>
                <p>{education.point}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </section>
  )
}

export default About