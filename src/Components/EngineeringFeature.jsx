
import React from "react";
import { ArrowUpRight } from "lucide-react";

const engineeringFeatures = [
  "Senior-only squads, no ticket-shuffling to offshore pools",
  "Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes, serverless",
  "ISO 12207 + ISO 27001 certified delivery at the group level",
  "Compliance-ready from day one: SSO via SAML/OIDC, RBAC, audit logs, encryption",
];

export default function EngineeringFeature() {
  return (
    <section
      id="custom-engineering"
      className="engineering-feature"
    >
      <div className="engineering-container">

        {/* LEFT IMAGE */}
        <div className="engineering-visual">
          <img
            src="https://netlinks.af/illustrations/home-feature-engineering-1280.webp"
            alt="NETLINKS custom software engineering workspace"
            className="engineering-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="engineering-content">

          <span className="engineering-label">
            03, CUSTOM ENGINEERING
          </span>

          <h2 className="engineering-title">
            When nothing off-the-
            <br />
            shelf <span>quite fits.</span>
          </h2>

          <p className="engineering-description">
            A senior product team, designers, PMs, engineers,
            embedded with yours. Prototype in weeks, ship in
            months, maintain what we build. No junior hand-offs.
          </p>

          <ul className="engineering-list">
            {engineeringFeatures.map((feature, index) => (
              <li key={index}>
                <span className="engineering-bullet">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#engineering-philosophy"
            className="engineering-button"
          >
            Engineering philosophy
            <ArrowUpRight size={15} />
          </a>

        </div>
      </div>
    </section>
  );
}
