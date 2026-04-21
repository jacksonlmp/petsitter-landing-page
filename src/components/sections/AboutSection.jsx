import { FaCat, FaDog, FaDove } from "react-icons/fa6";
import { GiChicken } from "react-icons/gi";
import { PiMouseFill, PiRabbitFill } from "react-icons/pi";
import { RiHeartPulseFill, RiShieldCheckFill } from "react-icons/ri";
import { aboutContent } from "../../data/siteContent";

function TagIcon({ type }) {
  const icons = {
    dog: FaDog,
    cat: FaCat,
    hamster: PiMouseFill,
    rabbit: PiRabbitFill,
    bird: FaDove,
    chicken: GiChicken,
  };
  const Icon = icons[type];

  return <Icon aria-hidden="true" className="chip-icon" />;
}

function PillarIcon({ type }) {
  const icons = {
    security: RiShieldCheckFill,
    care: RiHeartPulseFill,
  };
  const Icon = icons[type];

  return (
    <div className="pillar-icon" aria-hidden="true">
      <Icon />
    </div>
  );
}

function AboutSection() {
  const {
    eyebrow,
    title,
    description,
    bulletPoints,
    image,
    tags,
    pillars,
  } = aboutContent;

  return (
    <section className="about section editorial-layout" id="about">
      <div className="about-visual">
        <div className="sun-orb" />
        <figure className="portrait-frame">
          <img alt={image.alt} src={image.src} />
        </figure>
      </div>

      <div className="about-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="section-text">
          {description.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>

        <ul className="about-bullets">
          {bulletPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="pill-row">
          {tags.map((tag) => (
            <span className="chip" key={tag.label}>
              <TagIcon type={tag.icon} />
              {tag.label}
            </span>
          ))}
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <PillarIcon type={pillar.icon} />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
