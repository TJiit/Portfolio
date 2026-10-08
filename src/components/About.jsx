import "../styles/about.css";
import { FaUserGraduate, FaLaptopCode, FaBullseye } from "react-icons/fa";
import { HiUser } from "react-icons/hi";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-header">
        <h2>About Me</h2>
        <p>Get to know me a little better.</p>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <HiUser className="about-icon" />
          <h3>Who I Am</h3>
          <p>
            I'm Thakshila Jayasuriya, a passionate software engineering student who enjoys
            building modern web applications and designing intuitive user
            experiences. I enjoy learning new technologies and turning ideas
            into real projects.
          </p>
        </div>

        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>Education</h3>
          <p>
            BSc (Hons) Computer Science
            <br />
            Informatics Institute of Technology
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Interests</h3>

          <ul>
            <li>Web Development</li>
            <li>UI/UX Designing</li>
            <li>Artificial Intelligence</li>
            <li>Frontend Development</li>
          </ul>

        </div>

        <div className="about-card">
          <FaBullseye className="about-icon" />
          <h3>Career Goal</h3>
          <p>
            To become a developer who creates meaningful digital
            products that combine beautiful design with practical solutions.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;