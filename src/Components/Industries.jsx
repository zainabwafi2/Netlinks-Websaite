
import React from "react";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Manufacturing ERP on Odoo, MRP, production planning, quality control, and shop-floor visibility.",
    link: "#manufacturing",
  },
  {
    number: "02",
    title: "Retail & eCommerce",
    description:
      "Retail ERP, Odoo POS, omnichannel inventory, loyalty, and Shopify/Magento integrations.",
    link: "#retail-ecommerce",
  },
  {
    number: "03",
    title: "Professional Services",
    description:
      "PSA on Odoo, project accounting, timesheet-to-invoice, resource planning, and utilization tracking.",
    link: "#professional-services",
  },
  {
    number: "04",
    title: "Public Sector",
    description:
      "Public sector ERP at national scale, HR, payroll, grants, procurement controls, and auditable trails.",
    link: "#public-sector",
  },
  {
    number: "05",
    title: "Nonprofits",
    description:
      "Nonprofit ERP, donor CRM, grant lifecycle, restricted fund accounting, and outcome reporting.",
    link: "#nonprofits",
  },
  {
    number: "06",
    title: "Trades & Field Services",
    description:
      "Field service software on Odoo, dispatch, mobile workforce, service contracts, and preventive maintenance.",
    link: "#trades-field-services",
  },
];

function IndustryRow({ industry }) {
  return (
    <a
      href={industry.link}
      className="industry-row"
    >
      <span className="industry-number">
        {industry.number}
      </span>

      <h3 className="industry-title">
        {industry.title}
      </h3>

      <p className="industry-description">
        {industry.description}
      </p>

      <span className="industry-arrow">
        <ArrowUpRight size={20} strokeWidth={1.5} />
      </span>
    </a>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="industries-section"
    >
      <div className="industries-container">

        {/* HEADER */}
        <div className="industries-header">
          <h2 className="industries-heading">
            Pattern recognition <span>across</span>
            <br />
            <span>verticals.</span>
          </h2>

          <p className="industries-intro">
            Two decades of implementations means we've seen
            your problem before. Industry templates, compliance
            defaults, and playbooks included.
          </p>
        </div>

        {/* INDUSTRY LIST */}
        <div className="industries-list">
          {industries.map((industry) => (
            <IndustryRow
              key={industry.number}
              industry={industry}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
