import "./Timeline.css";

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Journey</h2>

      <div className="journey-line">

        <div className="milestone completed">
          <div className="dot"></div>
          <h3>School</h3>
          <p>Jnanavardhaka Vidya Mandira,Chelur</p>
          <span>2018 – 2019</span>
        </div>

        <div className="milestone completed">
          <div className="dot"></div>
          <h3>PU College</h3>
          <p>Mahesh Pre-University College,Tumkur</p>
          <span>2019 – 2021</span>
        </div>

        <div className="milestone completed highlight">
          <div className="dot"></div>
          <h3>B.Tech CSE (AI & ML)</h3>
          <p>PES University</p>
          <span>2022 – 2026</span>
        </div>

        <div className="milestone active">
          <div className="dot hollow"></div>
          <h3>Internship</h3>
          <p>ML Intern | PES University</p>
        </div>

      </div>
    </section>
  );
}