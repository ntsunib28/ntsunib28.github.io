import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { projects } from "../constants"
import { fadeIn } from "../variants";

const ProjectCard = ({num}) => {
    if (!num) {
        num = projects.length;
      }
    const getVariants = (timer) => {
        if (timer === 1) {
          return fadeIn("left", "tween", 0, 1);
        } else if (timer === 2) {
          return fadeIn("top", "tween", 0.3, 1);
        } else {
          return fadeIn("right", "tween", 0, 1);
        }
      };
    return (
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 mb-12 lg:my-10">
            {projects.slice(0,num).map((project) => (
            <motion.div
            key={project.name}
            variants={getVariants(project.timer)}
            initial= "hidden"
            whileInView="visible"
            viewport={{once: true}} 
            onClick={() => window.open
            (project.link, "_blank")}
            whileHover={{ cursor: 'pointer' }}
            className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Tilt
                    options={{
                    max: 20,
                    scale: 1,
                    speed: 450
                }}
                className="glassmorphism p-4 rounded-[20px] w-full h-full"
                >
                    <div className="relative items-center">
                        <img className="w-full h-full object-cover rounded-xl" src={project.imageUrl} alt="" />
                        <div className="absolute inset-0 flex justify-end m-3 ">
                            <div className="gradient-cyan-to-purple-r-light w-7 h-7 rounded-full flex justify-center items-center">
                                <img src={project.icon} className="w-3/5 h-3/5 object-contain"/>
                            </div>
                        </div>
                        <div className='mt-5 text-left'>
                          <p className='eth tracking-wider text-[20px]'>{project.name}</p>
                          <p className='eth text-secondary text-[12px]'>{project.type}</p>
                          <p className='mt-1 eth italic tracking-widest text-secondary text-[8px]'><span className="tracking-normal">Tools: </span>{project.tools}</p>
                          <p className='mt-2 text-secondary text-[12px] font-semibold'>{project.description}</p>
                          <p className='mt-4 eth italic text-secondary text-[10px]'>{project.contribution}</p>
                        </div>
                    </div>
            </Tilt>
            </motion.div>
          ))}
        </div>
      )
}

export default ProjectCard