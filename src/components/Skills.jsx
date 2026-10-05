import "../styles/skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaPalette,
  FaLaptopCode,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-header">
        <h2>My Skills</h2>
        <p>Technologies and tools I've worked with.</p>
      </div>

      <div className="skills-grid">

        {/* Frontend */}

        <div className="skill-category">

          <h3>Frontend Development</h3>

          <div className="skill-items">

            <div className="skill-item">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="skill-item">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="skill-item">
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <FaReact />
              <span>React</span>
            </div>

          </div>

        </div>


        {/* Backend */}

        <div className="skill-category">

          <h3>Backend Development</h3>

          <div className="skill-items">

            <div className="skill-item">
              <FaPython />
              <span>Python</span>
            </div>

            <div className="skill-item">
              <FaPhp />
              <span>PHP</span>
            </div>

            <div className="skill-item">
              <FaCode />
              <span>CodeIgniter</span>
            </div>

          </div>

        </div>


        {/* UI / UX */}

        <div className="skill-category">

          <h3>UI / UX Design</h3>

          <div className="skill-items">

            <div className="skill-item">
              <FaFigma />
              <span>Figma</span>
            </div>

            <div className="skill-item">
              <FaPalette />
              <span>UI Design</span>
            </div>

            <div className="skill-item">
              <FaLaptopCode />
              <span>Prototyping</span>
            </div>

            <div className="skill-item">
              <FaCode />
              <span>User Experience</span>
            </div>

          </div>

        </div>


        {/* Tools */}

        <div className="skill-category">

          <h3>Tools</h3>

          <div className="skill-items">

            <div className="skill-item">
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <FaGithub />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <FaCode />
              <span>Postman</span>
            </div>

            <div className="skill-item">
              <FaLaptopCode />
              <span>VS Code</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;