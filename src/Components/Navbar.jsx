
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const menus = {
  Solutions: {
    image: "/images/solutions-menu.webp",
    button: "Explore Odoo ERP",
    footer: "See all solutions",
    groups: [
      {
        title: "SALES & FINANCE",
        items: [
          ["CRM", "Pipeline, leads, customer relationships"],
          ["Sales management", "Quote-to-cash, CPQ, eSign"],
          ["Point of sale", "POS integrated with the back office"],
          ["Accounting", "Multi-currency, multi-entity financials"],
        ],
      },
      {
        title: "OPERATIONS & PEOPLE",
        items: [
          ["Inventory", "Warehouse, stock, routing, replenishment"],
          ["Purchase management", "RFQs, approvals, vendor scorecards"],
          ["Human resources", "Employees, payroll, recruitment"],
          ["Project management", "Plan, track, deliver projects"],
        ],
      },
    ],
  },

  Services: {
    image: "/images/services-menu.webp",
    button: "Book an Odoo scoping call",
    footer: "All services",
    groups: [
      {
        title: "ODOO PRACTICE",
        items: [
          ["Odoo implementation", "Certified-partner Odoo rollout"],
          ["Odoo customization", "Upgrade-safe custom Odoo modules"],
          ["Odoo integration", "Payments, e-commerce and integrations"],
          ["Odoo migration", "Migration to Odoo"],
          ["IT staff augmentation", "Senior engineers and delivery teams"],
        ],
      },
      {
        title: "ENGINEERING & OPERATIONS",
        items: [
          ["Custom software", "Web, mobile and platform development"],
          ["Web & mobile", "React, iOS and Android"],
          ["AI & automation", "AI and workflow automation"],
          ["AI consulting", "Strategy and architecture"],
          ["Cloud & managed", "Cloud operations"],
          ["Digital transformation", "Digital transformation services"],
        ],
      },
    ],
  },

  Industries: {
    image: "/images/industries-menu.webp",
    button: "Explore our industries",
    footer: "All industries",
    groups: [
      {
        title: "COMMERCIAL",
        items: [
          ["Manufacturing", "Production and planning"],
          ["Retail & e-commerce", "POS and online inventory"],
          ["Trades & field services", "Dispatch and mobile workforce"],
        ],
      },
      {
        title: "SERVICE-SECTOR",
        items: [
          ["Professional services", "Projects and accounting"],
          ["Nonprofits", "Donor CRM and fund accounting"],
        ],
      },
    ],
  },

  Company: {
    image: "/images/company-menu.webp",
    button: "Our story",
    footer: "Contact us",
    groups: [
      {
        title: "WHO WE ARE",
        items: [
          ["About Us", "Twenty years of enterprise delivery"],
          ["Why NETLINKS", "Why choose NETLINKS"],
          ["Advisory Board", "Our industry leaders"],
          ["Methodology", "Our delivery methodology"],
          ["Customers", "Our customers and partners"],
        ],
      },
      {
        title: "RESOURCES",
        items: [
          ["Features", "Our services and capabilities"],
          ["Pricing", "How we scope and charge"],
          ["FAQ", "Frequently asked questions"],
          ["Blog", "Notes from the field"],
          ["Contact", "Get in touch"],
        ],
      },
    ],
  },
};

const navItems = [
  "Solutions",
  "Services",
  "Industries",
  "Partners",
  "Company",
];

function Logo() {
  return (
    <a href="/" aria-label="NETLINKS home" className="flex shrink-0 items-center">
   <img
  src="/images/netlinks-logo.avif"
  alt="NETLINKS"
  className="h-auto w-[150px] object-contain"
/>
    </a>
  );
}

