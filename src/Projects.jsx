import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn, textVariant } from './utils/motion'

import { styles } from "./styles"
import { projects } from './constants'
import ProjectCard from './components/ProjectCard'
import ProjectCardList from './components/ProjectCardList'

function Projects() {
  
  const [selectedCard, setSelectedCard] = useState(null)

  const setCard = (data) => {
    setSelectedCard(data)
  }

  useEffect(() => {
    // Scroll to the top of the screen when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className='w-full h-full bg-hero-pattern bg-cover bg-no-repeat bg-center relative mx-auto sm:px-16 px-6 py-20'
    >
      {/* Header */}
      <motion.div 
        variants={textVariant(0.1)}
        >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
          >
          These are my personal projects that showcase my skills and experience through real-world examples of my work. Each project will be briefly described with links to the code repositories. It showcases my ability to solve problems and work with different technologies, and manage projects effectively
        </motion.p>
      </div>

      {/* Project Card */}
      <>
        <div
          className='mt-20 flex flex-wrap gap-7 justify-center'
          >
          {projects.map((project) => (
            <ProjectCardList 
              key={project.id}
              index={project.id} {...project}
              setCard={setCard}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedCard !== null && <ProjectCard cardId={selectedCard} setCard={setCard} key={selectedCard}/>}
        </AnimatePresence>
      </>

    </motion.div>
  )
}

export default Projects