
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const questions = [
  {
    question: "What does NETLINKS do?",
    answer:
      "NETLINKS is a US-headquartered enterprise technology partner delivering Odoo ERP implementation, custom software engineering, AI automation, IT staff augmentation, digital transformation, and cloud managed services. Certified Odoo partner since 2012. Senior-only engineering teams, US-led governance, with delivery centers in Gandhinagar (India) and Dubai (UAE).",
  },
  {
    question: "How experienced is NETLINKS with Odoo?",
    answer:
      "NETLINKS has delivered 50+ Odoo implementations since becoming a certified Odoo partner in 2012. Our largest engagement was a 500,000-employee HR, payroll, and custom-modules Odoo deployment for a national government agency, with 1,000+ system users. Experience spans Odoo versions from v10 through v18 across manufacturing, retail, professional services, public sector, nonprofits, and field services.",
  },
  {
    question: "What industries does NETLINKS serve?",
    answer:
      "Manufacturing, retail and e-commerce, professional services, public sector, nonprofits, and trades and field services. Most engagements are US-based, with a steady book of global work in the UAE, the GCC, India, Afghanistan, and Europe. Industry-specific templates, compliance defaults, and proven playbooks come with every engagement.",
  },
  {
    question: "How does an engagement with NETLINKS start?",
    answer:
      "A 30 to 60-minute scoping call to understand what you're trying to achieve and what constraints matter. If it's a fit, we propose a short structured discovery (2-4 weeks) that ends in a solution design document and firm proposal. If we're not the right fit, we'll say so, we'd rather lose a deal than inherit a project we can't deliver.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <span className="faq-eyebrow">
            , QUESTIONS
          </span>

          <h2>
            Answers to what CIOs actually ask.
          </h2>
        </div>

        {/* QUESTIONS */}
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-icon">
                    <span className="faq-icon-horizontal" />
                    <span className="faq-icon-vertical" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                    >
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
