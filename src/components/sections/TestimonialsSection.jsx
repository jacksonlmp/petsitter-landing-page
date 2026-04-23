import { testimonialsContent } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function TestimonialsSection() {
  return (
    <section className="testimonials section" id="testimonials">
      <SectionHeading
        centered
        eyebrow={testimonialsContent.eyebrow}
        title={testimonialsContent.title}
      />

      <div className="testimonials-gallery">
        {testimonialsContent.items.map((item, index) => (
          <article
            className={`testimonial-card testimonial-card-${item.layout ?? "default"}`}
            key={item.src}
            style={{ animationDelay: `${index * 180}ms` }}
          >
            <img alt={item.alt} className="testimonial-image" src={item.src} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
