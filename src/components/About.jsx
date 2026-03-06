import "./About.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cards = [
    {
      title: "AI / ML",
      text: "Not “cat vs. dog.” I build systems that solve real, cold-blooded problems."
    },
    {
      title: "Backend",
      text: "Built like a fortress. Not a single packet gets lost on my watch."
    },
    {
      title: "Frontend",
      text: "So smooth, it’s practically a felony."
    },
    {
      title: "Databases",
      text: "Strict. Disciplined. Everything in its right place."
    }
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >

      <motion.div className="about-wrapper" variants={container}>

        <motion.h2 className="about-title" variants={fadeUp}>
          You Don’t Need a Coder. You Need a Criminal Engineer.
        </motion.h2>

        {/* Intro */}
        <motion.div className="about-intro" variants={fadeUp}>
          <p>
            Model not learning? Backend hanging by a thread?
          </p>

          <p>
            Frontend looking… legally questionable?
          </p>

          <p>Yeah.</p>

          <p>That’s when you call me.</p>

          <p>
            I build stacks that don’t just work —
          </p>

          <p>
            they walk into production
          </p>

          <p className="highlight-line">
            like they own the place.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div className="about-grid" variants={container}>

          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`about-card ${active === index ? "open" : ""}`}
              variants={fadeUp}
              onClick={() => toggle(index)}
            >
              <h3>{card.title}</h3>

              <motion.div
                className="card-content"
                initial={false}
                animate={{
                  height: active === index ? "auto" : 0,
                  opacity: active === index ? 1 : 0
                }}
                transition={{ duration: 0.35 }}
              >
                <p>{card.text}</p>
              </motion.div>

            </motion.div>
          ))}

        </motion.div>

      </motion.div>

    </motion.section>
  );
}