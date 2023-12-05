import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import { styles } from "../styles"
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCardList from './ProjectCardList';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          These are my personal projects that showcase my skills and experience through real-world examples of my work. Each project will be briefly described with links to the code repositories. It showcases my ability to solve problems and work with different technologies, and manage projects effectively
        </motion.p>
      </div>

      <div
        className='mt-20 flex flex-wrap gap-7 justify-center'
      >
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCardList key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
      {/* See more button */}
      {projects.length > 3 ? (
        <Link to='/projects'>
          <div className='w-full flex justify-center mt-8'>
            <div 
              className="text-center p-4 bg-tertiary text-white rounded-2xl cursor-pointer hover:bg-black-200 w-1/4"
            >
              See More
            </div>        
          </div>
        </Link>
      ) : null} 
    </>
  )
}

export default SectionWrapper(Works, "")