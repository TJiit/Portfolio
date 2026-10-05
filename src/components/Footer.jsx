import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (

    <footer className="footer">

      <div className="footer-container">


        {/* BRAND */}

        <div className="footer-brand">

          <h2>Thakshila<span>.</span></h2>

          <p>
            Potential Software Engineer and UI/UX enthusiast.
          </p>

        </div>


        {/* SOCIAL LINKS */}

        <div className="footer-socials">

          <a
            href="https://github.com/TJiit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/thakshila-jayasuriya-887047332"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>


          <a
            href="mailto:thakshilaj2003@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>


        {/* BACK TO TOP */}

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >

          <FaArrowUp />

        </button>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Thakshila. All rights reserved.
        </p>

        <p>
          Designed & developed with curiosity.
        </p>

      </div>

    </footer>

  );

}

export default Footer;