import Image from '../assets/foto-diri.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn, smallToBig } from "../variants";
import Button from './Button';

const Banner = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10'>
                <div className='flex flex-col items-center lg:items-start lg:flex-1 text-center lg:text-justify'>
                    <motion.h1 
                    variants={fadeIn("top", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}} 
                    className='text-[30px] lg:text-[50px]'>NICHOLAS <span className='text-primary-1'>THEODORE</span></motion.h1>
                    <motion.div 
                    variants={fadeIn("left", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}} 
                    className='eth mb-6 text-[15px] lg:text-[25px]'>
                        <span className='mr-2'>I am a</span>
                        <TypeAnimation sequence={[
                            'Developer',
                            2000,
                            'Designer',
                            2000,
                            'Student',
                            2000
                        ]}
                        speed={50}
                        className='text-secondary-1'
                        wrapper='span'
                        repeat={Infinity}/>
                    </motion.div>
                    <motion.p
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}} 
                    className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        Hi, I am Nicholas Theodore, a 5th-semester university student majoring
                        in computer science. I have a passion in web development and
                        I also like to edit photos and videos on my sparetime.
                    </motion.p>
                    <Button isOnce={false} text={"Contact Me"} link={"/contact"} from={"bottom"} type={"tween"}/>
                </div>
                <motion.div
                variants={smallToBig}
                initial="small"
                whileInView="big"
                viewport={{once: false}} 
                className='lg:flex flex-1  max-w-[350px] lg:max-w-[500px] mx-auto'>
                    <img src={Image} alt="My Profile Image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Banner