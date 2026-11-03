import Link from "next/link";
import Icon from "../../components/Icon";
import ProcessJourney from "../../components/ProcessJourney";
import styles from "./Process.module.css";

export const metadata = {
  title: "Our Process",
  description:
    "From understanding your current workflow to building connected CRM systems, automations and integrations your team can use.",
};

const before = [
  "Information scattered across tools",
  "Follow-ups that depend on reminders",
  "Unclear ownership between teams",
  "Problems discovered after a missed step",
];

const after = [
  "Defined sources and connected records",
  "Follow-ups triggered by agreed rules",
  "Clear responsibility at each handoff",
  "Visible exceptions and recovery steps",
];

const deliverables = [
  {
    number: "01",
    label: "THE BIG PICTURE",
    title: "Know what connects to what.",
    text:
      "A practical map of your tools, data sources and handoffs, with the first priorities clearly defined.",
    tags: ["System map", "Workflow priorities"],
    icon: "route",
  },
  {
    number: "02",
    label: "THE WORKING FLOW",
    title: "A process with a clear next step.",
    text:
      "CRM configuration, automation and integrations built around the agreed triggers, rules and responsibilities.",
    tags: ["Connected tools", "Defined ownership"],
    icon: "link",
  },
  {
    number: "03",
    label: "THE HANDOVER",
    title: "Clarity that stays with your team.",
    text:
      "Testing notes, workflow documentation and guidance on what to monitor and where human attention is needed.",
    tags: ["Documentation", "Team guidance"],
    icon: "check",
  },
];

const principles = [
  {
    title: "Your tools come first.",
    text:
      "We review the systems you already use before recommending a replacement or introducing another platform.",
  },
  {
    title: "Decisions stay visible.",
    text:
      "Triggers, data ownership, approval steps and exceptions are defined so the workflow is understandable.",
  },
  {
    title: "People stay in control.",
    text:
      "Human checkpoints remain part of the process wherever a decision needs review or approval.",
  },
  {
    title: "Handover is part of the work.",
    text:
      "Documentation and team guidance help make the system useful beyond its first successful run.",
  },
];

