import Link from "next/link";
import Icon from "./Icon";
import {
  brand,
  services,
  solutionThemes,
  portfolioConcepts,
} from "../data/content";
import styles from "./Footer.module.css";

const companyLinks = [
  { label: "About BAE", href: "/about" },
  { label: "Our process", href: "/process" },
  { label: "Our work", href: "/portfolio" },
  { label: "Our expertise", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* MEGA FOOTER */}

      <div className={styles.directory}>
        <div className="wrap">
          <div className={styles.brandRow}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="BAE home"
            >
              <span className={styles.brandMark}>
                <Icon name="route" size={25} />
              </span>

              <span className={styles.brandText}>
                <strong>BAE</strong>
                <small>BUSINESS AUTOMATIONS EXPERT</small>
              </span>
            </Link>

            <span className={styles.brandStatement}>
              Your tools. Your people. Better connected.
            </span>

            <a href="#top" className={styles.backTop}>
              Back to top
              <span>
                <Icon name="arrow" size={17} />
              </span>
            </a>
          </div>

          <div className={styles.directoryGrid}>
            {/* INTRODUCTION */}

            <div className={styles.introduction}>
              <p>
                Practical automation and integration
                for the work behind your business.
              </p>

              <a
                href={`mailto:${brand.email}`}
                className={styles.email}
              >
                <span>LET’S CONNECT</span>

                <strong>
                  {brand.email}
                  <Icon name="diagonal" size={16} />
                </strong>
              </a>
            </div>

            {/* NAVIGATION */}

            <nav
              className={styles.navigation}
              aria-label="Footer navigation"
            >
              <div className={styles.column}>
                <h3>Services</h3>

                <ul>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className={styles.overviewLink}
                >
                  All services
                  <Icon name="arrow" size={15} />
                </Link>
              </div>

              <div className={styles.column}>
                <h3>Solutions</h3>

                <ul>
                  {solutionThemes.map((solution) => (
                    <li key={solution.slug}>
                      <Link href={`/solutions/${solution.slug}`}>
                        {solution.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/solutions"
                  className={styles.overviewLink}
                >
                  All solutions
                  <Icon name="arrow" size={15} />
                </Link>
              </div>

              <div className={styles.column}>
                <h3>Company</h3>

                <ul>
                  {companyLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.column}>
                <h3>Workflow concepts</h3>

                <ul>
                  {portfolioConcepts.map((project) => (
                    <li key={project.slug}>
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <span className={styles.conceptNote}>
                  Illustrative design examples.
                </span>
              </div>
            </nav>
          </div>

          <div className={styles.bottomBar}>
            <p>
              © {new Date().getFullYear()} {brand.name}
              <span> · </span>
              {brand.fullName}
            </p>

            <span>
              Clarity in the process. Connection in the work.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}