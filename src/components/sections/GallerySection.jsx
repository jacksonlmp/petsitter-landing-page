import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { galleryContent } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const totalItems = galleryContent.items.length;
  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);

  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalItems - 1 : currentIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === totalItems - 1 ? 0 : currentIndex + 1,
    );
  };

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
    dragOffsetX.current = 0;
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) {
      return;
    }

    dragOffsetX.current = event.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging) {
      return;
    }

    const dragThreshold = 60;

    if (dragOffsetX.current <= -dragThreshold) {
      handleNext();
    } else if (dragOffsetX.current >= dragThreshold) {
      handlePrevious();
    }

    dragOffsetX.current = 0;
    setIsDragging(false);
  };

  return (
    <section className="gallery section" id="gallery">
      <SectionHeading
        centered
        eyebrow={galleryContent.eyebrow}
        title={galleryContent.title}
      />

      <div className="gallery-carousel">
        <button
          aria-label="Imagem anterior"
          className="gallery-nav gallery-nav-prev"
          onClick={handlePrevious}
          type="button"
        >
          <FaArrowLeft />
        </button>

        <div
          className={`gallery-viewport ${isDragging ? "is-dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerLeave={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {galleryContent.items.map((item) => (
              <figure className="gallery-slide" key={item.src}>
                <img alt={item.alt} src={item.src} />
              </figure>
            ))}
          </div>
        </div>

        <button
          aria-label="Proxima imagem"
          className="gallery-nav gallery-nav-next"
          onClick={handleNext}
          type="button"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="gallery-dots">
        {galleryContent.items.map((item, index) => (
          <button
            aria-label={`Ir para imagem ${index + 1}`}
            className={`gallery-dot ${index === activeIndex ? "is-active" : ""}`}
            key={item.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