export default function ProcessPage() {
  return (
    <main id="top" className={styles.page}>
      {/* 01 — HERO */}

      <section className={styles.editorialHero}>
        <div className={styles.container}>

          <div className={styles.editorialGrid}>
            <div className={styles.editorialCopy}>
              <h1>
                Less friction.
                <br />
                Better flow.
                <br />
                <em>By design.</em>
              </h1>

              <p>
                We turn disconnected tools and repetitive tasks
                into a clearer way of working. It starts with
                your process—and ends with a system your team
                can understand.
              </p>

              <div className={styles.editorialActions}>
                <Link
                  href="/contact"
                  className={styles.blueButton}
                >
                  Discuss your workflow
                  <Icon name="diagonal" size={18} />
                </Link>

                <a
                  href="#our-approach"
                  className={styles.editorialExplore}
                >
                  See how we work
                  <Icon name="down" size={17} />
                </a>
              </div>
            </div>

            <div className={styles.workflowBoard}>
              <div className={styles.boardTop}>
                <span>FROM EVENT TO NEXT STEP</span>

                <span className={styles.boardStatus}>
                  <i aria-hidden="true" />
                  CONNECTED WORKFLOW
                </span>
              </div>

              <div className={styles.boardBody}>
                <div className={styles.boardNode}>
                  <span className={styles.nodeIcon}>
                    <Icon name="mail" size={21} />
                  </span>

                  <div>
                    <small>THE STARTING POINT</small>
                    <strong>A new inquiry arrives.</strong>
                    <p>A clear event starts the process.</p>
                  </div>

                  <span className={styles.nodeIndex}>01</span>
                </div>

                <div className={styles.boardConnector}>
                  <span />
                  <Icon name="down" size={16} />
                </div>

                <div
                  className={`${styles.boardNode} ${styles.boardNodeBlue}`}
                >
                  <span className={styles.nodeIcon}>
                    <Icon name="route" size={22} />
                  </span>

                  <div>
                    <small>THE CONNECTED LOGIC</small>
                    <strong>The right rules take over.</strong>
                    <p>Validate, update and assign ownership.</p>
                  </div>

                  <span className={styles.nodeIndex}>02</span>
                </div>

                <div className={styles.boardConnector}>
                  <span />
                  <Icon name="down" size={16} />
                </div>

                <div className={styles.boardNode}>
                  <span className={styles.nodeIcon}>
                    <Icon name="check" size={22} />
                  </span>

                  <div>
                    <small>THE NEXT ACTION</small>
                    <strong>Everyone knows what follows.</strong>
                    <p>The next task is visible and owned.</p>
                  </div>

                  <span className={styles.nodeIndex}>03</span>
                </div>
              </div>

              <div className={styles.boardFoot}>
                <span>TRIGGER → RULES → ACTION</span>
                <span>Illustrative workflow</span>
              </div>
            </div>
          </div>

          <div className={styles.heroServiceLine}>
            <span>CRM & AUTOMATION</span>
            <span>BUSINESS PROCESSES</span>
            <span>APP INTEGRATIONS</span>
          </div>
        </div>
      </section>

      {/* 02 — EXISTING PROCESS TIMELINE */}

      <ProcessJourney showPrinciples={false} />

      {/* 03 — BEFORE / AFTER */}

      <section className={styles.transformation}>
        <div className={styles.container}>
          <div className={styles.transformationHeading}>
            <span className={styles.sectionLabel}>
              THE CHANGE WE DESIGN FOR
            </span>

            <h2>
              Same business.
              <br />
              <em>A better-connected working day.</em>
            </h2>

            <p>
              The goal is to make each handoff clearer,
              so less work depends on copying, chasing
              and remembering.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.beforePanel}>
              <div className={styles.comparisonTop}>
                <span>01 / DISCONNECTED</span>
                <Icon name="x" size={21} />
              </div>

              <h3>
                Work held together
                <br />
                by reminders.
              </h3>

              <ul className={styles.comparisonList}>
                {before.map((item) => (
                  <li key={item}>
                    <span className={styles.comparisonMarker} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.afterPanel}>
              <div className={styles.comparisonTop}>
                <span>02 / CONNECTED</span>
                <Icon name="check" size={21} />
              </div>

              <h3>
                A clearer process.
                <br />
                A visible next step.
              </h3>

              <ul className={styles.comparisonList}>
                {after.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={styles.comparisonNote}>
            Illustrative comparison. Actual workflow behavior
            depends on your platforms and agreed scope.
          </p>
        </div>
      </section>

      {/* 04 — DELIVERABLES */}

      <section className={styles.deliverables}>
        <div className={styles.container}>
          <div className={styles.deliverablesHeading}>
            <div>
              <span className={styles.sectionLabel}>
                WHAT THE WORK LEAVES YOU WITH
              </span>

              <h2>
                More than
                <br />
                <em>a running automation.</em>
              </h2>
            </div>

            <p>
              A useful system needs context, ownership and
              a clear handover. These are the foundations
              we build around.
            </p>
          </div>

          <div className={styles.deliverableGrid}>
            {deliverables.map((item, index) => (
              <article
                key={item.number}
                className={`${styles.deliverableCard} ${
                  index === 0
                    ? styles.deliverableFeatured
                    : ""
                }`}
              >
                <div className={styles.deliverableTop}>
                  <span>{item.number} / {item.label}</span>
                  <Icon name={item.icon} size={24} />
                </div>

                {index === 0 && (
                  <div
                    className={styles.systemMap}
                    aria-hidden="true"
                  >
                    <span>YOUR CRM</span>
                    <i />
                    <strong>CONNECTED PROCESS</strong>
                    <i />
                    <span>YOUR TEAM</span>
                  </div>
                )}

                <div className={styles.deliverableCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className={styles.deliverableTags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — WORKING PRINCIPLES */}

      <section className={styles.workingPrinciples}>
        <div
          className={`${styles.container} ${styles.principlesLayout}`}
        >
          <div className={styles.principlesIntro}>
            <span className={styles.sectionLabel}>
              HOW WE KEEP IT PRACTICAL
            </span>

            <h2>
              Built around
              <br />
              your business.
              <br />
              <em>And your people.</em>
            </h2>

            <p>
              Technology is only useful when it fits the work
              happening around it.
            </p>

            <Link href="/about" className={styles.textLink}>
              Get to know BAE
              <Icon name="diagonal" size={17} />
            </Link>
          </div>

          <div className={styles.principleRows}>
            {principles.map((item, index) => (
              <article
                className={styles.principleRow}
                key={item.title}
              >
                <span className={styles.principleIndex}>
                  0{index + 1}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <Icon name="diagonal" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — CLOSING CTA */}

      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalPanel}>
            <div className={styles.finalTop}>
              <span>ONE PRACTICAL FIRST STEP</span>
              <Icon name="route" size={30} />
            </div>

            <div className={styles.finalContent}>
              <h2>
                Where does your
                <br />
                workflow <em>get stuck?</em>
              </h2>

              <div>
                <p>
                  Bring us one repetitive task or disconnected
                  process. We’ll help you explore what a
                  better-connected approach could look like.
                </p>

                <Link
                  href="/contact"
                  className={styles.finalButton}
                >
                  Let’s map it together
                  <Icon name="diagonal" size={19} />
                </Link>
              </div>
            </div>

            <div className={styles.finalBottom}>
              <span>UNDERSTAND THE WORK.</span>
              <span>CONNECT THE PIECES.</span>
              <span>MAKE THE NEXT STEP CLEAR.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}