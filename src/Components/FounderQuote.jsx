
import React from "react";
import { motion } from "motion/react";

export default function FounderQuote() {
  return (
    <section className="founder-quote">
      <motion.div
        className="founder-quote-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* QUOTATION MARK */}
        <div className="founder-quote-mark">
          "
        </div>

        {/* MAIN QUOTE */}
        <blockquote className="founder-quote-text">
          We didn't watch Afghanistan's
          <br />
          tech sector emerge,{" "}
          <span>we helped</span>
          <br />
          <span>build it.</span>
        </blockquote>

        {/* FOUNDER NAME */}
        <p className="founder-quote-author">
          Farshid Ghyasi · Founder, NETLINKS
        </p>
      </motion.div>
    </section>
  );
}
