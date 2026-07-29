import "./Hero.css";

import banner from "../assets/banner.jpg";
import profile from "../assets/profile.png";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed-header">
      <div className="hero-container">

        <div className="banner-container">
          <img src={banner} alt="Banner" className="banner-image" />


          <div className="profile-image-container">
            <img src={profile} alt="Profile" className="profile-image" />
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("hackathons")}>Hackathons</button>
          <button onClick={() => scrollTo("certificates")}>Certificates</button>
          <button onClick={() => scrollTo("resume")}>Resume</button>
          <button onClick={() => scrollTo("college-events")}>College Events</button>
        </div>

      </div>
    </div>
  );
}

export default Hero;