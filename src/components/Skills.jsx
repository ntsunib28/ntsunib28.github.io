import { skills } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const Skills = ({ num }) => {
  if (!num) {
    num = skills.length;
  }

  const getVariants = (timer) => {
    if (timer % 2 === 0) {
      return fadeIn("bottom", "tween", 0.1 * timer, 1);
    } else {
      return fadeIn("top", "tween", 0.1 * timer, 1);
    }
  };

  return (
      <div className='flex flex-wrap justify-center gap-4'>
        {skills.slice(0, num).map((skill) => (
            <motion.div
            key={skill.name}
            variants={getVariants(skill.timer)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}} 
            className="w-20 h-20 flex justify-center items-center">
              <img className="max-w-[45px] lg:max-w-[50px] object-contain" src={skill.imageUrl} alt={skill.name} />
            </motion.div>
        ))}
        
      </div>
  );
};

export default Skills;
