import PageHero from "./PageHero";

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <PageHero eyebrow="Документы" title={title} description={intro} />
      <section className="section fade-section visible">
        <div className="page-container legal-copy">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="legal-heading">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
