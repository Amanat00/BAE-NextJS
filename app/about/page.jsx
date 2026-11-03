import Link from "next/link";
import Icon from "../../components/Icon";
import CTA from "../../components/CTA";
import styles from "./About.module.css";

export const metadata = {
  title: "About BAE",
  description:
    "Business Automations Expert connects CRM systems, business processes and applications around the people who use them.",
};

const principles = [
  {
    title: "Understand before building.",
    text:
      "We begin with the current process: the people doing the work, the tools involved and the handoffs that need attention. That understanding shapes the solution.",
  },
  {
    title: "Connect before replacing.",
    text:
      "We assess the software already in place before recommending a migration or another subscription. The right improvement may be a better connection between existing tools.",
  },
  {
    title: "Keep the human in the loop.",
    text:
      "Approvals, exceptions and ownership belong in the design. Automation should support judgment while keeping the important decisions visible.",
  },
  {
    title: "Make the system understandable.",
    text:
      "Clear workflow rules, documentation and monitoring help teams understand what happens, what needs attention and how the system can evolve.",
  },
];

export default function AboutPage() {
  return (
    <main id="top" className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.heroGrid}>
            <div data-reveal>
              <h1>
                We don’t sell software.
                <br />
                <em>We solve software problems.</em>
              </h1>
            </div>

            <div className={styles.heroCopy} data-reveal>
              <p>
                BAE brings CRM systems, everyday applications
                and business processes together—around the
                people who rely on them.
              </p>

              <Link
                href="/contact"
                className={`btn ${styles.primaryButton}`}
              >
                Start a conversation
                <Icon name="diagonal" size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.imageComposition}>
            <div className={styles.mainImage}>
              <img
                data-drift
                src="/images/projects/10-system-integration.webp"
                alt="Illustrative view of connected business software"
              />
            </div>

            <div className={styles.imageNote}>
              <Icon name="route" size={32} />

              <p>
                Your people.
                <br />
                Your processes.
                <br />
                <strong>Better connected.</strong>
              </p>

              <span>BUSINESS AUTOMATIONS EXPERT</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}

      <section className={styles.section}>
        <div className={`wrap ${styles.purposeGrid}`}>
          <div data-reveal>
            <span className="eyebrow">WHY BAE</span>

            <h2>
              Software should make
              <br />
              <em>the working day easier.</em>
            </h2>
          </div>

          <div className={styles.prose} data-reveal>
            <p>
              A CRM holds the customer record. An inbox holds
              the conversation. A spreadsheet tracks the next
              action. When those tools operate separately,
              people spend their time connecting the pieces.
            </p>

            <p>
              BAE focuses on those gaps. We help teams
              coordinate information, simplify repeated tasks
              and give each handoff a clearer next step.
            </p>

            <p className={styles.purposeConclusion}>
              The starting point is your process.
              The technology follows.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className={styles.mission}>
        <div className={`wrap ${styles.missionGrid}`}>
          <span className="eyebrow">OUR MISSION</span>

          <div data-reveal>
            <h2>
              Less time moving information.
              <br />
              <em>More time moving work forward.</em>
            </h2>

            <p>
              Help businesses build connected, understandable
              systems that reduce repetitive work while
              keeping people in control.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}

      <section className={styles.section}>
        <div className={`wrap ${styles.principlesGrid}`}>
          <div className={styles.principlesIntro}>
            <span className="eyebrow">WHAT GUIDES US</span>

            <h2>
              Clear thinking.
              <br />
              <em>Practical decisions.</em>
            </h2>

            <p>
              A useful automation needs more than a trigger.
              It needs context, responsibility and a process
              that makes sense.
            </p>

            <Link href="/process" className="text-link">
              See our process
              <Icon name="diagonal" size={18} />
            </Link>
          </div>

          <div className={styles.accordion}>
            {principles.map((item, index) => (
              <details
                className={styles.principle}
                key={item.title}
                open={index === 0}
              >
                <summary>
                  <span className={styles.index}>
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <span className={styles.toggle} aria-hidden="true">
                    <Icon name="plus" size={20} />
                  </span>
                </summary>

                <div className={styles.answer}>
                  <p>{item.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOCUS */}

      <section className={styles.focus}>
        <div className={`wrap ${styles.focusGrid}`}>
          <div className={styles.focusImage}>
            <img
              data-drift
              src="/images/projects/05-automation-workflow.webp"
              alt="Illustrative business workflow"
              loading="lazy"
            />
          </div>

          <div className={styles.focusCopy} data-reveal>
            <span className="eyebrow">ONE CONNECTED APPROACH</span>

            <h2>
              Different tools.
              <br />
              <em>A shared direction.</em>
            </h2>

            <p>
              Customer journeys, operational tasks and
              application integrations often overlap.
              We look at the full sequence.
            </p>

            <nav
              className={styles.serviceLinks}
              aria-label="Explore BAE services"
            >
              <Link href="/services/crm-automation">
                CRM & Automation
                <Icon name="diagonal" size={18} />
              </Link>

              <Link href="/services/business-process-automation">
                Business Process Automation
                <Icon name="diagonal" size={18} />
              </Link>

              <Link href="/services/workflow-integrations">
                Workflow & App Integrations
                <Icon name="diagonal" size={18} />
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* SHARED SITE CTA */}

      <CTA
        tone="blue"
        title="Let’s make your business systems easier to work with."
        text="Start with one workflow, a disconnected tool or a repeated task. We’ll help you explore the next practical step."
      />
    </main>
  );
}