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

        <motion.div className="about-intro" variants={fadeUp}>
          <p>
            I’m the guy you call when your <span className="accent">model’s loss function</span>
            is flatlining, your <span className="accent">backend</span> is gasping for air,
            and your <span className="accent">frontend</span> looks like it was designed in the dark.
          </p>

          <p>
            I build high-octane stacks that don’t just work—they make the competition
            look like they’re still playing with blocks.
          </p>
        </motion.div>

        {/* Cards / Accordion */}
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

        <motion.div className="offline-section" variants={fadeUp}>
          <h3>Need a miracle?</h3>
          <p>
            I’m your guy. When I’m "offline," I optimize scripts that were already fast enough,
            watch 3-hour tech documentaries as “market research,” and debug problems
            I haven’t realized I created yet.
          </p>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}