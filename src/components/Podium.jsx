import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'

import { styles } from "../styles"
import { textVariant, podiumAnimation } from '../utils/motion'
import { achievements } from "../constants"

function Podium() {
  return (
    <>
        {/* Header */}
        <motion.div variants={textVariant(0.1)}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Awards.</h2>
        </motion.div>

        {/* Content (Podium) */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "300px" }}>
          
          {/* Fifth and Above Place */}
          <div>
            {achievements.map((achievement, index) => (
              achievement.placement > 4 ? 
                <img key={index} src={achievement.image} className='object-cover my-5 rounded-full w-[70px] h-[70px]'/> 
              : null
            ))}

            <motion.div
              variants={podiumAnimation(0.2, 60)}
              style={{backgroundColor: "green"}}
              className='w-[70px] mr-[10px] rounded-tl-lg rounded-tr-lg flex items-end justify-center py-1'
              >
              <p className='font-bold'>5th</p>
            </motion.div>
          </div>

          {/* Third Place */}
          <div>
            {achievements.map((achievement, index) => (
              achievement.placement == 3 ? 
                <img key={index} src={achievement.image} className='object-cover my-5 rounded-full w-[70px] h-[70px]'/> 
              : null
            ))}
            <motion.div
              variants={podiumAnimation(0.1, 100)}
              style={{ backgroundColor: "brown"}}
              className='w-[70px] mr-[10px] rounded-tl-lg rounded-tr-lg flex items-end justify-center py-1'
              >
              <p className='font-bold'>3rd</p>
            </motion.div>
          </div>

          {/* First Place */}
          <div>
            {achievements.map((achievement, index) => (
              achievement.placement == 1 ? 
                <img key={index} src={achievement.image} className='object-cover my-5 rounded-full w-[70px] h-[70px]'/> 
              : null
            ))}
            <motion.div
              variants={podiumAnimation(0.3, 150)}
              style={{backgroundColor: "gold"}}
              className='w-[70px] mr-[10px] rounded-tl-lg rounded-tr-lg flex items-end justify-center py-1'
            >
              <p className='font-bold'>1st</p>
            </motion.div>
          </div>

          {/* Second Place */}
          <div>
            {achievements.map((achievement, index) => (
              achievement.placement == 2 ? 
                <img key={index} src={achievement.image} className='object-cover my-5 rounded-full w-[70px] h-[70px]'/> 
              : null
            ))}

            <motion.div
              variants={podiumAnimation(0.2, 120)}
              style={{backgroundColor: "silver"}}
              className='w-[70px] mr-[10px] rounded-tl-lg rounded-tr-lg flex items-end justify-center py-1'
              >
              <p className='font-bold'>2nd</p>
            </motion.div>
          </div>

          {/* Fourth Place */}
          <div>
            {achievements.map((achievement, index) => (
              achievement.placement == 4 ? 
                <img key={index} src={achievement.image} className='object-cover my-5 rounded-full w-[70px] h-[70px]'/> 
              : null
            ))}

            <motion.div
              variants={podiumAnimation(0.2, 80)}
              style={{backgroundColor: "blue"}}
              className='w-[70px] rounded-tl-lg rounded-tr-lg flex items-end justify-center py-1'
              >
              <p className='font-bold'>4th</p>
            </motion.div>
          </div>
        </div>
    </>
  )
}

export default SectionWrapper(Podium, '')