function Dropdown({ name, close }) {
  const data = menus[name];

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-full z-50 w-[calc(100%-40px)] max-w-[1260px] -translate-x-1/2 rounded-2xl border border-[#dedede] bg-white p-7 shadow-[0_20px_55px_rgba(0,0,0,0.13)] lg:p-[32px]"
    >
      <div className="grid grid-cols-[34%_1fr] gap-9">
        <div>
          <img
            src={data.image}
            alt={`${name} illustration`}
            className="h-[227px] w-full rounded-xl object-cover"
          />

          <button
            type="button"
            onClick={close}
            className="mt-[13px] flex h-[43px] w-full items-center justify-center gap-2 rounded-full bg-[#705486] text-xs font-semibold text-white transition hover:bg-[#604574]"
          >
            {data.button}
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-9">
          {data.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-[10px] font-medium tracking-[1.5px] text-[#777780]">
                {group.title}
              </h3>

              {group.items.map(([title, description]) => (
                <button
                  type="button"
                  key={title}
                  onClick={close}
                  className="group block w-full border-b border-[#e9e9e9] px-1 py-[11px] text-left transition hover:bg-[#faf8fb]"
                >
                  <span className="block text-[13px] font-semibold text-[#202020] group-hover:text-[#705486]">
                    {title}
                  </span>
                  <span className="mt-1 block text-[12px] leading-[1.45] text-[#777780]">
                    {description}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {data.footer && (
        <div className="mt-6 border-t border-[#e9e9e9] pt-5 text-center">
          <button
            type="button"
            onClick={close}
            className="inline-flex items-center gap-2 rounded-full border border-[#dedede] px-5 py-2.5 text-xs transition hover:border-[#705486] hover:text-[#705486]"
          >
            {data.footer}
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

function GetStarted({ close }) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    service: "",
    goal: "",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const field =
    "mt-1.5 w-full rounded-md border border-[#d8d8d8] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#705486]";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative my-auto w-full max-w-[440px] rounded-xl bg-white p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-5 top-5"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <p className="text-[9px] tracking-[1.5px] text-gray-500">
          GET STARTED
        </p>

        <h2 className="mt-3 text-[30px] leading-tight text-[#171717]">
          Tell us about{" "}
          <span className="italic text-[#705486]">your project.</span>
        </h2>

        <p className="mt-3 text-[11px] leading-5 text-gray-500">
          Tell us about your business and project requirements.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {[1, 2].map((number) => (
            <div
              key={number}
              className={`rounded-md border p-3 ${
                step === number
                  ? "border-[#b9a6ca] bg-[#f0eaf4]"
                  : "border-[#e5e5e5]"
              }`}
            >
              <p className="text-[9px] text-gray-400">0{number}</p>
              <p className="text-[10px] font-semibold">
                {number === 1 ? "You & your project" : "Scope & context"}
              </p>
            </div>
          ))}
        </div>

        {step === 1 ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="mt-5"
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                ["name", "FULL NAME *", "text"],
                ["email", "WORK EMAIL *", "email"],
                ["company", "COMPANY *", "text"],
                ["phone", "PHONE", "tel"],
                ["country", "COUNTRY / REGION", "text"],
              ].map(([name, label, type]) => (
                <label
                  key={name}
                  className="text-[9px] tracking-wider text-gray-500"
                >
                  {label}
                  <input
                    className={field}
                    name={name}
                    type={type}
                    required={label.includes("*")}
                    value={form[name]}
                    onChange={update}
                  />
                </label>
              ))}

              <label className="text-[9px] tracking-wider text-gray-500">
                PRIMARY SERVICE *
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={update}
                  className={field}
                >
                  <option value="">Select one</option>
                  <option>Odoo implementation</option>
                  <option>Custom software</option>
                  <option>AI & automation</option>
                </select>
              </label>

              <label className="col-span-2 text-[9px] tracking-wider text-gray-500">
                WHAT ARE YOU TRYING TO ACCOMPLISH? *
                <textarea
                  name="goal"
                  required
                  value={form.goal}
                  onChange={update}
                  rows={4}
                  className={field}
                  placeholder="Describe your project..."
                />
              </label>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={close}
                className="rounded-full border px-4 py-2 text-[10px] text-gray-500"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-full bg-[#705486] px-4 py-2.5 text-[10px] font-semibold text-white"
              >
                Continue →
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-5 rounded-lg border border-[#dedede] p-5">
            <p className="text-sm font-semibold text-[#705486]">
              02 — Scope & context
            </p>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              Your first-step information has been saved temporarily.
              The second-step form can be added when its requirements are ready.
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-5 rounded-full border px-4 py-2 text-xs"
            >
              ← Back
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [getStarted, setGetStarted] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const outside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActive(null);
      }
    };

    const escape = (e) => {
      if (e.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
        setGetStarted(false);
      }
    };

    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const toggleMenu = (name) => {
    setActive((current) => (current === name ? null : name));
  };

  const close = () => setActive(null);

  return (
    <>
      <header
        ref={navRef}
        className="fixed left-0 top-0 z-[60] w-full border-t-2 border-[#333] border-b border-[#ededed] bg-white"
      >
        <nav className="mx-auto flex h-[70px] max-w-[1350px] items-center justify-between px-5 md:px-10">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((name) => (
              <button
                key={name}
                type="button"
                aria-expanded={active === name}
                onClick={() => toggleMenu(name)}
                className={`flex items-center gap-1 rounded-lg px-3 py-3 text-[13px] font-semibold transition ${
                  active === name
                    ? "bg-[#f0eaf4] text-[#705486]"
                    : "text-[#222] hover:bg-[#f7f4f9]"
                }`}
              >
                {name}
                <ChevronDown
                  size={13}
                  className={`transition-transform ${
                    active === name ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              close();
              setGetStarted(true);
            }}
            className="hidden items-center gap-1 rounded-full bg-[#705486] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#5d4372] lg:flex"
          >
            Get started <ArrowUpRight size={13} />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((value) => !value);
              setActive(null);
            }}
            className="rounded-lg p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence mode="wait">
          {active && menus[active] && (
            <Dropdown key={active} name={active} close={close} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="max-h-[80vh] overflow-y-auto border-t bg-white lg:hidden"
            >
              <div className="space-y-1 p-4">
                {navItems.map((name) => (
                  <div key={name}>
                    <button
                      type="button"
                      onClick={() => {
                        if (name === "Partners") {
                          setActive("Partners");
                        } else {
                          toggleMenu(name);
                        }
                      }}
                      className="flex w-full items-center justify-between rounded-lg p-3 text-sm font-semibold hover:bg-[#f7f4f9]"
                    >
                      {name}
                      <ChevronDown
                        size={15}
                        className={`transition-transform ${
                          active === name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {active === name && menus[name] && (
                      <div className="px-3 pb-3">
                        {menus[name].groups.map((group) => (
                          <div key={group.title} className="mb-4">
                            <p className="py-2 text-[10px] tracking-widest text-gray-400">
                              {group.title}
                            </p>

                            {group.items.map(([title, description]) => (
                              <button
                                type="button"
                                key={title}
                                onClick={() => {
                                  close();
                                  setMobileOpen(false);
                                }}
                                className="block w-full border-b border-gray-100 py-3 text-left"
                              >
                                <span className="block text-xs font-semibold">
                                  {title}
                                </span>
                                <span className="mt-1 block text-[11px] text-gray-500">
                                  {description}
                                </span>
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setGetStarted(true);
                  }}
                  className="w-full rounded-full bg-[#705486] py-3 text-sm font-semibold text-white"
                >
                  Get started ↗
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {getStarted && (
          <GetStarted close={() => setGetStarted(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
