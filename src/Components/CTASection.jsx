
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* BACKGROUND CURVED LINES */}
        <svg
          className="cta-lines"
          viewBox="0 0 1270 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M-40 60 C180 15 360 20 560 90 S1000 190 1320 35" />
          <path d="M-40 165 C190 125 350 130 560 180 S1040 320 1320 150" />
          <path d="M-40 275 C180 230 350 245 580 300 S1050 430 1320 260" />
          <path d="M-40 385 C180 335 370 350 600 405 S1100 510 1320 370" />
        </svg>

        {/* CONTENT */}
        <div className="cta-content">
          <h2 className="cta-title">
            Talk to a senior architect
            <br />
            <span>this week.</span>
          </h2>

          <p className="cta-description">
            30-minute call. Walk away with a phased plan and fixed-fee
            <br className="cta-desktop-break" />
            scoping in 5 business days.
          </p>

          <a
            href="#get-started"
            className="cta-button"
          >
            Book a 30-min discovery call
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
