"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import styles from "../app/portfolio/Portfolio.module.css";

const filters = [
  {
    label: "All Work",
    value: "all",
  },
  {
    label: "CRM & Automation",
    value: "CRM automation",
  },
  {
    label: "Business Processes",
    value: "Business process automation",
  },
  {
    label: "App Integrations",
    value: "App integrations",
  },
];

export default function PortfolioExplorer({ projects = [] }) {
  const [selected, setSelected] = useState("all");

  const visibleProjects =
    selected === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selected
        );

  return (
    <section
      id="work-library"
      className={styles.library}
      aria-labelledby="library-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2 id="library-title">
            Explore workflows by service.
          </h2>

          <p>
            Find an approach that connects with the challenge
            your team is working through.
          </p>
        </div>

        <fieldset className={styles.filters}>
          <legend className={styles.filterLegend}>
            Filter workflows by service
          </legend>

          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`${styles.filterButton} ${
                selected === filter.value
                  ? styles.filterActive
                  : ""
              }`}
              aria-pressed={selected === filter.value}
              aria-controls="portfolio-results"
              onClick={() => setSelected(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </fieldset>

        <div className={styles.resultsBar}>
          <p role="status" aria-atomic="true">
            Showing {visibleProjects.length} of {projects.length}{" "}
            workflow concepts
          </p>

          {selected !== "all" && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setSelected("all")}
            >
              Clear filter
              <Icon name="x" size={14} />
            </button>
          )}
        </div>

        <div
          id="portfolio-results"
          className={styles.projectGrid}
        >
          {visibleProjects.map((project) => (
            <article
              className={styles.projectCard}
              key={project.slug}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className={styles.projectCardLink}
              >
                <div className={styles.projectImage}>
                  <img
                    src={project.image}
                    alt={`${project.title} concept illustration`}
                    loading="lazy"
                  />

                  <span className={styles.projectBadge}>
                    Concept
                  </span>
                </div>

                <div className={styles.projectBody}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.challenge}</p>

                  <div className={styles.projectFooter}>
                    <span>View workflow</span>
                    <Icon name="arrow" size={19} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p>No workflow concepts match this service yet.</p>
        )}

        <div className={styles.libraryNote}>
          <span
            className={styles.noteMark}
            aria-hidden="true"
          >
            i
          </span>

          <p>
            These examples are illustrative workflow concepts,
            not verified client case studies or measured results.
            Actual implementations are scoped around your
            platforms, requirements and access.
          </p>
        </div>
      </div>
    </section>
  );
}