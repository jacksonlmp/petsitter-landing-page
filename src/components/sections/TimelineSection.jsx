import { timelineContent } from "../../data/siteContent";

function TimelineSection() {
  return (
    <section className="timeline-section section editorial-layout">
      <div className="timeline-copy">
        <p className="eyebrow">{timelineContent.eyebrow}</p>
        <h2>{timelineContent.title}</h2>
        <p className="section-text">{timelineContent.description}</p>
      </div>

      <div className="timeline-list">
        {timelineContent.items.map((item) => (
          <article className="timeline-item" key={item}>
            <span className="timeline-dot" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
