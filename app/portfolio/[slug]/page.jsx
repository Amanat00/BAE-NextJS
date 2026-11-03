import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import { portfolioConcepts } from "../../../data/content";
import styles from "./Project.module.css";

const workflowSteps = {
  "crm-revenue-workflow": [
    {
      title: "Capture the inquiry",
      text: "Bring incoming lead details into a defined intake process.",
    },
    {
      title: "Define ownership",
      text: "Apply agreed routing rules so the next action has an owner.",
    },
    {
      title: "Coordinate follow-up",
      text: "Queue relevant tasks and messages around the customer journey.",
    },
    {
      title: "Update the pipeline",
      text: "Keep lifecycle and pipeline changes aligned with the process.",
    },
    {
      title: "Review exceptions",
      text: "Make incomplete records and failed handoffs visible for review.",
    },
  ],
  "operations-orchestration": [
    {
      title: "Receive the request",
      text: "Start from a consistent intake point with the required context.",
    },
    {
      title: "Collect the details",
      text: "Identify missing information before the work moves forward.",
    },
    {
      title: "Assign the work",
      text: "Create a clear sequence of tasks and responsibilities.",
    },
    {
      title: "Check approvals",
      text: "Keep the appropriate decisions under human review.",
    },
    {
      title: "Close the loop",
      text: "Record completion and communicate the next relevant update.",
    },
  ],
  "connected-app-ecosystem": [
    {
      title: "Receive an event",
      text: "Define which system change should start the integration.",
    },
    {
      title: "Map the information",
      text: "Match fields and record identifiers across the connected tools.",
    },
    {
      title: "Validate the data",
      text: "Check required values and handle inputs that need attention.",
    },
    {
      title: "Synchronize records",
      text: "Move the agreed information to the appropriate system.",
    },
    {
      title: "Monitor the connection",
      text: "Make errors, retries and conflicts visible to the responsible owner.",
    },
  ],
};

const foundations = [
  {
    icon: "target",
    title: "A defined source of truth",
    text: "Agree which system owns each record and which changes should move between tools.",
  },
  {
    icon: "shield",
    title: "Visible human checkpoints",
    text: "Identify approvals, exceptions and the decisions that need someone’s attention.",
  },
  {
    icon: "chart",
    title: "A measurable starting point",
    text: "Confirm the baseline, business owner and success criteria before implementation.",
  },
];

