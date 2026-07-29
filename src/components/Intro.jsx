import "./Intro.css";

function Intro() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="intro-container">
      

      <div className="info-section">

        <div className="about-card">
          <h2>Sowndharya V</h2>

          <p>
            Computer Science Engineering Student passionate about web
            development, UI/UX design, and creating innovative digital
            solutions. Continuously learning new technologies and building
            projects that solve real-world problems.
          </p>
        </div>

        <div className="social-card">

          <h3>Social Media</h3>

          <div className="social-icons">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="mailto:you@example.com">Gmail</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Intro;