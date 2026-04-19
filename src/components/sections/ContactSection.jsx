import { contactContent } from "../../data/siteContent";
import Button from "../ui/Button";

function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">{contactContent.eyebrow}</p>
        <h2>{contactContent.title}</h2>
        <p className="section-text">{contactContent.description}</p>

        <div className="contact-list">
          {contactContent.items.map((item) => (
            <div className="contact-item" key={item.label}>
              <span className="contact-label">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <Button className="contact-button" href={contactContent.cta.href}>
          {contactContent.cta.label}
        </Button>
      </div>
    </section>
  );
}

export default ContactSection;
