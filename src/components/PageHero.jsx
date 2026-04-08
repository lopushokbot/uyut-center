export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-content page-container">
        {eyebrow ? <div className="hero-stars page-eyebrow">{eyebrow}</div> : null}
        <h1 className="page-hero-title">{title}</h1>
        {description ? <p className="page-hero-desc">{description}</p> : null}
      </div>
    </section>
  );
}
