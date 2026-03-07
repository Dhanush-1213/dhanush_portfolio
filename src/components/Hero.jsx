import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="hero-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >

      <motion.div
        className="hero-container"
        variants={containerVariants}
      >

        {/* LEFT SIDE */}
        <motion.div className="hero-left" variants={fadeInUp}>

          <motion.p className="code-line" variants={fadeInUp}>
            System.out.println("Hello, World!");
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            Hey there, I'm <span className="accent">Dhanush</span>.
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            <span className="static-text">I build&nbsp;</span>

            <TypeAnimation
              sequence={[
                "moody algorithms",
                1200,
                "thinking machines",
                1200,
                "full-stack magic",
                1200,
                "code that scares",
                1500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={40}
              deletionSpeed={25}
              style={{ display: "inline-block" }}
            />
          </motion.p>

          <motion.div className="hero-energy" variants={fadeInUp}>
            <div>Caffeine → Scalable Architecture</div>
            <div>Data Nightmares → Predictive Gold</div>
            <div>“What if…” → “It’s Live.”</div>
          </motion.div>

          {/* TAGLINE */}
          <motion.p className="hero-tagline" variants={fadeInUp}>
            If it involves logic, neural nets, or a 2:00 AM existential crisis —
            <br className="mobile-break" />
            I'm your guy.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeInUp}>
            <a href="#contact" className="btn-primary">
              Let’s Break Things
            </a>

            <a href="#about" className="btn-outline">
              View Source
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="hero-right" variants={fadeInRight}>

          <motion.img
            src="/hero-laptop.webp"
            alt="Coding setup"
            className="hero-image"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </motion.div>

      </motion.div>

    </motion.section>
  );
}
