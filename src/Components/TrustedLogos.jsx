
import React from "react";

const logos = [
  {
    name: "Siemens",
    src: "https://netlinks.af/logos/clients/siemens.webp",
    width: 105,
  },
  {
    name: "e&",
    src: "https://netlinks.af/logos/clients/etisalat.webp",
    width: 75,
  },
  {
    name: "MTN",
    src: "https://netlinks.af/logos/clients/mtn.webp",
    width: 78,
  },
  {
    name: "World Bank",
    src: "https://netlinks.af/logos/clients/world-bank.webp",
    width: 120,
  },
  {
    name: "IFC",
    src: "https://netlinks.af/logos/clients/ifc.webp",
    width: 125,
  },
  {
    name: "UNDP",
    src: "https://netlinks.af/logos/clients/undp.webp",
    width: 80,
  },
  {
    name: "World Health Organization",
    src: "https://netlinks.af/logos/clients/who.webp",
    width: 120,
  },
  {
    name: "UNESCO",
    src: "https://netlinks.af/logos/clients/unesco.webp",
    width: 105,
  },
  {
    name: "UN Women",
    src: "https://netlinks.af/logos/clients/un-women.webp",
    width: 105,
  },
  {
    name: "USAID",
    src: "https://netlinks.af/logos/clients/usaid.webp",
    width: 80,
  },
  {
    name: "GIZ",
    src: "https://netlinks.af/logos/clients/giz.webp",
    width: 100,
  },
  {
    name: "Tetra Tech",
    src: "https://netlinks.af/logos/clients/tetra-tech.webp",
    width: 110,
  },
  {
    name: "Chemonics",
    src: "https://netlinks.af/logos/clients/chemonics.webp",
    width: 110,
  },
  {
    name: "Aga Khan Foundation",
    src: "https://netlinks.af/logos/clients/aga-khan-foundation.webp",
    width: 85,
  },
  {
    name: "AKDN",
    src: "https://netlinks.af/logos/clients/akdn.webp",
    width: 85,
  },
  {
    name: "Da Afghanistan Bank",
    src: "https://netlinks.af/logos/clients/da-afghanistan-bank.webp",
    width: 90,
  },
  {
    name: "Afghanistan Payments System",
    src: "https://netlinks.af/logos/clients/afghanistan-payments-system.webp",
    width: 115,
  },
];

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16 md:gap-20 md:pr-20">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-[65px] w-[145px] shrink-0 items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            style={{ width: `${logo.width}px` }}
            className="max-h-[42px] object-contain"
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustedLogos() {
  return (
    <section
      aria-label="Trusted companies and institutions"
      className="w-full overflow-hidden border-y border-[#e9e7e5] bg-[#f8f7f6] py-[20px]"
    >
      <div className="mb-3 text-center text-[11px] font-medium uppercase tracking-[1.5px] text-[#77757b]">
        Trusted by global enterprises and institutions
      </div>

      <div className="logo-marquee relative w-full overflow-hidden">
        <div className="logo-track flex w-max items-center">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}
