"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import styles from "../app/process/Process.module.css";

const phases = [
  {
    title: "Discover",
    label: "FIRST / UNDERSTAND",
    description:
      "Understand the people, software and everyday handoffs before deciding what should change.",
    items: [
      "Current tools and workflow review",
      "Business goals and priorities",
      "Data ownership and access requirements",
    ],
    output: "A clear system map and agreed priorities",
  },
  {
    title: "Design",
    label: "SECOND / PLAN",
    description:
      "Turn the discovery into a practical workflow with clear triggers, responsibilities and safeguards.",
    items: [
      "Workflow and field mapping",
      "Approvals and exception handling",
      "Implementation scope and checkpoints",
    ],
    output: "A reviewed workflow and implementation plan",
  },
  {
    title: "Build",
    label: "THIRD / CONNECT",
    description:
      "Configure the CRM, automations and integrations around the agreed process, with visible working checkpoints.",
    items: [
      "CRM configuration and automation",
      "API and application integrations",
      "Notifications, monitoring and recovery",
    ],
    output: "A working solution ready for validation",
  },
  {
    title: "Validate",
    label: "FOURTH / REFINE",
    description:
      "Test realistic scenarios, check the exceptions and prepare your team to use and maintain the workflow.",
    items: [
      "Functional and exception testing",
      "Team guidance and documentation",
      "Handover and improvement priorities",
    ],
    output: "A tested workflow and clear handover",
  },
];

const principles = [
  {
    category: "DISCOVERY",
    title: "Understand the problem.",
    description:
      "Start with the people, processes and outcomes behind the request.",
    reverseTitle: "Clarity before complexity.",
    reverseDescription:
      "Identify what needs to improve before adding another tool or automation.",
    href: "/about",
    link: "Our approach",
    icon: "search",
  },
  {
    category: "IMPLEMENTATION",
    title: "Connect the pieces.",
    description:
      "Bring CRM records, applications and operational handoffs into one flow.",
    reverseTitle: "Every handoff has a purpose.",
    reverseDescription:
      "Define the trigger, source of truth and next owner so information moves with context.",
    href: "/services/workflow-integrations",
    link: "Explore integrations",
    icon: "link",
  },
  {
    category: "ITERATION",
    title: "Refine what matters.",
    description:
      "Test the expected path and the situations that need human attention.",
    reverseTitle: "Build for everyday use.",
    reverseDescription:
      "Keep monitoring, documentation and team feedback connected to the way the system evolves.",
    href: "/services/business-process-automation",
    link: "Explore automation",
    icon: "settings",
  },
];

const curve =
  "M18 0 C34 90 2 130 18 240 S34 380 18 480 S2 650 18 800";

export default function ProcessJourney({ showPrinciples = true }) {  const timeline = useRef(null);
  const [progress, setProgress] = useState(0);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frame = 0;

    function update() {
      frame = 0;

      if (media.matches) {
        setProgress(1);
        return;
      }

      const bounds = timeline.current?.getBoundingClientRect();

      if (!bounds) return;

      const distance =
        window.innerHeight * 0.72 - bounds.top;

      const total = Math.max(
        1,
        bounds.height - window.innerHeight * 0.15
      );

      setProgress(
        Math.max(0, Math.min(1, distance / total))
      );
    }

    function scheduleUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    update();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);
    media.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      media.removeEventListener("change", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function toggleCard(index) {
    setFlipped((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  return (
    <>
      <section
        id="our-approach"
        className={`${styles.container} ${styles.approach}`}
      >
        <aside className={styles.sticky}>
          <span className={styles.eyebrow}>
            A CONNECTED APPROACH
          </span>

          <h2>
            Four phases.
            <br />
            <em>One shared direction.</em>
          </h2>

          <p>
            Every project has different tools, people and
            constraints. Our approach keeps the decisions clear
            and the next step visible.
          </p>

          <Link href="/contact" className={styles.textLink}>
            Start a conversation
            <Icon name="diagonal" size={18} />
          </Link>

          <div className={styles.stickyNote}>
            <Icon name="route" size={21} />
            <span>
              Built around your existing tools and the way
              your team works.
            </span>
          </div>
        </aside>

        <div className={styles.timeline} ref={timeline}>
          <svg
            className={styles.timelineSvg}
            viewBox="0 0 36 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={curve}
              fill="none"
              stroke="#DFE5F1"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            <path
              d={curve}
              pathLength="1"
              fill="none"
              stroke="#FF6E18"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="1"
              strokeDashoffset={1 - progress}
              strokeLinecap="round"
            />
          </svg>

          {phases.map((phase, index) => {
            const active =
              index === 0 ||
              progress >= index / phases.length;

            return (
              <article
                key={phase.title}
                className={`${styles.phase} ${
                  active ? styles.phaseActive : ""
                }`}
              >
                <span className={styles.phaseNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.eyebrow}>
                  {phase.label}
                </span>

                <h3>{phase.title}</h3>

                <p className={styles.phaseDescription}>
                  {phase.description}
                </p>

                <ul className={styles.phaseList}>
                  {phase.items.map((item) => (
                    <li key={item}>
                      <Icon name="diagonal" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.output}>
                  <span>THE OUTPUT</span>
                  <p>{phase.output}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

{showPrinciples && (
  <section className={styles.principles}>
            <div className={styles.container}>
          <div className={styles.principlesHeading}>
            <div>
              <span className={styles.eyebrow}>
                WHAT GUIDES THE WORK
              </span>

              <h2>
                More than a service.
                <br />
                <em>A better way forward.</em>
              </h2>
            </div>

            <p>
              Select a panel to explore the thinking behind
              each part of our approach.
            </p>
          </div>

          <div className={styles.cards}>
            {principles.map((item, index) => {
              const isFlipped = flipped.includes(index);

              return (
                <article
                  className={styles.cardWrap}
                  key={item.category}
                >
                  <button
                    type="button"
                    className={`${styles.card} ${
                      isFlipped ? styles.flipped : ""
                    }`}
                    aria-pressed={isFlipped}
                    aria-label={`${item.title} ${
                      isFlipped
                        ? "Show introduction"
                        : "Show more detail"
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    <span className={styles.cardInner}>
                      <span
                        className={`${styles.cardFace} ${styles.cardFront}`}
                        aria-hidden={isFlipped}
                      >
                        <span className={styles.cardEyebrow}>
                          0{index + 1} / {item.category}
                        </span>

                        <span className={styles.cardIcon}>
                          <Icon name={item.icon} size={28} />
                        </span>

                        <strong>{item.title}</strong>

                        <span className={styles.cardDescription}>
                          {item.description}
                        </span>

                        <span className={styles.cardHint}>
                          EXPLORE THE IDEA
                          <Icon name="plus" size={20} />
                        </span>
                      </span>

                      <span
                        className={`${styles.cardFace} ${styles.cardBack}`}
                        aria-hidden={!isFlipped}
                      >
                        <span className={styles.cardEyebrow}>
                          THE THINKING BEHIND IT
                        </span>

                        <span className={styles.cardIcon}>
                          <Icon name={item.icon} size={28} />
                        </span>

                        <strong>{item.reverseTitle}</strong>

                        <span className={styles.cardDescription}>
                          {item.reverseDescription}
                        </span>

                        <span className={styles.cardHint}>
                          BACK TO THE INTRODUCTION
                          <Icon name="minus" size={20} />
                        </span>
                      </span>
                    </span>
                  </button>

                  <Link
                    href={item.href}
                    className={styles.cardLink}
                  >
                    {item.link}
                    <Icon name="diagonal" size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
)}
    </>
  );
}
