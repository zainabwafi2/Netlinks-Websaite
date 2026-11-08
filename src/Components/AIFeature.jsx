
import React from "react";
import { ArrowUpRight } from "lucide-react";

const aiFeatures = [
  "Retrieval-grounded agents with full citation and audit trail",
  "AI-powered ERP: intelligent automation inside Odoo workflows",
  "Human-in-the-loop controls for regulated and high-stakes processes",
  "Typical outcomes: 30%+ reduction in manual-task hours",
];

export default function AIFeature() {
  return (
    <section id="ai-automation" className="ai-feature">
      <div className="ai-feature-container">

        {/* LEFT IMAGE */}
        <div className="ai-feature-visual">
          <img
            src="https://netlinks.af/illustrations/home-feature-ai-1280.webp"
            alt="NETLINKS agentic AI automation platform"
            className="ai-feature-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="ai-feature-content">

          <span className="ai-feature-label">
            02, AI & AUTOMATION
          </span>

          <h2 className="ai-feature-title">
            Agents that don't just
            <br />
            chat, <span>they work.</span>
          </h2>

          <p className="ai-feature-description">
            Production AI agents that close tickets, reconcile invoices,
            and answer procurement queries. Grounded, governed,
            observable, not demos.
          </p>

          <ul className="ai-feature-list">
            {aiFeatures.map((feature, index) => (
              <li key={index}>
                <span className="ai-feature-bullet">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://netlinks.af/services/agentic-ai-automation/"
            className="ai-feature-button"
            target="_blank"
            rel="noreferrer"
          >
            See how it works
            <ArrowUpRight size={15} />
          </a>

        </div>
      </div>
    </section>
  );
}
