
import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const heroImage = "https://netlinks.af/illustrations/home-hero-1280.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full overflow-hidden bg-white"
    >
      <div className="mx-auto grid min-h-[650px] w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-14 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-5 lg:px-12 lg:py-10 xl:px-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#76577f]">
            20 years delivering from Kabul · Afghanistan's enterprise technology partner
          </p>

          <h1 className="max-w-[570px] text-[40px] font-normal leading-[1.04] tracking-[-1.8px] text-[#17171b] sm:text-[48px] lg:text-[50px] xl:text-[56px]">
            Enterprise Odoo, custom software, and AI,
            <span className="block italic text-[#805b7c]">
              engineered in Afghanistan.
            </span>
          </h1>

          <p className="mt-6 max-w-[490px] text-[14px] leading-[1.75] text-[#55545d]">
            Afghanistan-based since 2005. We built the 500,000-employee
            Odoo HR and payroll system for the national government,
            and Jobs.af, the country's largest job-hunting platform.
            Senior teams in Kabul delivering for clients across
            Afghanistan, the GCC, India, and the US.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#795982] px-6 text-[12px] font-semibold text-white transition hover:-translate-y-1 hover:bg-[#62466b]"
            >
              Book a 30-min discovery call
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[46px] items-center rounded-full border border-[#dedade] px-6 text-[12px] font-medium text-[#252525] transition hover:border-[#795982] hover:text-[#795982]"
            >
              Explore services
            </a>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 h-px w-full max-w-[440px] bg-[#e8e5e8]" />

          {/* STATISTICS */}
          <div className="mt-5 grid max-w-[470px] grid-cols-3 gap-4">
            <div>
              <h3 className="text-[25px] font-normal tracking-tight text-[#222]">
                500K <span className="italic text-[#805b7c]">+</span>
              </h3>
              <p className="mt-1 text-[9px] leading-[1.6] tracking-[0.8px] text-[#777780]">
                Employees · national-government Odoo HR rollout
              </p>
            </div>

            <div>
              <h3 className="text-[25px] font-normal tracking-tight text-[#222]">
                20 <span className="italic text-[#805b7c]">yrs</span>
              </h3>
              <p className="mt-1 text-[9px] leading-[1.6] tracking-[0.8px] text-[#777780]">
                Delivering enterprise software from Kabul
              </p>
            </div>

            <div>
              <h3 className="text-[25px] font-normal tracking-tight text-[#222]">
                Jobs.af
              </h3>
              <p className="mt-1 text-[9px] leading-[1.6] tracking-[0.8px] text-[#777780]">
                Afghanistan's largest job platform, built by NETLINKS
              </p>
            </div>
          </div>
        </motion.div>

        {/* ORIGINAL NETLINKS HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex w-full items-center justify-center"
        >
          <img
            src={heroImage}
            alt="NETLINKS unified enterprise systems on Odoo"
            className="block h-auto w-full max-w-[680px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
