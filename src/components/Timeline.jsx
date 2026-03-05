import "./Timeline.css";
import { motion } from "framer-motion";

export default function Timeline() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="timeline"
      className="timeline-section"
      initial="hidden"
      whileInView="show"

      /* animation plays only once */
      viewport={{ once: true, amount: 0.3 }}
    >

      {/* Title */}
      <motion.h2
        className="section-title"
        variants={item}
      >
        PlotTwist
      </motion.h2>

      {/* Timeline */}
      <motion.div
        className="journey-line"
        variants={container}
      >

        <motion.div className="milestone completed" variants={item}>
          <div className="dot"></div>
          <h3>School</h3>
          <p>Jnanavardhaka Vidya Mandira, Chelur</p>
          <span>2018 – 2019</span>
        </motion.div>

        <motion.div className="milestone completed" variants={item}>
          <div className="dot"></div>
          <h3>PU College</h3>
          <p>Mahesh Pre-University College, Tumkur</p>
          <span>2019 – 2021</span>
        </motion.div>

        <motion.div className="milestone completed highlight" variants={item}>
          <div className="dot"></div>
          <h3>B.Tech CSE (AI & ML)</h3>
          <p>PES University</p>
          <span>2022 – 2026</span>
        </motion.div>

        <motion.div className="milestone active" variants={item}>
          <div className="dot hollow"></div>
          <h3>Internship</h3>
          <p>AI/ML Intern | PES University</p>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}