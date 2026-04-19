import { heroContent } from "../../data/siteContent";
import Button from "../ui/Button";

function HeroSection() {
  const { eyebrow, title, description, image, actions, metrics } = heroContent;

  return (
    <section className="hero section" id="home">
      <div className="hero-media">
        <img alt={image.alt} src={image.src} />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title[0]}
          <br />
          <span>{title[1]}</span>
        </h1>
        <p className="hero-text">{description}</p>

        <div className="hero-actions">
          {actions.map((action) => (
            <Button key={action.href} href={action.href} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </div>

        <div className="hero-metrics">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
