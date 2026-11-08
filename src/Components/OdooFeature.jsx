
import React from "react";
import { ArrowUpRight } from "lucide-react";

const features = [
  "50+ Odoo deployments delivered, including a 500,000-employee HR, payroll, and custom modules engagement",
  "Odoo migration from SAP, NetSuite, Microsoft Dynamics, QuickBooks, and legacy Odoo",
  "Upgrade-safe custom Odoo modules by senior Python engineers",
  "Enterprise Odoo for manufacturing, distribution, field service, and public sector",
];

export default function OdooFeature() {
  return (
    <section id="odoo-erp" className="odoo-feature">
      <div className="odoo-feature-container">

        {/* LEFT CONTENT */}
        <div className="odoo-feature-content">

          <span className="odoo-feature-label">
            01, ODOO ERP
          </span>

          <h2 className="odoo-feature-title">
            One platform. Every
            <br />
            department.{" "}
            <span>Actually</span>
            <br />
            <span>integrated.</span>
          </h2>

          <p className="odoo-feature-description">
            Certified Odoo partner, 50+ implementations, including a
            500,000-employee HR and payroll engagement for a national
            government with 1,000+ users. Finance, ops, sales, HR, and
            manufacturing in one platform.
          </p>

          <ul className="odoo-feature-list">
            {features.map((feature, index) => (
              <li key={index}>
                <span className="odoo-feature-bullet">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://netlinks.af/solutions/odoo-erp/"
            className="odoo-feature-button"
            target="_blank"
            rel="noreferrer"
          >
            Explore Odoo services
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="odoo-feature-visual">
          <img
            src="https://netlinks.af/illustrations/home-feature-odoo-1280.webp"
            alt="Odoo unified enterprise platform with HR dashboard and AI assistant"
            className="odoo-feature-image"
          />
        </div>

      </div>
    </section>
  );
}