export function generateStaticParams() {
  return portfolioConcepts.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioConcepts.find(
    (item) => item.slug === slug
  );

  return {
    title: project?.title || "Workflow not found",
    description: project?.challenge,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = portfolioConcepts.find(
    (item) => item.slug === slug
  );

  if (!project) notFound();

  const steps = workflowSteps[slug] || [];
  const related = portfolioConcepts.filter(
    (item) => item.slug !== slug
  );

  return (
    <main id="top" className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/portfolio" className={styles.backLink}>
            <Icon name="arrow" size={16} />
            All workflows
          </Link>

          <div className={styles.heroMeta}>
            <span>{project.category}</span>
            <span className={styles.conceptBadge}>
              Illustrative concept
            </span>
          </div>

          <h1>{project.title}</h1>

          <p className={styles.heroDescription}>
            {project.challenge}
          </p>

          <div className={styles.heroActions}>
            <Link
              href={`/contact?service=${encodeURIComponent(
                project.category
              )}`}
              className={styles.primaryButton}
            >
              Discuss a similar workflow
              <Icon name="diagonal" size={17} />
            </Link>

            <a href="#project-overview" className={styles.textLink}>
              Explore the approach
              <Icon name="down" size={17} />
            </a>
          </div>

          <div className={styles.heroImage}>
            <img
              src={project.image}
              alt={`${project.title} concept illustration`}
            />

            <div className={styles.imageCaption}>
              <span>BAE / WORKFLOW DESIGN</span>
              <span>Illustrative system visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section
        id="project-overview"
        className={styles.overviewSection}
      >
        <div
          className={`${styles.container} ${styles.overviewLayout}`}
        >
          <aside className={styles.sidebar}>
            <h2>Concept overview</h2>

            <dl className={styles.facts}>
              <div>
                <dt>Service area</dt>
                <dd>{project.category}</dd>
              </div>

              <div>
                <dt>Project type</dt>
                <dd>Illustrative workflow design</dd>
              </div>

              <div>
                <dt>Implementation scope</dt>
                <dd>Defined during discovery</dd>
              </div>

              <div>
                <dt>Platforms</dt>
                <dd>Confirmed around your existing tools</dd>
              </div>
            </dl>

            <nav
              className={styles.contents}
              aria-label="Project sections"
            >
              <a href="#challenge">
                The challenge
                <Icon name="arrow" size={15} />
              </a>
              <a href="#approach">
                The approach
                <Icon name="arrow" size={15} />
              </a>
              <a href="#workflow">
                The workflow
                <Icon name="arrow" size={15} />
              </a>
              <a href="#priorities">
                Design priorities
                <Icon name="arrow" size={15} />
              </a>
            </nav>
          </aside>

          <div className={styles.overviewContent}>
            <article id="challenge" className={styles.storySection}>
              <span className={styles.eyebrow}>
                01 / THE CHALLENGE
              </span>

              <h2>
                Bring clarity to the
                <br />
                work between the tools.
              </h2>

              <p>{project.challenge}</p>

              <p>
                A useful solution starts by understanding who
                handles each step, where information comes from
                and what happens when the expected handoff
                does not take place.
              </p>
            </article>

            <article id="approach" className={styles.storySection}>
              <span className={styles.eyebrow}>
                02 / THE APPROACH
              </span>

              <h2>Connect the process around the people.</h2>

              <p>{project.approach}</p>

              <div className={styles.approachNote}>
                <span className={styles.noteIcon}>
                  <Icon name="route" size={24} />
                </span>

                <div>
                  <strong>Start with the workflow.</strong>
                  <p>
                    The final configuration follows the agreed
                    process, platform capabilities and access
                    requirements.
                  </p>
                </div>
              </div>
            </article>

            <article id="workflow" className={styles.storySection}>
              <span className={styles.eyebrow}>
                03 / THE WORKFLOW
              </span>

              <h2>A clear path from trigger to next step.</h2>

              <p>
                These stages illustrate the sequence. The
                production workflow would be refined and tested
                against your actual requirements.
              </p>

              <ol className={styles.steps}>
                {steps.map((step, index) => (
                  <li key={step.title}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      {/* DESIGN PRIORITIES */}

      <section id="priorities" className={styles.priorities}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              04 / DESIGN PRIORITIES
            </span>

            <h2>What this approach aims to improve.</h2>

            <p>
              Potential benefits to validate during discovery
              and measure after implementation.
            </p>
          </div>

          <div className={styles.priorityGrid}>
            {project.outcomes.map((outcome, index) => (
              <article className={styles.priorityCard} key={outcome}>
                <span className={styles.priorityNumber}>
                  0{index + 1}
                </span>

                <h3>{outcome}</h3>

                <span className={styles.priorityFoot}>
                  Design objective
                  <Icon name="check" size={17} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION FOUNDATIONS */}

      <section className={styles.foundations}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              FROM CONCEPT TO IMPLEMENTATION
            </span>

            <h2>Define the details before the build.</h2>

            <p>
              A real system needs agreed rules, accountable
              owners and a clear way to assess progress.
            </p>
          </div>

          <div className={styles.foundationGrid}>
            {foundations.map((item) => (
              <article
                className={styles.foundationCard}
                key={item.title}
              >
                <span className={styles.foundationIcon}>
                  <Icon name={item.icon} size={25} />
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className={styles.disclaimer}>
            {project.note}
          </p>
        </div>
      </section>

      {/* RELATED WORK */}

      <section className={styles.related}>
        <div className={styles.container}>
          <div className={styles.relatedHeading}>
            <div>
              <span className={styles.eyebrow}>
                EXPLORE MORE
              </span>
              <h2>More connected workflow ideas.</h2>
            </div>

            <Link href="/portfolio" className={styles.textLink}>
              View all work
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <article className={styles.relatedCard} key={item.slug}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className={styles.relatedLink}
                >
                  <div className={styles.relatedImage}>
                    <img
                      src={item.image}
                      alt={`${item.title} concept illustration`}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.relatedBody}>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.challenge}</p>

                    <div className={styles.relatedFoot}>
                      Explore workflow
                      <Icon name="arrow" size={18} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.closing}>
        <div className={styles.container}>
          <h2>
            Let’s connect this thinking
            <br />
            <em>to your business.</em>
          </h2>

          <p>
            Tell us about your tools, your team and the
            handoff you want to improve.
          </p>

          <Link href="/contact" className={styles.primaryButton}>
            Discuss your workflow
            <Icon name="diagonal" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}