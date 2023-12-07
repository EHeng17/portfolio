import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'

import { styles } from "../styles"
import { textVariant, podiumAnimation } from '../utils/motion'

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
          {/* Third Place */}
          <motion.div
            variants={podiumAnimation(0.1, 100)}
            style={{ width: "70px", backgroundColor: "white", marginRight: "10px" }}
          />

          {/* First Place */}
          <motion.div
            variants={podiumAnimation(0.3, 150)}
            style={{ width: "70px", backgroundColor: "gold", marginRight: "10px" }}
          />

          {/* Second Place */}
          <motion.div
            variants={podiumAnimation(0.2, 120)}
            style={{ width: "70px", backgroundColor: "silver"}}
          />
        </div>
    </>
  )
}

export default SectionWrapper(Podium, '')