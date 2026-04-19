import { FaDog, FaHouse, FaNotesMedical } from "react-icons/fa6";
import { servicesContent } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ServiceIcon({ type }) {
  const icons = {
    walk: FaDog,
    home: FaHouse,
    medical: FaNotesMedical,
  };
  const Icon = icons[type];

  return (
    <span className="service-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

function ServicesSection() {
  return (
    <section className="services section" id="services">
      <SectionHeading
        centered
        eyebrow={servicesContent.eyebrow}
        title={servicesContent.title}
      />

      <div className="services-grid">
        {servicesContent.items.map((service) => (
          <article
            className={`service-card service-card-${service.accent}`}
            key={service.title}
          >
            <ServiceIcon type={service.icon} />
            <p className="service-eyebrow">{service.eyebrow}</p>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <strong>{service.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
