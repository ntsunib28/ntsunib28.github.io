import Image from '../assets/foto-diri.png'
import { educations, experience } from "../constants"
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
            Computer Science Graduate dedicated to building scalable web applications with a focus on intuitive Front-End experiences and robust Back-End integration.
            Passionate about transforming complex data into high-performance, user-centric digital solutions
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


      <div className='flex flex-col gap-10 mt-20 mb-10'>
        <Headline text={"Work "} coloredText={"Experience"} from={"left"} type={"tween"}/>
        <VerticalTimeline>
          {experience.map((exp) => (
            <VerticalTimelineElement
            key={exp.name}
            contentStyle={{ background: '#0e0016', borderBottom: '8px', borderStyle: 'solid', borderBottomColor: '#b461f3'}}
            contentArrowStyle={{ borderRight: '7px solid #0e0016'}}
            date={exp.date}
            iconStyle={{background: exp.iconBg}}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img className="w-[80%]" src={exp.iconUrl} />
              </div>
            }>
              <div className="">
                <h3 className='text-[18px] lg:text-[28px] font-bold'>{exp.jobTitle}</h3>
                <p className='text-[14px] lg:text-[18px] text-white-100 font-medium'>{exp.name}</p>
                <ul className="mt-5 list-disc ml-5 space-y-4">
                  {exp.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider leading-6">
                      <strong className="text-[16px] block mb-1 text-[#b461f3]">{point.title}</strong>
                      <span dangerouslySetInnerHTML={{ __html: point.desc }} />
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className='flex flex-col gap-10 mb-20'>
        <Headline text={"Education "} coloredText={"Journey"} from={"left"} type={"tween"}/>
        <VerticalTimeline>
          {educations.map((education) => (
            <VerticalTimelineElement
            key={education.name}
            contentStyle={{ background: '#0e0016', borderBottom: '8px', borderStyle: 'solid', borderBottomColor: '#b461f3'}}
            contentArrowStyle={{ borderRight: '7px solid #0e0016'}}
            date={education.date}
            iconStyle={{background: education.iconBg}}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img className="w-[80%]" src={education.iconUrl} />
              </div>
            }>
              <div className="">
                <h3 className='text-[18px] lg:text-[28px] font-bold'>{education.name}</h3>
                <p className='mt-1 text-[14px] lg:text-[18px] text-white-100 font-medium'>{education.date}</p>
                <p className='mt-3 leading-6 tracking-wide text-[14px] lg:text-[16px]'>{education.description}</p>
                <p className='mt-2 text-[#b461f3] font-semibold'>{education.point}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </section>
  )
}

export default About