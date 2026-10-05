import "../styles/project-details.css";
import ProjectGallery from "../components/ProjectGallery";

import beyondRoots1 from "../assets/images/Beyond-Roots1.png";
import beyondRoots2 from "../assets/images/Beyond-Roots2.png";
import beyondRoots3 from "../assets/images/Beyond-Roots3.png";
import beyondRoots4 from "../assets/images/Beyond-Roots4.png";
import beyondRoots5 from "../assets/images/Beyond-Roots5.png";
import beyondRoots6 from "../assets/images/Beyond-Roots6.png";
import beyondRoots7 from "../assets/images/Beyond-Roots7.png";
import beyondRoots8 from "../assets/images/Beyond-Roots8.png";
import beyondRoots9 from "../assets/images/Beyond-Roots9.png";
import beyondRoots10 from "../assets/images/Beyond-Roots10.png";
import beyondRoots11 from "../assets/images/Beyond-Roots11.png";
import beyondRoots12 from "../assets/images/Beyond-Roots12.png";
import beyondRoots13 from "../assets/images/Beyond-Roots13.png";
import beyondRoots14 from "../assets/images/Beyond-Roots14.png";
import beyondRoots15 from "../assets/images/Beyond-Roots15.png";
import beyondRoots16 from "../assets/images/Beyond-Roots16.png";
import beyondRoots17 from "../assets/images/Beyond-Roots17.png";
import beyondRoots18 from "../assets/images/Beyond-Roots18.png";

import {
  FaArrowLeft,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCode
} from "react-icons/fa";

function BeyondRoots() {
  return (
    <div className="project-details">

      {/* Back to Projects */}
      <a href="/#projects" className="back-projects">
        <FaArrowLeft /> Back to Projects
      </a>

      {/* Hero */}
      <section className="project-details-hero">

        <div className="project-details-intro">

          <span className="project-details-label">
            Group Project • Second Semester 2024
          </span>

          <h1>Beyond Roots</h1>

          <p>
            A group-developed responsive personal website created using
            HTML, CSS and JavaScript. The project focused on building
            an engaging web experience while applying fundamental
            front-end development and user experience principles.
          </p>

          <div className="details-technologies">

            <span>
              <FaHtml5 /> HTML
            </span>

            <span>
              <FaCss3Alt /> CSS
            </span>

            <span>
              <FaJs /> JavaScript
            </span>

          </div>

        </div>

        {/* Project Gallery */}
        <ProjectGallery
          images={[
            beyondRoots1,
            beyondRoots2,
            beyondRoots3,
            beyondRoots4,
            beyondRoots5,
            beyondRoots6,
            beyondRoots7,
            beyondRoots8,
            beyondRoots9,
            beyondRoots10,
            beyondRoots11,
            beyondRoots12,
            beyondRoots13,
            beyondRoots14,
            beyondRoots15,
            beyondRoots16,
            beyondRoots17,
            beyondRoots18
          ]}
        />

      </section>

      {/* About */}
      <section className="project-details-section">

        <h2>About the Project</h2>

        <p>
          Beyond Roots was a group project focused on developing a
          responsive personal website using core web technologies.
          The project gave us practical experience in creating
          structured web pages, designing user-friendly interfaces
          and making websites responsive across different screen sizes.
        </p>

      </section>

      {/* Key Features */}
      <section className="project-details-section">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-item">
            <FaCode />
            <h3>Responsive Design</h3>
            <p>
              Designed the website to adapt to different screen sizes
              and devices.
            </p>
          </div>

          <div className="feature-item">
            <FaHtml5 />
            <h3>Structured Layout</h3>
            <p>
              Used HTML to create a clear and organised structure
              for the website.
            </p>
          </div>

          <div className="feature-item">
            <FaCss3Alt />
            <h3>Interface Styling</h3>
            <p>
              Applied CSS to create the visual design, layout and
              responsive behaviour.
            </p>
          </div>

          <div className="feature-item">
            <FaJs />
            <h3>JavaScript Interaction</h3>
            <p>
              Added JavaScript functionality to make the website
              more interactive.
            </p>
          </div>

        </div>

      </section>

      {/* My Contribution */}
      <section className="project-details-section">

        <h2>My Contribution</h2>

        <p>
          As part of the development team, I contributed to the
          front-end development of the website, including page layout,
          responsive design, styling and interactive elements.
          I also worked with the team to maintain consistency across
          the different sections of the website.
        </p>

      </section>

      {/* What I Learned */}
      <section className="project-details-section">

        <h2>What I Learned</h2>

        <p>
          This project strengthened my understanding of HTML, CSS and
          JavaScript and gave me practical experience in responsive
          web development. It also helped me understand how to
          collaborate with others when developing a complete website.
        </p>

      </section>

      {/* Footer */}
      <section className="project-details-footer">

        <a href="/#projects" className="project-github-btn">
          <FaArrowLeft /> Back to Projects
        </a>

      </section>

    </div>
  );
}

export default BeyondRoots;