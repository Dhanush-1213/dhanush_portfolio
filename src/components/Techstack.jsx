import "./Techstack.css";
import { motion } from "framer-motion";

export default function TechStack() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.30
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="techstack"
      className="tech-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}   // ✅ animation plays only once
    >

      <motion.h2 className="section-title" variants={fadeUp}>
        Tech Stack
      </motion.h2>

      <motion.div variants={container}>

        {/* Core Languages */}
        <motion.div className="tech-category" variants={fadeUp}>
          <h3>Core Languages</h3>

          <div className="tech-row">
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
          </div>
        </motion.div>

        {/* Machine Learning */}
        <motion.div className="tech-category" variants={fadeUp}>
          <h3>AI/ML</h3>

          <div className="tech-row">
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" alt="Streamlit" />
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div className="tech-category" variants={fadeUp}>
          <h3>Web Development</h3>

          <div className="tech-row">
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div className="tech-category" variants={fadeUp}>
          <h3>Databases</h3>

          <div className="tech-row">
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div className="tech-category" variants={fadeUp}>
          <h3>Tools & Platforms</h3>

          <div className="tech-row">
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" alt="ROS" />
            <motion.img variants={fadeUp} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu" />
          </div>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}