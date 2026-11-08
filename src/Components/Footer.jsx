
import React from "react";
import "./Footer.css";

const solutions = [
  ["Odoo ERP", "/solutions/odoo-erp/"],
  ["CRM", "/solutions/crm/"],
  ["Sales management", "/solutions/sales-management/"],
  ["Point of sale", "/solutions/point-of-sale/"],
  ["Accounting", "/solutions/accounting/"],
  ["Inventory", "/solutions/inventory-management/"],
];

const services = [
  ["Odoo ERP services", "/services/odoo-implementation/"],
  ["Custom software", "/services/custom-software-development/"],
  ["AI & automation", "/services/agentic-ai-automation/"],
  ["IT staff augmentation", "/services/it-staff-augmentation/"],
  ["Digital transformation", "/services/digital-transformation/"],
  ["Cloud & managed", "/services/cloud-managed-services/"],
];

const industries = [
  ["Manufacturing", "/industries/manufacturing/"],
  ["Retail & e-commerce", "/industries/retail-ecommerce/"],
  ["Trades & field services", "/industries/trades-field-services/"],
  ["Professional services", "/industries/professional-services/"],
  ["Nonprofits", "/industries/nonprofits/"],
];

const company = [
  ["About", "/about/"],
  ["Customers", "/company/customers/"],
  ["Service areas", "/company/service-areas/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
  ["NETLINKS US", "https://netlinks.us/"],
];

function FooterColumn({ title, links }) {
  return (
    <div className="nl-footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ type }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "x") {
    return (
      <svg {...common}>
        <path d="M5 4 19 20M19 4 5 20" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52v-1.8c-2.45.54-2.97-1.04-2.97-1.04-.4-1.02-.98-1.3-.98-1.3-.8-.55.06-.54.06-.54.88.06 1.35.9 1.35.9.78 1.34 2.05.95 2.55.73.08-.57.3-.95.56-1.17-1.96-.22-4.02-.98-4.02-4.35 0-.96.34-1.74.9-2.35-.1-.22-.39-1.12.09-2.32 0 0 .74-.24 2.42.9a8.4 8.4 0 0 1 4.4 0c1.68-1.14 2.42-.9 2.42-.9.48 1.2.18 2.1.09 2.32.56.61.9 1.39.9 2.35 0 3.38-2.06 4.13-4.03 4.35.32.27.6.8.6 1.61v2.61A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="currentColor" stroke="none">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.3 3.1-5.3 3.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="nl-footer">
      <div className="nl-footer-main">
        <div className="nl-footer-brand">
          <a href="/" className="nl-footer-logo" aria-label="NETLINKS home">
  <img
    src="/images/netlinks-logo.avif"
    alt="NETLINKS"
    className="nl-footer-logo-image"
  />
</a>

          <p className="nl-footer-description">
            A global technology partner for Odoo ERP
            implementation, custom software
            development, AI automation, and digital
            transformation.
          </p>

          <div className="nl-footer-contact">
            <a href="mailto:info@netlinks.af">info@netlinks.af</a>
            <a href="tel:+93773020101">077-302-0101</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=NETLINKS+Plaza+Kabul"
              target="_blank"
              rel="noreferrer"
            >
              NETLINKS Plaza, Street 6, Lane 3,
              Shar-e-naw, Kabul, Afghanistan
            </a>
          </div>

          <div className="nl-footer-socials">
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <SocialIcon type="x" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <SocialIcon type="github" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon type="instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <SocialIcon type="youtube" />
            </a>
          </div>
        </div>

        <FooterColumn title="SOLUTIONS" links={solutions} />
        <FooterColumn title="SERVICES" links={services} />
        <FooterColumn title="INDUSTRIES" links={industries} />
        <FooterColumn title="COMPANY" links={company} />
      </div>

      <div className="nl-footer-bottom">
        <p>© 2026 NETLINKS. All rights reserved.</p>

        <nav className="nl-footer-bottom-links" aria-label="Footer links">
          <a href="/sitemap/">Sitemap</a>
          <a href="/company/business-ethics/">Business ethics</a>
          <a href="/privacy-policy/">Privacy policy</a>
          <a href="/terms-of-use/">Terms of use</a>
          <button
            type="button"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            Dark mode
          </button>
        </nav>
      </div>
    </footer>
  );
}
