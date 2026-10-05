import "../styles/project-details.css";

import {
  FaArrowLeft,
  FaBook,
  FaMobileAlt,
  FaSearch,
  FaCamera,
} from "react-icons/fa";

function BookRacks() {
  return (
    <main className="project-details">

      {/* BACK BUTTON */}

      <a href="/#projects" className="back-projects">
        <FaArrowLeft />
        Back to Projects
      </a>


      {/* HERO */}

      <section className="project-details-hero">

        <span className="project-details-label">
          Future Project • Currently in Development
        </span>

        <h1>BookRacks</h1>

        <p className="project-details-intro">
          A mobile application designed for avid readers to manage,
          organize and quickly search through their personal book
          collection.
        </p>


        {/* TECHNOLOGIES */}

        <div className="details-technologies">

          <span>
            <FaMobileAlt />
            React Native
          </span>

          <span>Expo</span>

          <span>JavaScript</span>

          <span>OCR</span>

        </div>

      </section>


      {/* ABOUT */}

      <section className="project-details-section">

        <h2>About BookRacks</h2>

        <p>
          BookRacks is a mobile application currently in development
          for avid readers who own a large number of books and want an
          easier way to keep track of their personal collection.
        </p>

        <p>
          The idea is to allow users to store information about their
          books and quickly search their collection when shopping for
          new books. Users can check whether they already own a
          particular title, search by author and use book cover images
          to help identify books.
        </p>

      </section>


      {/* THE IDEA */}

      <section className="project-details-section">

        <h2>The Idea</h2>

        <div className="feature-grid">

          <div className="feature-item">

            <FaBook />

            <h3>Personal Library</h3>

            <p>
              Keep information about books in one organized personal
              collection.
            </p>

          </div>


          <div className="feature-item">

            <FaSearch />

            <h3>Quick Search</h3>

            <p>
              Search the collection when checking whether a book has
              already been purchased.
            </p>

          </div>


          <div className="feature-item">

            <FaMobileAlt />

            <h3>Mobile First</h3>

            <p>
              Designed to be used while browsing bookstores or
              shopping for books.
            </p>

          </div>


          <div className="feature-item">

            <FaCamera />

            <h3>Book Scanning</h3>

            <p>
              Exploring camera and OCR functionality to help capture
              information from physical books.
            </p>

          </div>

        </div>

      </section>


      {/* PLANNED FEATURES */}

      <section className="project-details-section">

        <h2>Planned Features</h2>

        <div className="feature-grid">

          <div className="feature-item">

            <h3>Book Collection</h3>

            <p>
              Store information about books owned by the user,
              including title, author and other details.
            </p>

          </div>


          <div className="feature-item">

            <h3>Search & Filtering</h3>

            <p>
              Find books using information such as title, author,
              category or year purchased.
            </p>

          </div>


          <div className="feature-item">

            <h3>Book Covers</h3>

            <p>
              Store front and back cover photographs with each book.
            </p>

          </div>


          <div className="feature-item">

            <h3>OCR Scanning</h3>

            <p>
              Explore OCR technology to automatically extract useful
              information from book covers.
            </p>

          </div>


          <div className="feature-item">

            <h3>Categories & Notes</h3>

            <p>
              Organize books into categories and add personal notes
              or additional information.
            </p>

          </div>

        </div>

      </section>


      {/* CURRENT DEVELOPMENT */}

      <section className="project-details-section">

        <h2>Currently in Development</h2>

        <p>
          BookRacks is an ongoing project. The application is being
          developed incrementally, with the current focus on building
          the mobile interface, book management functionality,
          camera-based interactions and OCR features.
        </p>

        <div className="feature-grid">

          <div className="feature-item">

            <FaMobileAlt />

            <h3>Mobile Interface</h3>

            <p>
              Developing the application interface and navigation
              experience for mobile devices.
            </p>

          </div>


          <div className="feature-item">

            <FaCamera />

            <h3>Camera & OCR</h3>

            <p>
              Exploring camera capture and OCR to make adding book
              information faster.
            </p>

          </div>


          <div className="feature-item">

            <FaBook />

            <h3>Book Management</h3>

            <p>
              Building functionality for adding, viewing and searching
              a personal book collection.
            </p>

          </div>

        </div>

      </section>


      {/* TECHNOLOGIES */}

      <section className="project-details-section">

        <h2>Technologies</h2>

        <div className="details-technologies">

          <span>React Native</span>

          <span>Expo</span>

          <span>JavaScript</span>

          <span>Expo Camera</span>

          <span>OCR</span>

        </div>

      </section>


      {/* WHAT I'M LEARNING */}

      <section className="project-details-section">

        <h2>What I'm Learning</h2>

        <p>
          Through BookRacks, I am exploring mobile application
          development, camera-based interactions, OCR, information
          organization and designing a simple user experience around
          a real-world problem.
        </p>

        <p>
          The project is also giving me practical experience with
          developing and testing features incrementally as the
          application evolves.
        </p>

      </section>


      {/* STATUS */}

      <section className="project-details-section">

        <h2>Project Status</h2>

        <p>
          <strong>Work in Progress</strong>
        </p>

        <p>
          BookRacks is currently under active development. More
          features, improvements and screenshots will be added as
          development continues.
        </p>

      </section>


      {/* BACK */}

      <section className="project-details-footer">

        <a href="/#projects" className="project-github-btn">
          <FaArrowLeft />
          Back to Projects
        </a>

      </section>

    </main>
  );
}

export default BookRacks;