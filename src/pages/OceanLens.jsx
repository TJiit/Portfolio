import "../styles/project-details.css";
import ProjectGallery from "../components/ProjectGallery";

import low1 from "../assets/images/1.PNG";
import low2 from "../assets/images/2.PNG";
import low3 from "../assets/images/3.PNG";
import low4 from "../assets/images/4.PNG";
import low5 from "../assets/images/5.PNG";
import low6 from "../assets/images/6.PNG";
import low7 from "../assets/images/7.PNG";
import low8 from "../assets/images/8.PNG";
import low9 from "../assets/images/9.PNG";
import low10 from "../assets/images/10.PNG";
import low11 from "../assets/images/11.PNG";
import low12 from "../assets/images/12.PNG";
import low13 from "../assets/images/13.PNG";
import low14 from "../assets/images/14.PNG";
import low15 from "../assets/images/15.PNG";
import low16 from "../assets/images/16.PNG";
import low17 from "../assets/images/17.PNG";
import low18 from "../assets/images/18.PNG";

import oceanLens1 from "../assets/images/OceanLens1.PNG";
import oceanLens2 from "../assets/images/OceanLens2.PNG";
import oceanLens3 from "../assets/images/OceanLens3.PNG";
import oceanLens4 from "../assets/images/OceanLens4.PNG";
import oceanLens5 from "../assets/images/OceanLens5.PNG";
import oceanLens6 from "../assets/images/OceanLens6.PNG";

import oceanLensVideo from "../assets/videos/Video Demonstration.mp4";

import {
  FaArrowLeft,
  FaFigma,
  FaCode,
  FaMobileAlt,
  FaUsers,
  FaPalette
} from "react-icons/fa";

function OceanLens() {
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
            UI/UX Prototype Design • Second Semester 2025
          </span>

          <h1>OceanLens</h1>

          <p>
            A UI/UX design project focused on creating a user-centered
            digital experience through research, wireframing and
            high-fidelity prototyping. The project explored how
            thoughtful interface design and clear user flows can
            create a more intuitive experience.
          </p>

          <div className="details-technologies">

            <span>
              <FaFigma /> Figma
            </span>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="project-details-section">

        <h2>About the Project</h2>

        <p>
          OceanLens was developed as a UI/UX prototype design project.
          The design process started with low-fidelity wireframes to
          establish the structure, layout and user flow before
          developing the concepts into detailed high-fidelity
          interfaces.
        </p>

      </section>

      {/* Low Fidelity */}
      <section className="project-details-section">

        <h2>Low-Fidelity Designs</h2>

        <p>
          The low-fidelity designs were used to explore the overall
          structure of the interface, screen layouts and user
          navigation. These early designs helped establish the
          foundation of the user experience before visual details
          were added.
        </p>

        <ProjectGallery
          images={[
            low1,
            low2,
            low3,
            low4,
            low5,
            low6,
            low7,
            low8,
            low9,
            low10,
            low11,
            low12,
            low13,
            low14,
            low15,
            low16,
            low17,
            low18
          ]}
        />

      </section>

      {/* High Fidelity */}
      <section className="project-details-section">

        <h2>High-Fidelity Designs</h2>

        <p>
          The high-fidelity designs developed the initial wireframes
          into detailed interfaces with visual styling, typography,
          colours and interface elements. These screens represent
          the refined version of the OceanLens user experience.
        </p>

        <ProjectGallery
          images={[
            oceanLens1,
            oceanLens2,
            oceanLens3,
            oceanLens4,
            oceanLens5,
            oceanLens6,
          ]}
        />

      </section>

      {/* Video Demonstration */}
      <section className="project-details-section">

        <h2>Prototype Demonstration</h2>

        <p>
          The following video demonstrates the OceanLens prototype
          and shows how the different screens and interactions work
          together as part of the overall user experience.
        </p>

        <div className="project-video">
          <video controls>
            <source src={oceanLensVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </section>

      {/* Key Features */}
      <section className="project-details-section">

        <h2>Key UX Features</h2>

        <div className="feature-grid">

          <div className="feature-item">
            <FaUsers />
            <h3>User-Centered Design</h3>
            <p>
              Focused on creating an interface based on user needs,
              usability and clear interaction.
            </p>
          </div>

          <div className="feature-item">
            <FaCode />
            <h3>User Flow</h3>
            <p>
              Planned the navigation and interaction flow between
              different screens.
            </p>
          </div>

          <div className="feature-item">
            <FaPalette />
            <h3>Visual Consistency</h3>
            <p>
              Applied consistent interface elements, layouts and
              visual styling throughout the prototype.
            </p>
          </div>

          <div className="feature-item">
            <FaMobileAlt />
            <h3>Interactive Prototype</h3>
            <p>
              Created an interactive prototype to demonstrate how
              users would navigate through the interface.
            </p>
          </div>

        </div>

      </section>

      {/* My Contribution */}
      <section className="project-details-section">

        <h2>My Contribution</h2>

        <p>
          I contributed to the design and development of the OceanLens
          prototype, working on the interface structure, user flows,
          wireframes and high-fidelity screens. I also focused on
          maintaining consistency and usability throughout the design.
        </p>

      </section>

      {/* What I Learned */}
      <section className="project-details-section">

        <h2>What I Learned</h2>

        <p>
          This project strengthened my understanding of user-centered
          design, wireframing and prototyping. It also gave me
          practical experience using Figma and helped me understand
          how low-fidelity concepts can be developed into detailed
          and interactive user interfaces.
        </p>

      </section>

      {/* Back */}
      <section className="project-details-footer">

        <a href="/#projects" className="project-github-btn">
          <FaArrowLeft /> Back to Projects
        </a>

      </section>

    </div>
  );
}

export default OceanLens;