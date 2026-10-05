import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/project-gallery.css";

function ProjectGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        return (currentIndex + 1) % images.length;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="project-gallery">

      <button
        className="gallery-arrow gallery-arrow-left"
        onClick={previousImage}
        aria-label="Previous screenshot"
      >
        <FaArrowLeft />
      </button>

      <div className="gallery-image-container">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="gallery-image"
        />
      </div>

      <button
        className="gallery-arrow gallery-arrow-right"
        onClick={nextImage}
        aria-label="Next screenshot"
      >
        <FaArrowRight />
      </button>

      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              index === currentIndex
                ? "gallery-dot active"
                : "gallery-dot"
            }
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectGallery;