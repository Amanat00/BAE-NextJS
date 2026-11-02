
"use client";

import Link from "next/link";
import { useRef } from "react";
import Icon from "../components/Icon";
import { services, portfolioConcepts } from "../data/content";
import styles from "./Home.module.css";

/* SOFTWARE LOGOS */

const logos = [
  { name: "HubSpot", icon: "hubspot", color: "#FF6E18" },
  { name: "Salesforce", icon: "salesforce", color: "#1297D5" },
  { name: "Pipedrive", icon: "pipedrive", color: "#182238" },
  { name: "Zapier", icon: "zapier", color: "#FF4F00" },
  { name: "Make", icon: "make", color: "#6246EA" },
  { name: "n8n", icon: "n8n", color: "#E94E80" },
  { name: "Airtable", icon: "airtable", color: "#1769B9" },
  { name: "Shopify", icon: "shopify", color: "#7AB55C" },
  { name: "Slack", icon: "slack", color: "#4A154B" },
  { name: "Notion", icon: "notion", color: "#191919" },
  { name: "Stripe", icon: "stripe", color: "#635BFF" },
  { name: "Google Sheets", icon: "googlesheets", color: "#188038" },
  { name: "Google Calendar", icon: "googlecalendar", color: "#2563EB" },
  { name: "Gmail", icon: "gmail", color: "#DB4437" },
  { name: "WooCommerce", icon: "woocommerce", color: "#96588A" },
  { name: "WordPress", icon: "wordpress", color: "#21759B" },
  { name: "Asana", icon: "asana", color: "#E8676B" },
  { name: "ClickUp", icon: "clickup", color: "#7B46FF" },
  { name: "Trello", icon: "trello", color: "#0079BF" },
  { name: "Jira", icon: "jira", color: "#0052CC" },
  { name: "GitHub", icon: "github", color: "#24292F" },
  { name: "Dropbox", icon: "dropbox", color: "#0061FF" },
  { name: "Intercom", icon: "intercom", color: "#286EFA" },
  { name: "Zendesk", icon: "zendesk", color: "#17494D" },
  { name: "Mailchimp", icon: "mailchimp", color: "#161616" },
  { name: "Twilio", icon: "twilio", color: "#F22F46" },
  { name: "Calendly", icon: "calendly", color: "#006BFF" },
  { name: "Typeform", icon: "typeform", color: "#202020" },
  { name: "Microsoft Teams", icon: "microsoftteams", color: "#5558AF" },
  { name: "Webflow", icon: "webflow", color: "#146EF5" },
];

const featuredTools = [
  { name: "Slack", icon: "slack", color: "4A154B" },
  { name: "Notion", icon: "notion", color: "111111" },
  { name: "Airtable", icon: "airtable", color: "1769B9" },
  { name: "Power Automate", icon: "microsoftpowerautomate", color: "737373" },
  { name: "Salesforce", icon: "salesforce", color: "00A1E0" },
  { name: "Google", icon: "google", color: "4285F4" },
  { name: "Make", icon: "make", color: "6246EA" },
  { name: "n8n", icon: "n8n", color: "1F2937" },
  { name: "Zapier", icon: "zapier", color: "FF4F00" },
  { name: "HubSpot", icon: "hubspot", color: "FF6E18" },
];

/* STATIC DEMO DATA — NO SLIDERS */

const workflowExample = {
  category: "CRM & AUTOMATION",
  heading: "From first inquiry to a connected customer journey.",
  description:
    "When a lead enters your business, the information should reach the right people and systems without getting stuck in manual handoffs.",
  goal:
    "Capture the inquiry, update your CRM, notify the right owner and prepare the next action.",
  steps: [
    "Capture the lead from your website or campaign",
    "Create or update the CRM record",
    "Assign ownership using your business rules",
    "Trigger timely follow-ups and notifications",
  ],
  image: "/images/projects/02-crm-automation.webp",
};

const capabilityPanels = [
  {
    number: "01",
    title: "Connected CRM",
    description:
      "A cleaner customer journey from first inquiry to handoff.",
    image: "/images/projects/08-crm-dashboard.webp",
    href: "/services/crm-automation",
  },
  {
    number: "02",
    title: "Process orchestration",
    description:
      "Repeatable operations with approvals where they matter.",
    image: "/images/projects/05-automation-workflow.webp",
    href: "/services/business-process-automation",
  },
  {
    number: "03",
    title: "Native & custom integrations",
    description:
      "Bring disconnected applications into one reliable flow.",
    image: "/images/projects/10-system-integration.webp",
    href: "/services/workflow-integrations",
  },
  {
    number: "04",
    title: "Operational visibility",
    description:
      "See progress, bottlenecks and exceptions in context.",
    image: "/images/projects/09-business-analytics.webp",
    href: "/solutions",
  },
];

const topics = [
  "CRM architecture",
  "Lead capture & routing",
  "Sales pipelines",
  "Customer journeys",
  "HubSpot workflows",
  "Salesforce integrations",
  "Pipedrive automation",
  "Zapier",
  "Make",
  "n8n",
  "Custom APIs",
  "Webhooks",
  "Data mapping",
  "Two-way synchronization",
  "Approval workflows",
  "Client onboarding",
  "Invoice workflows",
  "Email follow-ups",
  "SMS automation",
  "Support ticketing",
  "eCommerce operations",
  "Reporting dashboards",
  "Error monitoring",
  "Software consolidation",
  "Workflow documentation",
  "Human handoffs",
];

function BrandIcon({ name, icon }) {
  return (
    <span className={styles.brandItem}>
      <img
        src={`https://cdn.simpleicons.org/${icon}/404654`}
        alt=""
        loading="lazy"
      />
      <span>{name}</span>
    </span>
  );
}

/* =========================================
   SECTION 01 — COMPLETELY NEW EDITORIAL HERO
========================================= */

function HomeHero() {
  return (
    <section className={styles.newHero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.heroTopline}>
            <span className={styles.heroLine} />
            <span>BUSINESS AUTOMATIONS EXPERT</span>
          </div>

          <h1>
            Work smarter.
            <br />
            Connect everything.
            <br />
            <em>Grow without the chaos.</em>
          </h1>

          <p>
            Your business shouldn't depend on constant
            copying, chasing and switching between apps.
            We build connected CRM systems, operational
            workflows and software integrations that
            help your team work with clarity.
          </p>

          <div className={styles.heroActions}>
            <Link
              href="/contact"
              className={styles.heroPrimary}
            >
              Let's improve your workflow
              <Icon name="diagonal" size={18} />
            </Link>

            <Link
              href="/services"
              className={styles.heroSecondary}
            >
              Explore what we do
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div className={styles.heroExpertise}>
            <span>CRM & Automation</span>
            <span>Business Processes</span>
            <span>App Integrations</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroVisualFrame}>
            <img
              src="/images/projects/10-system-integration.webp"
              alt="Illustration of connected business software systems"
            />
          </div>

          <div className={styles.heroVisualCaption}>
            <span>01 / CONNECTED SYSTEMS</span>
            <span>
              One connected approach to your
              everyday operations.
            </span>
          </div>

          <div
            className={styles.heroVisualAccent}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className={styles.heroBottomLine}>
        <span>BUILT AROUND YOUR EXISTING BUSINESS TOOLS</span>
        <a href="#services">
          DISCOVER OUR APPROACH
          <Icon name="arrow" size={17} />
        </a>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 02 — CLEAN SLIDING TRUST BAR
========================================= */

function TrustMarquee() {
  const trustLogos = logos.slice(0, 13);

  return (
    <section
      className={styles.trustSection}
      aria-label="Business software platforms"
    >
      <div className={styles.marqueeWindow}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div
              className={styles.marqueeSet}
              key={copy}
              aria-hidden={copy === 1}
            >
              {trustLogos.map((logo) => (
                <BrandIcon
                  key={logo.name}
                  {...logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 03 — YOUR APPROVED SERVICE LAYOUT
========================================= */

function ApprovedServices() {
  return (
    <section
      className="section services-editorial"
      id="services"
    >
      <div className="wrap">
        <div
          className="section-intro"
          data-reveal
        >
          <span className="eyebrow">
            03 / WHAT WE DO
          </span>

          <h2>
            Three disciplines.
            <br />
            One connected business.
          </h2>
        </div>

        <div className="service-rows">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="service-row"
              data-reveal
            >
              <span className="service-index">
                {service.number} / SERVICE
              </span>

              <div className="service-row-main">
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
              </div>

              <div className="service-row-side">
                <span>{service.areas[0]}</span>
                <span>{service.areas[1]}</span>
              </div>

              <span className="round-arrow">
                <Icon name="diagonal" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 04 — CAPABILITY SHOWCASE
========================================= */

function CapabilityShowcase() {
  return (
    <section className={styles.capabilities}>
      <div className={styles.container}>
        <div
          className={styles.centerIntro}
          data-reveal
        >
          <span className={styles.kicker}>
            01 / BUILT AROUND THE WAY YOU WORK
          </span>

          <h2>
            A better connected business starts
            with the right building blocks.
          </h2>

          <p>
            Four connected capabilities, one practical
            objective: make everyday work easier to manage.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilityPanels.map((item) => (
            <Link
              href={item.href}
              className={styles.capability}
              key={item.number}
              data-reveal
            >
              <div className={styles.capabilityCopy}>
                <div className={styles.capabilityTop}>
                  <span>
                    {item.number} / CAPABILITY
                  </span>

                  <Icon name="diagonal" size={18} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <img
                src={item.image}
                alt={`${item.title} illustrative interface`}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 05 — TOPICS + SLIDING TOOLS
========================================= */

function TopicsSection() {
  return (
    <section className={styles.topics}>
      <div className={styles.container}>
        <div data-reveal>
          <span className={styles.kicker}>
            02 / SOLUTIONS AT A GLANCE
          </span>

          <h2>
            What can we automate for you?
          </h2>

          <p>
            From your CRM and sales processes to onboarding,
            billing, reporting and everyday collaboration,
            we help connect the moving parts of your business.
          </p>

          <div
            className={styles.topicCloud}
            aria-label="Automation capabilities"
          >
            {topics.map((topic) => (
              <span key={topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.toolsShowcase}>
          <span className={styles.toolsHeading}>
            THE TOOLS YOU WILL WORK WITH
          </span>

          <div className={styles.toolsMarqueeWindow}>
            <div className={styles.toolsMarqueeTrack}>
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className={styles.toolsMarqueeSet}
                  aria-hidden={copy === 1}
                >
                  {featuredTools.map((tool) => (
                    <div
                      className={styles.toolLogo}
                      key={tool.name}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
                        alt=""
                        loading="lazy"
                      />

                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 06 — STATIC SPLIT SCREEN
   NO CAROUSEL / NO SLIDES
========================================= */


/* =========================================
   SECTION 07 — DARK PORTFOLIO CAROUSEL
========================================= */

function PortfolioCarousel() {
  const track = useRef(null);

  function scroll(direction) {
    if (!track.current) return;

    track.current.scrollBy({
      left:
        direction *
        Math.min(track.current.clientWidth * 0.75, 560),
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.portfolioHeader}>
          <div>
            <span className={styles.lightKicker}>
              04 / WORKFLOW CONCEPTS
            </span>

            <h2>
              See what better-connected operations
              can look like.
            </h2>
          </div>

          <div className={styles.carouselButtons}>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous concept"
            >
              <Icon name="arrow" size={22} />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next concept"
            >
              <Icon name="arrow" size={22} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={styles.portfolioTrack}
        ref={track}
        tabIndex={0}
        aria-label="Scrollable workflow concepts"
      >
        {portfolioConcepts.map((project, index) => (
          <Link
            href={`/portfolio/${project.slug}`}
            key={project.slug}
            className={styles.portfolioSlide}
          >
            <img
              src={project.image}
              alt={`${project.title} concept`}
              loading="lazy"
            />

            <div className={styles.slideShade} />

            <div className={styles.slideText}>
              <span>
                0{index + 1} / {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.challenge}</p>

              <strong>
                Explore workflow
                <Icon name="diagonal" size={16} />
              </strong>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.container}>
        <p className={styles.portfolioDisclaimer}>
          Illustrative workflow concepts, not verified
          client projects or measured results.
        </p>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 08 — INTEGRATION ECOSYSTEM
========================================= */

function IntegrationGrid() {
  return (
    <section className={styles.integrations}>
      <div className={styles.container}>
        <div
          className={styles.integrationIntro}
          data-reveal
        >
          <span className={styles.integrationEyebrow}>
            05 / THE INTEGRATION ECOSYSTEM
          </span>

          <h2>
            Bring your existing technology
            stack together.
          </h2>

          <p>
            Your CRM, operational apps and automation tools
            can share the right data — without endless
            copy-and-paste.
          </p>
        </div>

        <div className={styles.integrationLogos}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={styles.integrationTile}
              style={{
                "--tile-bg": logo.color,
              }}
              title={logo.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${logo.icon}/FFFFFF`}
                alt=""
                loading="lazy"
              />

              <span className={styles.logoFallback}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.integrationFoot}>
          <span>Not seeing the tool you use?</span>

          <Link href="/services/workflow-integrations">
            View integration services
            <Icon name="arrow" size={17} />
          </Link>
        </div>

        <p className={styles.integrationNote}>
          Tools shown are integration examples, not
          official partnership or certification claims.
        </p>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 09 — CONNECTED ECOSYSTEM
========================================= */

function EcosystemFeature() {
  return (
    <section className={styles.ecosystemFeature}>
      <div className={styles.container}>
        <div className={styles.ecosystemLayout}>
          <div
            className={styles.ecosystemCopy}
            data-reveal
          >
            <span className={styles.lightKicker}>
              06 / CONNECTED BUSINESS SYSTEMS
            </span>

            <h2>
              Make the tools you already use
              work better together.
            </h2>

            <p>
              From CRM records and customer messages
              to internal operations and reporting,
              BAE helps turn separate applications
              into connected, maintainable processes.
            </p>

            <div className={styles.ecosystemTextGrid}>
              {[
                "Customer lifecycle",
                "Operational workflows",
                "App integrations",
                "Reporting visibility",
              ].map((label, index) => (
                <div key={label}>
                  <span>0{index + 1}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className={styles.whiteOutlineButton}
            >
              See our services
              <Icon name="diagonal" size={17} />
            </Link>
          </div>

          <div
            className={styles.ecosystemMosaic}
            data-reveal
          >
            {logos.slice(0, 4).map((logo) => (
              <div key={logo.name}>
                <BrandIcon {...logo} />
              </div>
            ))}

            <small>
              Illustrative technology ecosystem.
              Partnership status is not implied.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 10 — CLOSING CTA
========================================= */

function ClosingOffer() {
  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.offerShell}>
          <div>
            <span className={styles.offerKicker}>
              YOUR NEXT STEP
            </span>

            <div className={styles.offerNumber}>
              01
              <span>Start with a workflow</span>
            </div>

            <p>
              Bring us one repetitive task or disconnected
              process. We'll help you explore the next
              practical step.
            </p>
          </div>

          <div>
            <p>
              You don't need to replace your entire software
              stack. Start with the tools and the challenge
              you already have.
            </p>

            <div className={styles.offerActions}>
              <Link
                href="/contact"
                className={styles.offerPrimary}
              >
                Let's talk
                <Icon name="diagonal" size={17} />
              </Link>

              <Link
                href="/process"
                className={styles.offerSecondary}
              >
                Our process
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   COMPLETE HOMEPAGE
========================================= */

export default function Home() {
  return (
    <main id="top" className={styles.home}>
      <HomeHero />
      <TrustMarquee />
      <ApprovedServices />
      <CapabilityShowcase />
      <TopicsSection />
      <PortfolioCarousel />
      <IntegrationGrid />
      <EcosystemFeature />
      <ClosingOffer />
    </main>
  );
}
