import Link from "next/link";
import Icon from "../../components/Icon";
import PortfolioExplorer from "../../components/PortfolioExplorer";
import { portfolioConcepts } from "../../data/content";
import styles from "./Portfolio.module.css";

export const metadata = {
  title: "Our Work",
  description:
    "Explore BAE workflow concepts across CRM automation, business processes and application integrations.",
};

export default function PortfolioPage() {
  return (
    <main id="top" className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>
            Connected systems.
            <br />
            <em>Clearer ways of working.</em>
          </h1>

          <p>
            Explore how we approach CRM automation, business
            processes and application integrations—through
            workflows designed around real operational challenges.
          </p>

          <a href="#work-library" className={styles.heroButton}>
            Explore our work
            <Icon name="down" size={17} />
          </a>
        </div>
      </section>

      <section
        className={styles.featuredSection}
        aria-labelledby="featured-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 id="featured-title">
              A closer look at connected work.
            </h2>

            <p>
              Three illustrative approaches to bringing
              people, processes and software together.
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {portfolioConcepts.map((project) => (
              <Link
                href={`/portfolio/${project.slug}`}
                className={styles.featuredCard}
                key={project.slug}
              >
                <img
                  src={project.image}
                  alt={`${project.title} concept illustration`}
                  loading="lazy"
                />

                <div className={styles.featuredShade} />

                <span className={styles.featuredBadge}>
                  WORKFLOW CONCEPT
                </span>

                <div className={styles.featuredContent}>
                  <span className={styles.featuredCategory}>
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <span className={styles.featuredAction}>
                    Explore workflow
                    <span className={styles.featuredArrow}>
                      <Icon name="diagonal" size={19} />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PortfolioExplorer projects={portfolioConcepts} />

      <section className={styles.closing}>
        <div
          className={`${styles.container} ${styles.closingInner}`}
        >
          <h2>
            What could better-connected
            <br />
            <em>work look like for you?</em>
          </h2>

          <p>
            Share the tools you use and the process you want
            to improve. We’ll help you explore a practical
            starting point.
          </p>

          <Link href="/contact" className={styles.primaryButton}>
            Discuss your project
            <Icon name="diagonal" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}