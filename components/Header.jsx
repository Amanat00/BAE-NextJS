
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";
import { services, solutionThemes } from "../data/content";

const allowedSlugs = [
  "crm-automation",
  "business-process-automation",
  "workflow-integrations",
];

const menuServices = allowedSlugs
  .map((slug) => services.find((item) => item.slug === slug))
  .filter(Boolean);

export default function Header() {
  const [menu, setMenu] = useState("");
  const [mobile, setMobile] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMenu("");
    setMobile(false);
  }, [path]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenu("");
        setMobile(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenu("");

  const toggle = (name) => {
    setMenu((current) => (current === name ? "" : name));
  };

  return (
    <header className="site-header" onMouseLeave={closeMenu}>
      <div className="header-inner wrap">
        <Link
          href="/"
          className="brand"
          aria-label="BAE home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Icon name="route" size={23} />
          </span>
          <span>
            <strong>BAE</strong>
            <small>BUSINESS AUTOMATIONS EXPERT</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <div
            className="nav-owner"
            onMouseEnter={() => setMenu("services")}
          >
            <button
              type="button"
              aria-expanded={menu === "services"}
              aria-controls="mega-services"
              onClick={() => toggle("services")}
            >
              Services <Icon name="down" size={14} />
            </button>
          </div>

          <div
            className="nav-owner"
            onMouseEnter={() => setMenu("solutions")}
          >
            <button
              type="button"
              aria-expanded={menu === "solutions"}
              aria-controls="mega-solutions"
              onClick={() => toggle("solutions")}
            >
              Solutions <Icon name="down" size={14} />
            </button>
          </div>

          <Link href="/portfolio" onMouseEnter={closeMenu}>
            Our work
          </Link>
          <Link href="/process" onMouseEnter={closeMenu}>
            Process
          </Link>
          <Link href="/about" onMouseEnter={closeMenu}>
            About
          </Link>
          <Link href="/team" onMouseEnter={closeMenu}>
            Expertise
          </Link>
        </nav>

        <Link
          href="/contact"
          className="btn btn-small header-cta"
          onMouseEnter={closeMenu}
        >
          Talk to an expert
          <Icon name="diagonal" size={16} />
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => {
            setMobile((current) => !current);
            setMenu("");
          }}
        >
          <Icon name={mobile ? "x" : "menu"} size={25} />
        </button>
      </div>

      {/* DESKTOP MEGA MENU */}

      {menu && !mobile && (
        <div
  className={`mega-frame desktop-mega ${
    menu === "services" ? "mega-services-panel" : ""
  }`}
  id={`mega-${menu}`}
>
          <div className="mega-layout wrap">
            <div className="mega-main">

              {menu === "services" ? (
                <div className="mega-service-columns">
                  {menuServices.map((service) => {
                    const serviceHref = `/services/${service.slug}`;

                    return (
                      <div
                        className="mega-service-column"
                        key={service.slug}
                      >
                        <Link
                          href={serviceHref}
                          className="mega-service-heading"
                          onClick={closeMenu}
                        >
                          {service.title}
                          <Icon name="diagonal" size={16} />
                        </Link>

                        <p className="mega-service-intro">
                          {service.eyebrow}
                        </p>

                        <div className="mega-service-subpages">
                          {service.areas.map((area) => (
                            <Link
                              key={area}
                              href={serviceHref}
                              onClick={closeMenu}
                              aria-label={`Explore ${area} in ${service.title}`}
                            >
                              <Icon name="arrow" size={13} />
                              <span>{area}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mega-links">
                  {solutionThemes.map((item) => (
                    <Link
                      href={`/solutions/${item.slug}`}
                      key={item.slug}
                      onClick={closeMenu}
                      className="mega-link"
                    >
                      <span className="mega-number">
                        <Icon name="arrow" size={15} />
                      </span>

                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.tag}</small>
                      </span>

                      <Icon name="diagonal" size={17} />
                    </Link>
                  ))}
                </div>
              )}

              <Link
                className="mega-viewall"
                href={menu === "services" ? "/services" : "/solutions"}
                onClick={closeMenu}
              >
                Explore all {menu}
                <Icon name="arrow" size={16} />
              </Link>
            </div>

            <div className="mega-feature">
              <div className="mega-feature-icon">
                <Icon name="route" size={35} />
              </div>

              <span className="eyebrow">
                THINK IN CONNECTED SYSTEMS
              </span>

              <h3>
                Less manual work. More room to grow.
              </h3>

              <p>
                Start with the workflow, then connect the
                right tools around your people.
              </p>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-link"
              >
                Discuss your workflow
                <Icon name="diagonal" size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE NAVIGATION */}

      {mobile && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMobile(false)}>
            Home
          </Link>

          <button
            type="button"
            onClick={() => toggle("services")}
            aria-expanded={menu === "services"}
          >
            Services
            <Icon name="down" size={17} />
          </button>

          {menu === "services" && (
            <div className="mobile-service-groups">
              {menuServices.map((service) => (
                <div
                  className="mobile-service-group"
                  key={service.slug}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="mobile-service-heading"
                    onClick={() => setMobile(false)}
                  >
                    {service.title}
                    <Icon name="diagonal" size={15} />
                  </Link>

                  {service.areas.map((area) => (
                    <Link
                      key={area}
                      href={`/services/${service.slug}`}
                      className="mobile-service-subpage"
                      onClick={() => setMobile(false)}
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              ))}

              <Link
                href="/services"
                className="mobile-all-services"
                onClick={() => setMobile(false)}
              >
                Explore all services
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggle("solutions")}
            aria-expanded={menu === "solutions"}
          >
            Solutions
            <Icon name="down" size={17} />
          </button>

          {menu === "solutions" &&
            solutionThemes.map((item) => (
              <Link
                key={item.slug}
                className="sub-link"
                href={`/solutions/${item.slug}`}
                onClick={() => setMobile(false)}
              >
                {item.title}
              </Link>
            ))}

          <Link href="/portfolio" onClick={() => setMobile(false)}>
            Our work
          </Link>

          <Link href="/process" onClick={() => setMobile(false)}>
            Process
          </Link>

          <Link href="/about" onClick={() => setMobile(false)}>
            About
          </Link>

          <Link href="/team" onClick={() => setMobile(false)}>
            Expertise
          </Link>

          <Link href="/contact" onClick={() => setMobile(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
