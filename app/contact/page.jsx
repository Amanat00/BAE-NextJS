import Icon from "../../components/Icon";
import ContactForm from "../../components/ContactForm";
import { brand } from "../../data/content";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact BAE",
  description:
    "Discuss CRM automation, business workflows and app integrations with BAE.",
};

export default async function ContactPage({ searchParams }) {
  const query = await searchParams;
  const context =
    typeof query?.service === "string" ? query.service : "";

  return (
    <main id="top" className={styles.page}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <h1>
              Good conversations.
              <br />
              <em>Better connections.</em>
            </h1>

            <p>
              Bring us the workflow that needs attention.
              We’ll help you find a practical way to
              connect the pieces.
            </p>

            <a href="#inquiry" className={styles.jump}>
              Let’s talk about your project
              <Icon name="down" size={17} />
            </a>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualTop}>
              <Icon name="route" size={21} />
              <span>CONNECTING THE DOTS</span>
            </div>

            <div className={styles.flow}>
              <span>
                <Icon name="mail" size={21} />
                Your challenge
              </span>

              <i />

              <strong>BAE</strong>

              <i />

              <span>
                <Icon name="check" size={21} />
                A clearer next step
              </span>
            </div>

            <small>PEOPLE + PROCESS + TECHNOLOGY</small>
          </div>
        </div>
      </section>

      <section id="inquiry" className={styles.inquiry}>
        <div className={`wrap ${styles.layout}`}>
          <aside className={styles.aside}>
            <span className={styles.kicker}>
              START WITH WHAT YOU KNOW
            </span>

            <h2>You don’t need a technical brief to begin.</h2>

            <p>
              Tell us which tools you use, what feels
              repetitive and what you want to happen instead.
            </p>

            <div className={styles.topics}>
              <span>CRM & Automation</span>
              <span>Business Processes</span>
              <span>App Integrations</span>
            </div>

            <a
              className={styles.email}
              href={`mailto:${brand.email}`}
            >
              <Icon name="mail" size={21} />

              <span>
                <small>Prefer email?</small>
                <strong>{brand.email}</strong>
              </span>

              <Icon name="diagonal" size={17} />
            </a>

            <div className={styles.next}>
              <h3>From your message to a next step.</h3>

              <ol>
                <li>
                  <span>01</span>
                  <div>
                    <strong>Understand the challenge</strong>
                    <p>
                      We review the process and tools you share.
                    </p>
                  </div>
                </li>

                <li>
                  <span>02</span>
                  <div>
                    <strong>Clarify the requirements</strong>
                    <p>
                      We follow up on the details that matter.
                    </p>
                  </div>
                </li>

                <li>
                  <span>03</span>
                  <div>
                    <strong>Explore the right approach</strong>
                    <p>
                      Identify a practical starting point together.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </aside>

          <div className={styles.form}>
            <ContactForm
              key={context}
              context={context}
              compact
            />
          </div>
        </div>
      </section>
    </main>
  );
}