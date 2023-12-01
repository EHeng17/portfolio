import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { contactMethods } from "../constants"

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Contact Us */}
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-5 flex flex-col gap-8">
          {contactMethods.map((contactMethod) => (
            <div key={contactMethod.name} className="flex items-center">
              <FontAwesomeIcon icon={brandIcons[contactMethod.name] ? brandIcons[contactMethod.name] : faEnvelope} className="w-10 h-10"/>
              <a 
                href={contactMethod.type == "link" ? contactMethod.link : `mailto:${contactMethod.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-secondary text-[14px] hover:text-white"
              >
                {contactMethod.link}
              </a>
            </div>
          ))}
        </div>

        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-one border-none font-medium"
              />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-one border-none font-medium"
              />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-one border-none font-medium"
              />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form> */}
      </motion.div>

      {/* Spinning 3D Earth Model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")