
import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    category: "ERP",
    title: "Odoo ERP services.",
    description:
      "Odoo implementation, customization, integration, and migration from SAP, NetSuite, Dynamics, and QuickBooks. 50+ deployments, including a 500,000-employee HR and payroll engagement.",
    link: "#odoo-erp",
  },
  {
    number: "02",
    category: "BUILD",
    title: "Custom software development.",
    description:
      "Enterprise web, mobile, and backend systems when shelf products don't fit. Senior-only squads, the team that builds also maintains.",
    link: "#custom-software",
  },
  {
    number: "03",
    category: "INTELLIGENCE",
    title: "AI & automation.",
    description:
      "Production AI agents grounded in your data, governed by your rules, observable end to end. Not demos.",
    link: "#ai-automation",
  },
  {
    number: "04",
    category: "PEOPLE",
    title: "IT staff augmentation.",
    description:
      "Senior engineers, architects, and DevOps embedded with your team. US-led delivery, direct-hire model, global bench in India and the UAE.",
    link: "#staff-augmentation",
  },
  {
    number: "05",
    category: "STRATEGY",
    title: "Digital transformation.",
    description:
      "Executive roadmap, enterprise architecture, build-vs-buy, and program delivery. Twenty years of pattern recognition you can execute.",
    link: "#digital-transformation",
  },
  {
    number: "06",
    category: "CLOUD",
    title: "Cloud & managed services.",
    description:
      "Managed Odoo hosting, cloud infrastructure, 24/7 monitoring, and ERP managed services on AWS, Azure, GCP, and private cloud.",
    link: "#cloud-services",
  },
];

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-category">
          {service.number} / {service.category}
        </span>

        <a
          href={service.link}
          className="service-arrow"
          aria-label={`Explore ${service.title}`}
        >
          <ArrowUpRight size={15} strokeWidth={1.6} />
        </a>
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}
