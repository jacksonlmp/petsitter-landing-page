import { galleryContent } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function GallerySection() {
  return (
    <section className="gallery section" id="gallery">
      <SectionHeading eyebrow={galleryContent.eyebrow} title={galleryContent.title} />

      <div className="gallery-grid">
        {galleryContent.items.map((item) => (
          <figure className={item.className} key={item.src}>
            <img alt={item.alt} src={item.src} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
