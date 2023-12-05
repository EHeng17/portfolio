import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { projects } from "../constants";

function ProjectCard({cardId, setCard}) {
    const { id, name, image } = projects.find(project => project.id === cardId);

    return (
      <div className="flex justify-center">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="absolute bg-black bg-opacity-80 top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-990"
          onClick={() => setCard(null)}
        />

        {/* Card */}
        <div className="top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-full relative block max-w-[700px] w-[90vw] pb-[35px] px-[35px]" style={{position: "fixed"}}>
          <motion.div className="relative rounded-lg bg-tertiary overflow-hidden h-full mx-auto" layoutId={`project-${id}`}>
            <motion.div
              className="card-image-container"
            >
              <Carousel showArrows={true} showThumbs={false}>
                <div>
                  <img style={{height: "50vh"}} src={image} alt={name}/>
                  <p className="legend">{name}</p>
                </div>
              </Carousel>
            </motion.div>
            {/* <motion.div
              className="title-container"
            >
              <span className="category">Hello Category</span>
              <h2>{name}</h2>
            </motion.div>
            <motion.div className="content-container" animate>
              Hellur Content
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    );
}

export default ProjectCard
