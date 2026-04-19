function SectionHeading({ eyebrow, title, centered = false }) {
  const className = centered ? "section-heading centered" : "section-heading";

  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
