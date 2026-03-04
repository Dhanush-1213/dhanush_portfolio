// About.jsx
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">

        <h2 className="about-title">
          You Don’t Need a Coder. You Need a Criminal Engineer.
        </h2>

        <div className="about-intro">
          <p>
            I’m the guy you call when your <span className="accent">model’s loss function</span> is flatlining, your <span className="accent">backend</span> is gasping for air, and your <span className="accent">frontend</span> looks like it was designed in the dark.
          </p>
          <p>
            I build high-octane stacks that don’t just work—they make the competition look like they’re still playing with blocks.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>AI / ML</h3>
            <p>Not “cat vs. dog.” I build systems that solve real, cold-blooded problems.</p>
          </div>

          <div className="about-card">
            <h3>Backend</h3>
            <p>Built like a fortress. Not a single packet gets lost on my watch.</p>
          </div>

          <div className="about-card">
            <h3>Frontend</h3>
            <p>So smooth, it’s practically a felony.</p>
          </div>

          <div className="about-card">
            <h3>Databases</h3>
            <p>Strict. Disciplined. Everything in its right place.</p>
          </div>
        </div>

        <div className="offline-section">
          <h3>Need a miracle?</h3>
          <p>
            I’m your guy. When I’m "offline," I optimize scripts that were already fast enough,
            watch 3-hour tech documentaries as “market research,” and debug problems
            I haven’t realized I created yet.
          </p>
        </div>

      </div>
    </section>
  );
}